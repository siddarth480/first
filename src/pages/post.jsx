import React from "react";
import { useState, useEffect } from "react";
import "./post.css";
import { useParams } from "react-router-dom";

const Post = () => {
  const [data, setdata] = useState([]);
  const params = useParams();

  if (data === null) {
    return <div>Loading...</div>;
  }

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      .then((data) => data.json())
      .then((data) => setdata(data));
  }, []);

  return (
    <div>
      <div
        className="post-con"
        style={{
          border: "1px solid black",
          margin: "10px",
          background: "#cfe5ff",
        }}
        key={data.id}
      >
        <h2>{data.title}</h2>
        <p>{data.body}</p>
      </div>
    </div>
  );
};

export default Post;
