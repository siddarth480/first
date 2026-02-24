import React, { use, useEffect, useState } from "react";
import {Link } from "react-router-dom";

const Api_calling = () => {
  const [data, setdata] = useState([]);

  useEffect(() => { 
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((data) => setdata(data));
  }, []);
 
  return (
    <div>
      <h1>API Data</h1>

      {data.map((post) => {
        return (
          <div key={post.id}>
            <Link to ={"/post/"+post.id}>
              <h2>{post.title}</h2>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Api_calling;
