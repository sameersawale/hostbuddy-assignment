import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Add() {
  let navigate = useNavigate();


  const [item, setItem] = useState({
    name: "",
    price: "",
    category: "",
    description: ""
  });

  const { name, price, category, description } = item;
  
  const onInputChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };



const onSubmit = async (e) => {
  e.preventDefault();
  await axios.post("http://localhost:8080/add", item);
  navigate("/");
};
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rouded p-4 mt-2 shadow ">
          <h2 className="text-center m-4">Add Item</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Price" className="form-label">
                Price
              </label>
              <input
                type={"number"}
                className="form-control"
                placeholder="Price"
                name="price"
                value={price}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Category" className="form-label">
                Category
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="category"
                name="category"
                value={category}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Description" className="form-label">
                Description
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="description"
                name="description"
                value={description}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
