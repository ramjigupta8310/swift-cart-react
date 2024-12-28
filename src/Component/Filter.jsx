import React, { useEffect, useState } from 'react'
import "./Filter.css"


const Filter = ({ allProducts, setFilteredProducts, cat }) => {

  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const priceLimits = [499, 999, 1499, 1999, 2499, 2999, 3999, 4999, 6999];

  const colors = [
    { id: 'white', label: 'White' },
    { id: 'pink', label: 'Pink' },
    { id: 'black', label: 'Black' },
    { id: 'blue', label: 'Blue' },
    { id: 'orange', label: 'Orange' },
    { id: 'yellow', label: 'Yellow' },
    { id: 'red', label: 'Red' },
    { id: 'purple', label: 'Purple' },
    { id: 'green', label: 'Green' },
    { id: 'navy', label: 'Navy Blue' },
    { id: 'brown', label: 'Brown' },
    { id: 'gray', label: 'Gray' },
    { id: 'beige', label: 'Beige' }
  ];

  const handlePriceChange = (price) => {
    setSelectedPrices((prevSelectedPrices) => {
      if (prevSelectedPrices.includes(price)) {
        return prevSelectedPrices.filter((p) => p !== price);
      } else {
        return [...prevSelectedPrices, price];
      }
    });
  };

  const handleColorChange = (color) => {
    setSelectedColors((prevSelectedColors) => {
      if (prevSelectedColors.includes(color)) {
        return prevSelectedColors.filter((c) => c !== color);
      } else {
        return [...prevSelectedColors, color];
      }
    });
  };

  const clearFilters = () => {
    setSelectedPrices([]);
    setSelectedColors([]);
  };


  const filterItems = () => {
    let filteredItems = allProducts;

    if (selectedPrices.length > 0) {
      filteredItems = filteredItems.filter((item) => selectedPrices.some((price) => item.price <= price));
    }

    if (selectedColors.length > 0) {
      filteredItems = filteredItems.filter((item) => selectedColors.includes(item.color));
    }
    return filteredItems;
  };


  useEffect(() => {
    const filteredItems = filterItems();
    setFilteredProducts(filteredItems);
  }, [selectedColors, selectedPrices]);

  return (
    <>
      <div className="filter-container">
        <div className="main-section">
          <div className="section-left-side">
            <h5>Filters</h5>
          </div>

          <div className="section-clear-all">
            <p onClick={clearFilters}>Clear All</p>
          </div>
        </div>

        <hr></hr>

        <div className="section-price-filter">
          <div className="section-name">
            <h5>PRICE</h5>
          </div>

          <div className="price-filter">
            {priceLimits.map((price) => (
              <div className="price-options" key={price}>
                <input
                  type="checkbox"
                  id={price}
                  checked={selectedPrices.includes(price)}
                  onChange={() => handlePriceChange(price)}
                />
                <label htmlFor={price}>Under Rs. {price}</label>
              </div>
            ))}
          </div>
        </div>

        <hr></hr>
        {cat !== "home-decor" ?
          (<div className="section-color-filter">
            <div className="section-name">
              <h5>COLOR</h5>
            </div>

            <div className="color-filter">
              {colors.map(({ id, label }) => (
                <div className="color-options" key={id}>
                  <input
                    type="checkbox"
                    id={id}
                    checked={selectedColors.includes(id)}
                    onChange={() => handleColorChange(id)}
                  />
                  <label htmlFor={id}>
                    <span className={`${id}Color color`}></span>{label}
                  </label>
                </div>
              ))}
            </div>
          </div>) : null}
      </div>
    </>
  )
}

export default Filter
