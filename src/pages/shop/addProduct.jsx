import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export const AddProduct = () => {
  const [product, setProduct] = useState({
    "id": 1,
    "title": "",
    "description": "",
    "price": 0,
    "discountPercentage": 12.96,
    "rating": 4.69,
    "stock": 94,
    "brand": "Apple",
    "category": "smartphones",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ]
  });

  const { title, description, price } = product;
  const onInputChange = e => {
    setProduct({ ...product, [e.target.name]: e.target.value });
    // console.log(product)
  };
  const navigate = useNavigate();

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('https://dummyjson.com/products/add', product, {
        headers: { 'Content-Type': 'application/json' }
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error adding product:', error);
    }

    navigate("/");
  };
  return (
    <>
      <div className="container">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Add product</h2>
          <form onSubmit={e => onSubmit(e)}>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Product Title"
                name="title"
                value={title}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Product description"
                name="description"
                value={description}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Product Price"
                name="price"
                value={price}
                onChange={e => onInputChange(e)}
              />
            </div>
            <button className="btn btn-primary btn-block">Add product</button>
          </form>
        </div>
      </div>
    </>
  )
};

export default AddProduct;