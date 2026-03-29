import React from "react";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const photo = form.photo.value;
    const newCoffee = { name, quantity, supplier, taste, category, photo };
    console.log(newCoffee);

    // send data to the server side
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("added coffee successfully");
        }
      });
  };
  return (
    <div className="bg-[#F4F3F0] flex flex-col space-y-4 p-5 justify-center items-center">
      <h2 className="text-4xl text-green-500">Add a Coffee</h2>
      <form onSubmit={handleAddCoffee} className="space-y-4">
        {/* name and quantity */}
        <div className="flex gap-8">
          <div>
            <p>Name</p>
            <input type="text" name="name" id="" />
          </div>
          <div>
            <p>Available Quantity</p>
            <input type="text" name="quantity" id="" />
          </div>
        </div>
        {/* supplier and taste */}
        <div className="flex gap-8">
          <div>
            <p>Supplier</p>
            <input type="text" name="supplier" id="" />
          </div>
          <div>
            <p>Taste</p>
            <input type="text" name="taste" id="" />
          </div>
        </div>
        {/* category and photu url */}
        <div className="flex gap-8">
          <div>
            <p>Category</p>
            <input type="text" name="category" id="" />
          </div>
          <div>
            <p>Photo Url</p>
            <input type="url" name="photo" id="" />
          </div>
        </div>
        <input
          type="submit"
          value="Add Coffee"
          className="btn btn-block bg-[#D2B48C]"
        />
      </form>
    </div>
  );
};

export default AddCoffee;
