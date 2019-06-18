# @saber2pr/tsx-wx

> compile tsx into wxml.

```bash
# from npm
npm install @saber2pr/tsx-wx

# from github
git clone https://github.com/Saber2pr/-saber2pr-tsx-wx.git
```

# Example

```tsx
import TSX from '@saber2pr/tsx-wx'

const Link = ({ children }: { children?: string }) => (
  <navigator>{children}</navigator>
)

const App = () => (
  <view>
    <text>hello world</text>
    <form>
      <input type="text" />
      <button>submit</button>
    </form>
    <richText>richText</richText>
    <Link>cancel</Link>
  </view>
)

// tsx to string
const wxml = TSX.toString(<App />)
console.log(wxml)

// tsx to string and save in the file.
TSX.toFile('./test.wxml', <App />)
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
