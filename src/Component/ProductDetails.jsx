import React, { useEffect, useState } from 'react';
import { ethnicWear, sleepWear, homeDecor, workWear, kidsWear, sportsShoes, officeWear, mensWear, casualStyles, westernWear, wfhWear, womensFootwear } from './Data';
import { useParams } from 'react-router-dom';
import Product from './Product';
import "./ProductDetails.css";
import { BsFillHandbagFill } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";

const ProductDetails = ({ cart, setCart }) => {
  const { category, id } = useParams();
  const [selectedSize, setSelectedSize] = useState(null);
  const [showSizeError, setShowSizeError] = useState(false);
  const [modalImage, setModalImage] = useState(null); // State for the modal image
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [notifications, setNotifications] = useState([]); // State for notifications image

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

    // Show notification
    // Add notification
    const newNotification = {
      id: Date.now(), // Unique ID for each notification
      image: imgSrc,
      message: 'Added to bag'
    };
    setNotifications((prevNotifications) => [...prevNotifications, newNotification]);
  };

  useEffect(() => {
    const timers = notifications.map((notification) => {
      return setTimeout(() => {
        setNotifications((prevNotifications) =>
          prevNotifications.filter((n) => n.id !== notification.id)
        );
      }, 3000); // Adjust duration as needed
    });

    return () => {
      timers.forEach((timer) => clearTimeout(timer)); // Cleanup timers
    };
  }, [notifications]);

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

  return (
    <>
      <div className="product-details-container">
        <div className="location">
          <p>{`Home / ${product.category} / ${product.title}`.toUpperCase()}</p>
        </div>

        <div className="details-container">
          <div className="images-section">
            {product.imgSrc && (
              <div className="image-container">
                <img src={product.imgSrc} alt="Product Image 1" onClick={() => openModal(product.imgSrc)} />
              </div>
            )}

            {product.imgSrc2 && (
              <div className="image-container">
                <img src={product.imgSrc2} alt="Product Image 2" onClick={() => openModal(product.imgSrc2)} />
              </div>

            )}

            {product.imgSrc3 && (
              <div className="image-container">
                <img src={product.imgSrc3} alt="Product Image 3" onClick={() => openModal(product.imgSrc3)} />
              </div>
            )}

            {product.imgSrc4 && (
              <div className="image-container">
                <img src={product.imgSrc4} alt="Product Image 4" onClick={() => openModal(product.imgSrc4)} />
              </div>
            )}

            {product.imgSrc5 && (
              <div className="image-container">
                <img src={product.imgSrc5} alt="Product Image 5" onClick={() => openModal(product.imgSrc5)} />
              </div>
            )}
            {product.imgSrc6 && (
              <div className="image-container">
                <img src={product.imgSrc6} alt="Product Image 6" onClick={() => openModal(product.imgSrc6)} />
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

      {/* Notifications for added to cart */}
      <div className="notification-container">
        {notifications.map((notification) => (
          <div key={notification.id} className="notification">
            <img src={notification.image} alt="Product" className="notification-image" />
            <p>{notification.message}</p>
          </div>
        ))}
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
    </>
  );
};

export default ProductDetails;
