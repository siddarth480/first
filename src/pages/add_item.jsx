import React from "react";

const people = ["Siddarth", "Ashish", "Shruti", "Aditi", "Ayush"];

const person_data = [
  { id: 1, name: "Siddarth", age: 20 },
  { id: 2, name: "Ashish", age: 25 },
  { id: 3, name: "Shruti", age: 30 },
  { id: 4, name: "Aditi", age: 35 },
  { id: 5, name: "Ayush", age: 40 },
];

const Add_item = () => {
  const listItems = people.map((person) => <li>{person}</li>);

  return (
    <div>
      <div style={{ background: "#c98ff7", display: "flex" }}>
        <ul>{listItems}</ul>;
      </div>

      <div style={{ display: "flex" }}>
        {person_data
          .filter((data) => data.id !== 2)
          .map((data) => (
            <div
              key={data.id}
              style={{
                height: "100px",
                width: "200px",
                padding: "20px",
                margin: "20px",
                background: "#f0f0f0",
              }}
            >
              <p>Name: {data.name}</p>
              <p>Age: {data.age}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Add_item;
