
import { useState } from 'react'

const orders = [100, 200, 300];
const info = {
  a:1,
  b:2,
  c:3
}

function App () {
  const [update, setUpdate] = useState(info)

  const handleUpdate = () => {
    setUpdate(prev => {

      // Xử lý

      return{
        ...prev,
        d:4
      }
    })
  }

  return (
    <div className="App" style={{padding: 10}}>
      <h1>{JSON.stringify(update)}</h1>
      <button onClick={handleUpdate}>Increase</button>
    </div>
  ) 
}

export default App;
