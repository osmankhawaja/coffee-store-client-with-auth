import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUser = useLoaderData();
  const [users, setUsers] = useState(loadedUser);

  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        if (data.deletedCount > 0) {
          alert("data deleter successfully!!");
          const remaining = users.filter((i) => i._id !== id);
          setUsers(remaining);
        }
      });
  };

  return (
    <div>
      <h2 className="text-3xl">User Collection : {users.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="font-bold text-emerald-600">Name</th>
              <th className="font-bold  text-emerald-600">Email</th>
              <th className="font-bold  text-emerald-600">Last Login Time</th>
              <th className="font-bold  text-emerald-600">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((i) => (
              <tr key={i._id} className="">
                <th>{i._id}</th>
                <td>{i.name}</td>
                <td>{i.email}</td>
                <td>{i.lastSignInTime}</td>
                <td>
                  <button onClick={() => handleDelete(i._id)} className="btn">
                    delete
                  </button>
                  <button className="btn mx-5">update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
