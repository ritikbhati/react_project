import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export const EditProduct = () => {
    let navigate = useNavigate();
    const { id } = useParams();
    const [name, setName] = useState({
        title: ""
    });

    const { title } = name;
    const onInputChange = e => {
        setName({ ...name, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadUser();
    }, []);

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const response = await axios.put(`https://dummyjson.com/products/${id}`, { title: name.title }, {
                headers: { 'Content-Type': 'application/json' }
            });

            console.log(response.data);
        } catch (error) {
            if (error.response) {
                console.error('Error response from server:', error.response.data);
                console.error('Status code:', error.response.status);
            } else if (error.request) {
                console.error('No response received:', error.request);
            } else {
                console.error('Error setting up the request:', error.message);
            }
        }
        navigate("/");
    };

    const loadUser = async () => {
        const result = await axios.get(`https://dummyjson.com/products/${id}`);
        setName(result.data);
    };
    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Edit Product</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter new Title"
                            name="title"
                            value={title}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <button className="btn btn-warning btn-block">Update Title</button>
                </form>
            </div>
        </div>
    );
};

export default EditProduct;