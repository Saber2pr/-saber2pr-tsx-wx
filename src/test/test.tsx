import TSX from '..'

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
