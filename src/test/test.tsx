import TSX from '..'

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
