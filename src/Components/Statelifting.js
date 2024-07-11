import React from "react";


export default function Statelifting(props)
{


    return(
        <>
          <h1>
            State Lifting
          </h1>

          <button onClick={()=>props.alert('Hello')}> Click on button</button>
        </>
    )
}