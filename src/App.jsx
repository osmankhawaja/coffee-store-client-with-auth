import { Link, useLoaderData } from "react-router-dom";
import "./App.css";
import Swal from "sweetalert2";
import { useState } from "react";

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });

              const remaining = coffees.filter((i) => i._id !== id);
              setCoffees(remaining);
            }
          });
      }
    });
  };
  return (
    <>
      <h1 className="text-4xl text-purple-600 text-center p-5">
        coffee store client {coffees.length}{" "}
      </h1>
      <div className="flex justify-center">
        <div className="grid md:grid-cols-2 gap-8">
          {coffees.map((i) => (
            <div key={i._id}>
              <p>{i.name}</p>
              <img src={i.photo} alt="" />
              <button onClick={() => handleDelete(i._id)} className="btn">
                delete
              </button>
              <Link to={`/updateCoffee/${i._id}`}>
                <button className="btn mx-5">update</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
