import React,{useState,useCallback} from "react";
import Usecallback from "./Components/Usecallback";
import Customehookexpl from "./Components/Customehookexpl";
import Hoc from "./Components/Hocexpl";
// import Debouncing from "./Components/Debouncing";
import TwoWayBinding from "./Components/TwoWayBinding";
import Statelifting from "./Components/Statelifting";
import Reactwindow from "./Components/Reactwindow";
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

    function Stateliftfun(val)
    {
      alert(val)
    }

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
      <p>Debouncing Example</p>
      {/* <Debouncing /> */}

      <TwoWayBinding/>

      <p>State Lifting</p>  
      <Statelifting alert={Stateliftfun} />
      <p>React Window</p>
      <Reactwindow />


    
    </>
  );
}

export default App;
