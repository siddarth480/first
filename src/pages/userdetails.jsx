import React from 'react'

import { Link, NavLink } from 'react-router-dom';

const Userdetails = () => {


    const users = [
        { id: 1, name: "Sachin", age: 20 },
        { id: 2, name: "Parth", age: 25 },
        { id: 3, name: "Raghav", age: 30 },
        { id: 10, name: "Piyush", age: 35 },
      ];
  return (
    <div>
      <h1>This is users List</h1>

      {
        users.filter((data) => data.id !== 2).map((user) => {
            
            return(
                <div key={user.id}>

                    <h1>{user.name}</h1>
                </div>
            )
        })
      }


        {users.map(user => (
          <div key={user.id}>
            <h2><NavLink  state={user} to={"/user/"+user.id}>{user.name}</NavLink></h2> 
          </div>
        ))}

    </div>
  )
}

export default Userdetails
