import { useState } from "react"


function App() {
  const [color, setColor] = useState("green")

  let colorChange=(value)=>{
    setColor(value);
  }

  return (
    <>
     <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button         
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          onClick={() => setColor('red')}
          style={{backgroundColor: "red"}}
          >Red</button>
          <button         
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          onClick={() => colorChange('blue')}
          style={{backgroundColor: "blue"}}
          >Blue</button>
          <button         
           onClick={() => colorChange('brown')}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-amber-950"
         
          >Brown</button>
          <button         
          onClick={()=>setColor('purple')}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-amber-950"
          style={{backgroundColor: "purple"}}
         
          >Purple</button>
        </div>
        </div>
        </div>     
      
    
    </>
  )
}

export default App
