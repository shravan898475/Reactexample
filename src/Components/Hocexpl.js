import React,{useState} from "react";

export default function Hoc()
{
    return(
        <>
        <h1>Hoc Example </h1>
        <Hoccomponet data={Counter}/>
        </>
    )
}

function Hoccomponet(props)
{
    return(
        <>
           <h1><props.data/></h1> 
        </>
    )
}

function Counter()
{
    const[count,setCount]=useState(0);
     return(
        <>
        <h1>Count : {count}</h1>
         <button onClick={()=>setCount(count+1)}> Add Hoc Counter</button> 
        </>
     )
}