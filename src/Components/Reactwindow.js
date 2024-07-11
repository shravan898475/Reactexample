import React, { useState, useEffect } from "react";
import axios from "axios";
import { FixedSizeList as List } from "react-window";

export default function ReactWindow() {
  const [usedata, setData] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        setData(res.data); // Ensure you set the data correctly
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []); // Dependency array to run the effect only once

  const Row = ({ index, style }) => (
    <div style={style} className="row">
      <div className="cell">{usedata[index].title}</div>
    </div>
  );

  return (
    <>
      {usedata.length > 0 && (
        <div className="table">
          <div className="header">
            <div className="cell">Title</div>
          </div>
          <List
            height={300}
            itemCount={usedata.length}
            itemSize={35}
            width={300}
          >
            {Row}
          </List>
        </div>
      )}
    </>
  );
}
