import React,{useState} from "react";

export default function TwoWayBinding()
{

  const[inputval,setInputval]=useState('shravan');

  function Changeinput(event)
  {
    setInputval(event.target.value);
  }

  return(
    <>
      <div>
        <input type="text"
        value={inputval}
        onChange={Changeinput}
        />

        <p>input val : {inputval}</p>
      </div>
    </>
  )
}