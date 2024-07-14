import React,{useState,useContext} from "react";
import { Globalval } from "../App";

export default function TwoWayBinding()
{
  const {appcolor}=useContext(Globalval)
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

        <p style={{color:appcolor}}>input val : {inputval}</p>
      </div>
    </>
  )
}