import React,{useState,useCallback} from "react";
import Usecallback from "./Components/Usecallback";
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
      <h1>hello</h1>

      <h2>count :{count}</h2>

      <button onClick={increment}>Add Count</button>
    </>
  );
}

export default App;
