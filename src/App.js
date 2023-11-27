import { useState } from 'react'
import Content from './Content'

function App(){

  const [toggle, setToggle] = useState(false)

  // const handleToggle () => {

  // }

  return (
    <div style={{ padding: 32 }}>
      <button onClick={() => {setToggle(!toggle)}}>Toggle</button>
      {toggle && <Content />}
    </div>
  )
}

export default App;