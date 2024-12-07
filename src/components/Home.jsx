import React from "react";
import Navbar from "./Navbar";
import "./Home.css"; // Import the CSS file
import Card from "./Card";

import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('All');

  function fetchProductsData(url) {
    const response = axios.get(url);
    return response;
  }

  function setCategoryFn(data) {
    const allCategory = data.map((elem) => {
      return elem.category;
    });

    setCategory(['All', ...new Set(allCategory)]);
  }

  useEffect(() => {
    (async () => {
      try {
        const url = "https://fakestoreapi.com/products/";
        const response = await fetchProductsData(url);
        setProducts(() => {
          return response.data;
        });

        setCategoryFn(response.data);
      } catch (error) {
        console.log("Error : ", error.message);
      }
    })();
  }, []);

  return (
    <>
      <Navbar category={category} setCategoryProp={setCurrentCategory} />
      <div className="home-container">

        {products.length > 0 && products.filter((elem) => {
          if (currentCategory === 'All') {
            return true;
          }
          return elem.category === currentCategory;
        }).map((ele) => {
          return <Card productData={ele} key={ele.id} />
        })}
      </div>
    </>
  );
};

export default Home;
