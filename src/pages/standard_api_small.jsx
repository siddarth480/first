import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Standard_api_small = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getdata = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        setData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getdata();
  },[]);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <div>

      <div>
        <h2>This is standard way of calling api for small scale</h2>
      </div>
      {data.map((post) => {
        return (
          <div key={post.id}>
            <Link to={"/post/" + post.id}> 
              <h2>{post.title}</h2> 
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Standard_api_small;
