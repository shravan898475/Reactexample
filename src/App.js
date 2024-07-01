import React,{useState,useCallback} from "react";
import Usecallback from "./Components/Usecallback";
import Customehookexpl from "./Components/Customehookexpl";
import Hoc from "./Components/Hocexpl";
function App() {

  const[count,setCount]=useState(0);
  const[todos,setTodo]=useState([]);

  const increment =()=>
    {
      setCount((c)=>c+1);
    };

    const addTodos =useCallback(()=>{

     setTodo((t) => [...t,'new todos']);
    },[todos])


  return (
    <>
      <Usecallback todos={todos} addTodos={addTodos} />
      <h2>count :{count}</h2>
      <button onClick={increment}>Add Count</button>
      <hr/>
      <p>expl for custome hooks</p>
      <Customehookexpl />
     <hr/>
      <p>Hoc Example</p>
      <Hoc/>

    
    </>
  );
}

export default App;
