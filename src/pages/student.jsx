import React, { useEffect } from "react";
import "./Student.css";
import { useState } from "react";
import axios from "axios";

const Student = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [name, setName] = useState("");
  const [code, setCode] = useState("");

  const [editId, setEditId] = useState(null); // for update

  const API_URL = "https://uat.school-erp-api.tmkcomputers.in/api/Countries";

  // READ
  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    try {
      setLoading(true);
      const res = await axios.get(API_URL);
      setData(res.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // CREATE
  const createCountry = async (e) => {
    e.preventDefault();

    try {
      await axios.post(API_URL, {
        name: name,
        code: code,
      });

      setName("");
      setCode("");
      getdata();
    } catch (error) {
      console.error("Error creating country:", error);
    }
  };

  // EDIT (fill form with existing data)
  const editCountry = (country) => {
    setName(country.name);
    setCode(country.code);
    setEditId(country.id);
  };

  // UPDATE
  const updateCountry = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`${API_URL}/${editId}`, {
        name: name,
        code: code,
      });

      setName("");
      setCode("");
      setEditId(null);
      getdata();
    } catch (error) {
      console.error("Error updating country:", error);
    }
  };

  // DELETE
  const deleteCountry = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      getdata();
    } catch (error) {
      console.error("Error deleting country:", error);
    }
  };

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <div className="student-wrapper">
      <h1>The CRUD Operations</h1>

      {/* CREATE / UPDATE FORM */}

      <form onSubmit={editId ? updateCountry : createCountry}>
        <div>
          <label>Country Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label>Country Code:</label>
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </div>

        <button type="submit">{editId ? "Update Country" : "Submit"}</button>
      </form>

      {/* READ */}

      <ul style={{ display: "flex", flexFlow: "wrap", gap: "20px", listStyleType: "none" }}>
        {data.map((country) => (
          <li
            style={{
              marginBottom: "20px",
              border: "1px solid",
              padding: "20px",
            }}
            key={country.id}
          >
            <div style={{paddingBottom:"20px"}}>
              {country.name} ({country.code})
            </div>
            <button style={{padding:"5px 20px", marginRight:"5px", borderRadius:"10px"}} onClick={() => editCountry(country)}>Edit</button>
            <button style={{padding:"5px 20px", marginRight:"5px", borderRadius:"10px"}} onClick={() => deleteCountry(country.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Student;
