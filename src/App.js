import { useReducer } from "react";

// Init state
const initState = 0

//Actions
const UP_ACTION = 'up'
const DOWN_ACTION = 'down'

// Reducer
const reducer = (state, action) => {
  console.log("reducer running...");
  switch(action){
    case UP_ACTION:
      return state + 1
    case DOWN_ACTION:
      return state - 1
    default:
      throw new Error('Invalid aciton!')
  }
}

function App(){

  const [count, dispatch] = useReducer(reducer, initState)

  return(
    <>
      <h1>{count}</h1>
      <button
        onClick={() => dispatch(DOWN_ACTION)}
      >
        Down
      </button>
      <button
        onClick={() => dispatch(UP_ACTION)}
      >
        Up
      </button>
    </>
  )
}

export default App;