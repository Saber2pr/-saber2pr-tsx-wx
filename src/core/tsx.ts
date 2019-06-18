/*
 * @Author: saber2pr
 * @Date: 2019-06-18 12:28:38
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-18 13:58:56
 */
declare global {
  namespace JSX {
    interface VNodeAttributes<K extends keyof TagNameMap> {
      children?: any
    }

    type IntrinsicAttributes<K extends keyof TagNameMap> = TagNameMap[K] &
      VNodeAttributes<K>

    type Attributes<K extends keyof TagNameMap> = Partial<
      IntrinsicAttributes<K>
    >

    type IntrinsicElements = { [K in keyof TagNameMap]: Attributes<K> }

    interface Element extends VNode {}

    interface ElementChildrenAttribute {
      children: {}
    }
  }
}

interface VNode<K extends keyof TagNameMap = keyof TagNameMap> {
  type: K
  props?: JSX.Attributes<K>
  children?: Array<VNode<any>>
}

export function TSX<K extends keyof TagNameMap>(
  type: VNode<K>['type'] | Function,
  props: VNode<K>['props'] = {},
  ...children: VNode<K>['children']
) {
  if (typeof type === 'function') return type({ ...props, children })

  return { type, props: { ...props }, children: TSX.toArray(children) }
}

export namespace TSX {
  export function toArray<T>(elements: any) {
    return [].concat(...elements) as T[]
  }

  export function toString(vnode: JSX.Element | string = ''): string {
    if (typeof vnode === 'string' || typeof vnode === 'number') return vnode

    const { type, props, children } = vnode
    const tag = toLowerCase(type)

    const attr = Object.entries(props).reduce(
      (receiver, [k, v]) => receiver.concat(` ${k}="${v}"`),
      ''
    )
    return `<${tag}${attr}>${children.map(toString).join('')}</${tag}>`
  }
}

const toLowerCase = (name: string) =>
  name.replace(/\B([A-Z])/g, '-$1').toLowerCase()
