import React from 'react';
import { Link } from 'react-router-dom';
import "./Category.css"


const Category = ({ category }) => {
  return (
    <div className="container">
      <div className="row">
        {category.map((cat) => {
          return (
            <div className="col-2" key={cat.id}>
              <Link to={`/category/${cat.category}`}>
                <div className="card-container text-center">
                  <img className="card-img" src={cat.imgSrc} alt={cat.title} />
                  <div className="card-details">
                    <h5 className="card-title">{cat.title}</h5>
                    <p className="card-text">{cat.offer}</p>
                    <button className='card-button'>Shop Now</button>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Category;
