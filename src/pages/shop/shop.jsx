import React, { useEffect, useState } from 'react';
import useFetchData from "../../products";
import { Product } from "./product";

import { Pagination } from "./pagination";

export const Shop = () => {
  const { myData, loading, error } = useFetchData('products');
  const [currentPage, setCurrentPage] = useState(1);
  const [currentLength, setCurrentLength] = useState(0);

  const [search, setSearch] = useState('');
  const [postsPerPage, setPostsPerPage] = useState(6);
  // console.log(myData)
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  return (
    <>
      <div className="shopTitle container">
        {/* <h1>Ritik Shop</h1> */}
        <a href="/add" className="btn btn-outline-primary my-1 ">Add Product</a>
      </div>
      <div className="container">
        <form class="search-form my-2" onChange={(event) => setSearch(event.target.value)}>
          <input type="text" placeholder="Search" />
        </form>
      </div>
      <div className="container">

        {loading ? (
          <p>Loading data...</p>
        ) : myData ? (
          <>
            <div className="row">
              {
                myData.products.filter((item) => {
                  return search.toLowerCase() === '' ? item : item.title.toLowerCase().includes(search);
                }).slice(firstPostIndex, lastPostIndex).map((product) => (
                  <Product data={product} />
                ))
              }
            </div>
            <div>
              {search === '' ?
                <Pagination
                  totalPosts={myData.products.length}
                  postsPerPage={postsPerPage}
                  setCurrentPage={setCurrentPage}
                  currentPage={currentPage}
                /> : <></>
              }
            </div>
          </>
        ) : (
          <p>API not loaded</p>
        )}
      </div>
    </>
  );
};

