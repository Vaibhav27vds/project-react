import Card from "./components/Card"
import Heading from "./components/Heading"

function App() {

  return (
    <>
    <div className="bg-black w-full h-screen ">
      <div className="flex justify-center items-center">
      <Heading name="Password Generator"/>
      </div>
      <div className="flex justify-center items-center mt-10">
        <Card />
      </div>
    </div>
    </>
  )
}

export default App
