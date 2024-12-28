import React from 'react'
import { useCallback, useEffect, useState } from 'react'
import Product from "./Product"
import Filter from "./Filter"
import "./SectionProduct.css"

const SectionProduct = ({ catArray }) => {

    const [filterProducts, setFilterProducts] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    useEffect(() => {
        if (catArray) {
            setFilterProducts(catArray); // Update filterProducts
            setAllProducts(catArray);    // Update allProducts
        }
    }, [catArray]);


    const handleSetFilteredProducts = useCallback((filteredItems) => {
        setFilterProducts(filteredItems);
    }, []);


    return (
        <>
            <div className="page-layout">
                <div className="filter-section">
                    <Filter
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

export default SectionProduct
