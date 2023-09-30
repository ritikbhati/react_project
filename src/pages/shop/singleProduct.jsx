import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchData from "../../products";

export const SingleProduct = () => {
    const { id } = useParams(); // Retrieve the product ID from the URL parameter
    console.log(id)
    const { myData, loading, error } = useFetchData(`products/${id}`);
    return (
        <>
            {loading ? (
                <p>Loading data...</p>
            ) : myData ? (
                <div className="container">
                    <h1>Product Details</h1>

                    <img src={myData.thumbnail} />
                    {/* <p className="card-title">ID: {myData.id}</p> */}
                    <p className="display-4">Name: {myData.title}</p>
                    <p className="blockquote">Description: {myData.description}</p>
                    <p className="blockquote">Price: ${myData.price}</p>
                </div>
            )
                : (
                    <p>API not loaded</p>
                )}
        </>)
};

export default SingleProduct;
