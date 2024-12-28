// ProductDetails componet with custom cursor functionalit


import React, { useEffect, useState } from 'react';
import { ethnicWear, sleepWear, homeDecor, workWear, kidsWear, sportsShoes, officeWear, mensWear, casualStyles, westernWear, wfhWear, womensFootwear } from './Data';
import { useParams } from 'react-router-dom';
import Product from './Product';
import "./ProductDetails.css";
import { BsFillHandbagFill } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { MdOutlineZoomIn } from "react-icons/md"; // Import the zoom-in icon

const ProductDetails = ({ cart, setCart }) => {
  const { category, id } = useParams();
  const [selectedSize, setSelectedSize] = useState(null);
  const [showSizeError, setShowSizeError] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false); // State to control the hover effect
  const [cursorPosition, setCursorPosition] = useState({ top: 0, left: 0 }); // Cursor position for custom cursor

  const handleSizeClick = (size) => {
    setSelectedSize(size);
    setShowSizeError(false);
  };

  const addToCart = (price, title, description, imgSrc, realPrice, selectedSize) => {
    if (category !== 'home-decor' && !selectedSize) {
      setShowSizeError(true);
      return;
    }
    const obj = { price, title, description, imgSrc, realPrice, selectedSize };
    const updatedCart = [...cart, obj];
    setCart(updatedCart);
  };

  const categories = {
    'ethnic-wear': ethnicWear,
    'sleep-wear': sleepWear,
    'home-decor': homeDecor,
    'work-wear': workWear,
    'kids-wear': kidsWear,
    'sports-shoes': sportsShoes,
    'office-wear': officeWear,
    "men's-wear": mensWear,
    'casual-styles': casualStyles,
    'western-wear': westernWear,
    'wfh-wear': wfhWear,
    "women's-footwear": womensFootwear
  };

  const categoryArray = categories[category];
  const product = categoryArray?.find((item) => item.id === parseInt(id));

  const openModal = (imgSrc) => {
    setModalImage(imgSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleMouseMove = (e) => {
    setCursorPosition({ top: e.clientY, left: e.clientX });
  };

  useEffect(() => {
    // Add mouse move event listener to the entire window
    window.addEventListener('mousemove', handleMouseMove);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="product-details-container">
        <div className="location">
          <p>{`Home / ${product.category} / ${product.title}`.toUpperCase()}</p>
        </div>

        <div className="details-container">
          <div className="images-section">
            {product.imgSrc && (
              <img
                src={product.imgSrc}
                alt="Product Image 1"
                onClick={() => openModal(product.imgSrc)}
                onMouseEnter={() => setIsHovering(true)} // Set hover state
                onMouseLeave={() => setIsHovering(false)} // Reset hover state
              />
            )}
            {product.imgSrc2 && (
              <img
                src={product.imgSrc2}
                alt="Product Image 2"
                onClick={() => openModal(product.imgSrc2)}
                onMouseEnter={() => setIsHovering(true)} // Set hover state
                onMouseLeave={() => setIsHovering(false)} // Reset hover state
              />
            )}
            {product.imgSrc3 && (
              <img
                src={product.imgSrc3}
                alt="Product Image 3"
                onClick={() => openModal(product.imgSrc3)}
                onMouseEnter={() => setIsHovering(true)} // Set hover state
                onMouseLeave={() => setIsHovering(false)} // Reset hover state
              />
            )}
            {product.imgSrc4 && (
              <img
                src={product.imgSrc4}
                alt="Product Image 4"
                onClick={() => openModal(product.imgSrc4)}
                onMouseEnter={() => setIsHovering(true)} // Set hover state
                onMouseLeave={() => setIsHovering(false)} // Reset hover state
              />
            )}
            {product.imgSrc5 && (
              <img
                src={product.imgSrc5}
                alt="Product Image 5"
                onClick={() => openModal(product.imgSrc5)}
                onMouseEnter={() => setIsHovering(true)} // Set hover state
                onMouseLeave={() => setIsHovering(false)} // Reset hover state
              />
            )}
            {product.imgSrc6 && (
              <img
                src={product.imgSrc6}
                alt="Product Image 6"
                onClick={() => openModal(product.imgSrc6)}
                onMouseEnter={() => setIsHovering(true)} // Set hover state
                onMouseLeave={() => setIsHovering(false)} // Reset hover state
              />
            )}
            {isHovering && (
              <div className="custom-cursor" style={{ top: `${cursorPosition.top}px`, left: `${cursorPosition.left}px` }}>
                <MdOutlineZoomIn className="zoom-icon" />
              </div>
            )}
          </div>

          <div className="details-section">
            <div className="description-section">
              <h4>{product.title}</h4>
              <p>{product.description}</p>
            </div>
            <hr />
            <div className="price-section">
              <h4>₹{product.price}</h4>
              <p>MRP <span>₹{product.realPrice}</span></p>
            </div>

            <div className="tax-section">
              <h5>inclusive of all taxes</h5>
            </div>

            {category !== 'home-decor' && (
              <div className="size-section">
                <div className="size-heading">
                  <h5>SELECT SIZE</h5>
                </div>

                {showSizeError && (
                  <p className="product-details-size-error">Please select a size</p>
                )}

                <div className="size-options">
                  {product.sizes?.map((size, index) => (
                    <button
                      key={index}
                      className={`size-option ${selectedSize === size ? 'size-active' : ''}`}
                      onClick={() => handleSizeClick(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="add-to-cart">
              <button onClick={() => addToCart(product.price, product.title, product.description, product.imgSrc, product.realPrice, selectedSize)}>
                <BsFillHandbagFill className='bag-icon' />ADD TO BAG
              </button>
              <button><CiHeart className='wishlist-icon' />WISHLIST</button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for displaying the image */}
      {isModalOpen && (
        <div className="image-modal">
          <div className="modal-content">
            <div className="modal-image-container">
              <img src={modalImage} alt="Modal View" className="modal-image" />
              <button className="close-button" onClick={closeModal}>&times;</button>
              <div className="thumbnail-section">
                {product.imgSrc && <img src={product.imgSrc} alt="Thumbnail 1" onClick={() => openModal(product.imgSrc)} className="thumbnail" />}
                {product.imgSrc2 && <img src={product.imgSrc2} alt="Thumbnail 2" onClick={() => openModal(product.imgSrc2)} className="thumbnail" />}
                {product.imgSrc3 && <img src={product.imgSrc3} alt="Thumbnail 3" onClick={() => openModal(product.imgSrc3)} className="thumbnail" />}
                {product.imgSrc4 && <img src={product.imgSrc4} alt="Thumbnail 4" onClick={() => openModal(product.imgSrc4)} className="thumbnail" />}
                {product.imgSrc5 && <img src={product.imgSrc5} alt="Thumbnail 5" onClick={() => openModal(product.imgSrc5)} className="thumbnail" />}
                {product.imgSrc6 && <img src={product.imgSrc6} alt="Thumbnail 6" onClick={() => openModal(product.imgSrc6)} className="thumbnail" />}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="related-products">
        <h5>SIMILAR PRODUCTS</h5>
        <Product items={categoryArray} />
      </div>

      <style jsx>{`
        .custom-cursor {
          position: fixed;
          pointer-events: none; // Prevent interaction
        }
        .zoom-icon {
          font-size: 2rem;
          color: gray;
        }
      `}</style>
    </>
  );
};

export default ProductDetails;
