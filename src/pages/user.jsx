import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Userrrs = () => {
  const { id } = useParams();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users/"+id
        );
        setUser(res.data);
        console.log(res.data)
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);   

  if (loading) return <h2>Loading...</h2>;
  if (!user) return <h2>User not found</h2>;

  return (
    <div>
      <h2>User name : {user.name}</h2>
      <h3>Email : {user.email}</h3>
      <h3>Phone : {user.phone}</h3>
      <h3>Website : {user.website}</h3>
      <h3>Company : {user.company.name}</h3>
      <h3>Address : {user.address.city}</h3>

    </div>
  );
};

export default Userrrs;
