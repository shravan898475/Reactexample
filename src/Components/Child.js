import React,{useContext} from "react";
import { Globalval } from "../App";

export default function Child()
{
    const {appcolor}=useContext(Globalval)
    return(
        <>
         <h1 style={{color:appcolor}}>Context API</h1>
        </>
    )
}