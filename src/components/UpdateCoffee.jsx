import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, quantity, supplier, taste, category, photo } = coffee;
  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const photo = form.photo.value;
    const updateCoffee = {
      _id,
      name,
      quantity,
      supplier,
      taste,
      category,
      photo,
    };
    console.log(updateCoffee);

    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            title: "Updated!",
            text: "Your Coffee has been updated.",
            icon: "success",
          });
        }
      });
  };
  return (
    <div className="bg-[#F4F3F0] flex flex-col space-y-4 p-5 justify-center items-center">
      <h2 className="text-4xl text-green-500">Update a Coffee of {name}</h2>
      <form onSubmit={handleUpdateCoffee} className="space-y-4">
        {/* name and quantity */}
        <div className="flex gap-8">
          <div>
            <p>Name</p>
            <input type="text" name="name" id="" defaultValue={name} />
          </div>
          <div>
            <p>Available Quantity</p>
            <input type="text" name="quantity" id="" defaultValue={quantity} />
          </div>
        </div>
        {/* supplier and taste */}
        <div className="flex gap-8">
          <div>
            <p>Supplier</p>
            <input type="text" name="supplier" id="" defaultValue={supplier} />
          </div>
          <div>
            <p>Taste</p>
            <input type="text" name="taste" id="" defaultValue={taste} />
          </div>
        </div>
        {/* category and photu url */}
        <div className="flex gap-8">
          <div>
            <p>Category</p>
            <input type="text" name="category" id="" defaultValue={category} />
          </div>
          <div>
            <p>Photo Url</p>
            <input type="url" name="photo" id="" defaultValue={photo} />
          </div>
        </div>
        <input
          type="submit"
          value="update a coffee"
          className="btn btn-block bg-[#D2B48C]"
        />
      </form>
    </div>
  );
};

export default UpdateCoffee;
