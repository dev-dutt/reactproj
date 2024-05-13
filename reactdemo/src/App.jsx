import { useEffect,useState } from "react";

function App() {

  let [counter,setcounter]=useState(19);
  // let counter = 5;

  function addvalue(){
    // counter = counter+1;
    if(counter<20){
      setcounter(counter+1);
      console.log('add',counter);
    }
    
    
  }

  const subvalue=()=>{
    if(counter > 0){
      setcounter(counter-1);
      console.log('sub',counter);
    }
   
    

  }

  return (
    <>
   <h1>Value : {counter}</h1>
   <button onClick={addvalue}>ADD</button>
   <button onClick={subvalue}>SUB</button>
   </>
  )
}

export default App
