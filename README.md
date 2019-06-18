# @saber2pr/tsx-wx

> compile tsx into wxml.

```bash
# from npm
npm install @saber2pr/tsx-wx

# from github
git clone https://github.com/Saber2pr/tsx-wx.git
```

# Example

```tsx
import TSX from '@saber2pr/tsx-wx'

const App = ({ names, children }: { names: string[]; children?: string }) => (
  <view>
    <text>{children}</text>
    {names.map(n => (
      <text>{n}</text>
    ))}
  </view>
)

// tsx to string
const wxml = TSX.toString(<App names={['saber', 'saber2pr']}>tsx-wx</App>)
console.log(wxml)

// tsx to string and save in the file.
TSX.toFile('./test.wxml', <App names={['saber', 'saber2pr']}>tsx-wx</App>)
```

./text.wxml

```tsx
<view>
  <text>tsx-wx</text>
  <text>saber</text>
  <text>saber2pr</text>
</view>
```

---

## start

```bash
npm install
```

```bash
npm start

npm test

```

> Author: saber2pr

---

## develope and test

> you should write ts in /src

> you should make test in /src/test

> export your core in /src/index.ts!
