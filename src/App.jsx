import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Component/Navbar'
import Category from './Component/Category'
import CategoryProduct from './Component/CategoryProduct'
import { categoryItems } from './Component/Data'
import "./App.css"
import ProductDetails from './Component/ProductDetails'
import Men from "./Component/Men"
import Women from "./Component/Women"
import Kids from "./Component/Kids"
import Cart from './Component/Cart'
import Footer from './Component/Footer'
import SearchProduct from './Component/SearchProduct'

const App = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        try {
          setCart(JSON.parse(savedCart)); // Load cart from localStorage if it exists
        } 
        
        catch (error) {
          console.error("Error parsing cart from localStorage: ", error);
          setCart([]); // Reset cart to empty if parsing fails
        }
      }
    } catch (error) {
      console.error("Error accessing localStorage: ", error);
      setCart([]); // Reset cart to empty if accessing localStorage fails
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);
  

  return (
    <>
      <Navbar cart={cart} setCart={setCart} />
      <div className="content-container">
        <Routes>
          <Route path="/" element={<Category category={categoryItems} />} />
          <Route path="/category/:cat" element={<CategoryProduct />} />
          <Route path="/category/:category/:tittle/:description/:id" element={<ProductDetails cart={cart} setCart={setCart}/>} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>} />
          <Route path="/search/:productName" element={<SearchProduct cart={cart} setCart={setCart}/>} />

        </Routes>
      </div>
      <Footer/>
    </>
  );
}

export default App
