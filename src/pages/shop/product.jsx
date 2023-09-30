import React, { useContext } from "react";
import axios from "axios";
export const Product = (props) => {
  const { id, title, price, thumbnail, description } = props.data;

  const deleteUser = async id => {
    try {
      const response = await axios.delete(`https://dummyjson.com/products/${id}`);
      console.log(response.data);
    } catch (error) {
      handleError(error);
    }
  };
  const handleError = (error) => {
    if (error.response) {
      console.error('Error response from server:', error.response.data);
      console.error('Status code:', error.response.status);
    } else if (error.request) {
      console.error('No response received:', error.request);
    } else {
      console.error('Error setting up the request:', error.message);
    }
  };

  return (
    <div className="card bg-light mb-3 col-sm-4" style={{ width: '18rem' }}>
      <img src={thumbnail} className="card-img-top" alt="product image" style={{ height: '200px', objectFit: 'cover' }} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">$ {price}</p>
        <p className="card-text" style={{ maxHeight: '60px', overflow: 'hidden', textOverflow: 'ellipsis' }} >{description}</p>
      </div>
      <div className="d-flex flex-column">
        <a href={`/product/${id}`} className="btn btn-outline-success ">View Product</a>
        <br />
        <a href={`/edit/${id}`} className="btn btn-outline-primary ">Edit Product</a>
        <br />
        <a onClick={() => deleteUser(id)} className="btn btn-outline-warning ">Delete Product</a>
      </div>

    </div>

  );
};
