import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Make sure to import Link
import "./Cart.css"

const Cart = ({ cart, setCart }) => {
    // Load cart from localStorage on component mount
    // useEffect(() => {
    //     const savedCart = localStorage.getItem('cart');
    //     if (savedCart) {
    //         try {
    //             const parsedCart = JSON.parse(savedCart);
    //             if (Array.isArray(parsedCart)) {
    //                 setCart(parsedCart);
    //             }

    //             else {
    //                 console.error("Cart is not an array, clearing localStorage...");
    //                 setCart([]);
    //                 localStorage.removeItem('cart'); // Clear invalid cart data
    //             }
    //         } catch (error) {
    //             console.error("Error parsing cart from localStorage:", error);
    //             setCart([]);
    //             localStorage.removeItem('cart'); // Clear invalid cart data
    //         }
    //     }
    // }, [setCart]);


    const handleClearCart = () => {
        setCart([]);
        // localStorage.removeItem('cart'); // Clear the cart in localStorage
    };

    const handleRemoveProduct = (index) => {
        const updatedCart = cart.filter((_, i) => i !== index);
        setCart(updatedCart);
        // localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update localStorage
    };

    // Update localStorage whenever cart changes
    // useEffect(() => {
    //     localStorage.setItem('cart', JSON.stringify(cart));
    // }, [cart]);

    return (
        <>
            {cart.length === 0 ? (
                <div className="text-center">
                    <h1>Your Cart is Empty</h1>
                    <Link to="/" className='btn continue-shopping'>Continue Shopping...</Link>
                </div>
            ) : (
                <>
                    {cart.map((product, index) => (
                        <div className="cart-container" key={index}>
                            <div className="cart-img-section">
                                <img src={product.imgSrc} alt="product" />
                            </div>

                            <div className="cart-details-section">
                                <div className="details-section">
                                    <h4>{product.title}</h4>
                                    <p>{product.description}</p>
                                </div>

                                <div className="cart-size-section">
                                    <p>Size: </p>
                                    <button>{product.selectedSize}</button>
                                </div>

                                <div className="cart-price-section">
                                    <h5>₹ {product.price}</h5>
                                    <p>₹{product.realPrice}</p>
                                </div>
                            </div>

                            <button className="remove-button" onClick={() => handleRemoveProduct(index)}>
                                Remove
                            </button>
                        </div>
                    ))}

                    <div className="cart-functionality">
                        <button>CHECKOUT</button>
                        <button onClick={handleClearCart}>CLEAR CART</button>
                    </div>
                </>
            )}
        </>
    );
}

export default Cart;
