import React from 'react'
import "./Footer.css"
import logo from "./Assets/SwiftCartLogo.png"
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <>
            <footer>
                <div id="footer">
                    <div className="footer-row">
                        <div className="footer-row-col1">
                            <div className="footer-logo">
                                <Link to="/"><img src={logo} /></Link>
                            </div>

                            <div className="footer-author">
                                <p>DESIGNED AND DEVELOPED BY RAMJI GUPTA</p>
                                <p>REACH OUT +91-8382-021-094</p>
                                <p>ramjigupta8310@gmail.com</p>
                            </div>
                        </div>

                        <div className="footer-row-col2">
                            <div className="footer-menu">
                                <div className="footer-submenu">
                                    <ul>
                                        <h2 className="footer-active">BRAND</h2>
                                        <li>ABOUT</li>
                                        <li>BLOGS</li>
                                        <li>WORK WITH US</li>
                                        <li>CONTACT US</li>
                                    </ul>
                                </div>

                                <div className="footer-submenu">
                                    <ul>
                                        <h2 className="footer-active">SHOP</h2>
                                        <li>SHIPPING & DELIVERY</li>
                                        <li>CANCELLATION POLICY</li>
                                        <li>FAQ</li>
                                    </ul>
                                </div>

                                <div className="footer-submenu">
                                    <ul>
                                        <h2 className="footer-active">LEGAL</h2>
                                        <li>TERMS & CONDITION</li>
                                        <li>PRIVACY POLICY</li>
                                        <li>REFUND & EXCHANGE POLICIES</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </footer>
        </>
    )
}

export default Footer
