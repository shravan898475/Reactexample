import React from "react";
import useFetch from "../hooks/useFetch";
export default function Customehookexpl()
{
    const [data] =useFetch('https://jsonplaceholder.typicode.com/todos');

    return(
        <>
          {data &&
           data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
        </>
    )
}