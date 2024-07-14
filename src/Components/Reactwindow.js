import React, { useState, useEffect } from "react";
import axios from "axios";
import { FixedSizeList as List } from "react-window";

export default function ReactWindow() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  // Row component to render each item
  const Row = ({ index, style }) => (
    <div style={style}>
      <div>Title : {data[index].title}</div>
      <div>Body : {data[index].body}</div>
    </div>
  );

  return (
    <div style={{ height: 400, width: '100%' }}>

      {data.length > 0 ? (
        <List
          height={300}
          itemCount={data.length}
          itemSize={70} // Adjusted height for better readability
          width={"100%"}
        >
          {Row}
        </List>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
