import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Product from './Product';
import "./CategoryProduct.css"
import { ethnicWear, sleepWear, homeDecor, workWear, kidsWear, sportsShoes, officeWear, mensWear, casualStyles, westernWear, wfhWear, womensFootwear} from './Data';
import Filter from './Filter';



const CategoryProduct = () => {
  const { cat } = useParams();
  // console.log(cat);
  const [filterProducts, setFilterProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    let products = [];
    if (cat === "ethnic-wear") {
      products = ethnicWear;
    }

    else if (cat === "sleep-wear") {
      products = sleepWear;
    }

    else if (cat === "home-decor") {
      products = homeDecor;
    }

    else if (cat === "work-wear") {
      products = workWear;
    }

    else if (cat === "kids-wear") {
      products = kidsWear;
    }

    else if (cat === "sports-shoes") {
      products = sportsShoes;
    }

    else if (cat === "office-wear") {
      products = officeWear;
    }

    else if (cat === "men's-wear") {
      products = mensWear;
    }

    else if (cat === "casual-styles") {
      products = casualStyles;
    }

    else if (cat === "western-wear") {
      products = westernWear;
    }

    else if (cat === "wfh-wear") {
      products = wfhWear;
    }

    else if (cat === "women's-footwear") {
      products = womensFootwear;
    }

    setAllProducts(products);
    setFilterProducts(products); // Initially, all products are displayed
  }, [cat]);



  const handleSetFilteredProducts = useCallback((filteredItems) => {
    setFilterProducts(filteredItems); 
  }, []);


  return (
    <>
      <div className="page-layout">
        <div className="filter-section">
        <Filter
            cat={cat}
            allProducts={allProducts}
            setFilteredProducts={handleSetFilteredProducts}
          />
        </div>

        <div className="content-section">
          <Product items={filterProducts} />
        </div>
      </div>
    </>
  )
}

export default CategoryProduct
