import React, { useState } from 'react'
import logo from "./Assets/SwiftCartLogo.png"
import { Link, useNavigate } from 'react-router-dom'
import { FaCartArrowDown } from "react-icons/fa";
import "./Navbar.css"

const Navbar = ({ cart, setCart }) => {
    const navigate = useNavigate();

    const [searchTerm, setSearchTerm] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search/${searchTerm}`)
        setSearchTerm("")
    }

    return (
        <>
            <div className="nav-container">
                <Link to="/" className="logo">
                    <img src={logo} alt="logo" />
                </Link>

                <div className="nav-category">
                    <ul>
                        <Link to="/"><li>HOME</li></Link>
                        <Link to="/men"><li>MEN</li></Link>
                        <Link to="/women"><li>WOMEN</li></Link>
                        <Link to="/kids"><li>KIDS</li></Link>
                    </ul>
                </div>

                <div className="nav-search">
                    <form className="search-bar" onSubmit={handleSubmit}>
                        <input
                            type='text'
                            placeholder='Search Products'
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </form>
                </div>

                <div className="nav-cart">
                    <Link to="/cart">
                        <button type="button" className="btn btn-primary position-relative">
                            <FaCartArrowDown className='navbar-cart-icon' />
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {cart.length}
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Navbar
