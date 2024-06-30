import React,{useState,useEffect} from "react";

const Useeffect =()=>{
    const[name,setName]=useState('');
    
    useEffect(()=>
    {
        setTimeout(()=>
        {
            setName('shravan')
        },1000)
    })

    return(
        <>
           <h1>Name : {name}</h1>
        </>
    )
}

export default Useeffect;