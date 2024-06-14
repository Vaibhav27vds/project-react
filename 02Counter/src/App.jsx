import './App.css'
import { useState } from 'react'

function App() {

  let [counter, setCounter] = useState(1)

  const  increase = () => {
    if(counter<5){
    setCounter(counter + 1)
    }
  }
  const decrease = () => {
    if(counter>=1){
    setCounter(counter - 1)
    }
  }
  return (
    <>
    <h1>Counter Project</h1>
    <h2>Counter Value: {counter}</h2>

    <button
    onClick = {increase}>Increase {counter}</button>
    <br />
    <button
    onClick={decrease}
    >Decrease {counter}</button>
    </>
  )
}

export default App
