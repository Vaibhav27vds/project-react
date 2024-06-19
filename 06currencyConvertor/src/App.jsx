import Card from "./components/Card"


function App() {

  return (
    <>
    <div className= ' bg-gray-950 w-full h-screen'>
      <div className="flex justify-center">
      <h1 className="text-white text-5xl mt-5">Currency Convertor</h1>
      </div>
      <div className="flex justify-center mt-20">
      <Card />
      </div>
    </div>
    </>
  )
}

export default App
