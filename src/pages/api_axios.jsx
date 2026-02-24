import React, { useEffect, useState } from "react";
import getUsers from "../services/userService";
import { Link, Links } from "react-router-dom";

const Api_axios = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await getUsers();
        setUser(data); 

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadUsers();
  }, []);

  if (loading) return <h2>Loading ...</h2>;
  if (error) return <h2>Error : {error}</h2>;

  return (
    <div>
      <h2>The Axios data is calling...</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "10px",
        }}
      >
        {user.map((user) => (
          <Link
            key={user.id}
            to={"/api_axios/"+user.id}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              style={{
                border: "1px dotted",
                margin: "10px",
                padding: "20px",
                borderRadius: "25px",
              }}
            >
              <h3>User name : {user.name}</h3>
              <h3>Username : {user.username}</h3>
              
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Api_axios;
