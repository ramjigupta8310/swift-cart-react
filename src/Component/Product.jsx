import React, { useEffect, useState } from 'react';
import "./Product.css";
import { Link } from 'react-router-dom';
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

const Product = ({ items }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8; // Ek page par 8 cards

    // Total pages calculate karna
    const totalPages = Math.ceil(items.length / itemsPerPage);

    // Current page ke liye items filter karna
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    // Page change handlers
    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    // **Reset current page to 1 when items (filtered data) change**
    useEffect(() => {
        setCurrentPage(1);
    }, [items]);

    return (
        <>
            <div className="row">
                {currentItems.map((item) => {
                    const key = `${item.category}-${item.id}`;
                    return (
                        <div className="col-md-3" key={key}>
                            <Link to={`/category/${item.category}/${item.title}/${item.description}/${item.id}`} target="_blank" rel="noopener noreferrer">
                                <div className="card product-card" style={{ width: '18.5rem' }}>
                                    <img src={item.imgSrc} className="card-img-top" alt={item.title} />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text">{item.description}</p>
                                        <div className="card-price-section">
                                            <div className="card-price">
                                                <h6>Rs. {item.price}</h6>
                                                <p>Rs. {item.realPrice}</p>
                                            </div>
                                            <div className="cardButton">
                                                <button>Buy Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>

            {/* Pagination Controls */}
            <div className="pagination-controls">
                <button onClick={goToPreviousPage} disabled={currentPage === 1}>
                    <GrFormPrevious className='pagination-pre' />Previous
                </button>
                <span>Page {currentPage} of {totalPages}</span>
                <button onClick={goToNextPage} disabled={currentPage === totalPages}>
                    Next <GrFormNext className='pagination-next' />
                </button>
            </div>
        </>
    );
}

export default Product;
