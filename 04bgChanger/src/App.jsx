import { useState } from "react"
import Button from "./components/Button"

function App() {
const [color, setColor] = useState("#37384b")

const changeColor = () => {
  console.log("Hello");
}

  return (
    <>
    <div className ='place-items-end w-full h-screen md:h-screen  flex justify-center'
    style={{backgroundColor:color}}
    >
       <div class="  bg-white hover:bg-gray-300 active:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-100 ... w-1/2 h-20 rounded-3xl flex justify-evenly">
       <button
        type="button"
        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        onClick={() => setColor("black")}
      >
        Black
      </button>
      <button
        type="button"
        className="rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
        onClick={() => setColor("yellow")}
      >
        Yellow
      </button>
      <button
        type="button"
        className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
        onClick={() => setColor("red")}
        
      >
        Red
      </button>
      <button
        type="button"
        className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        onClick={() => setColor("green")}
      >
        Green
      </button>
</div>
    </div>
    </>
  )
}

export default App
