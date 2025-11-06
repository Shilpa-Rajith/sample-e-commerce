import React from "react";

import { addToCart } from "../features/cart/cartSlice";
import { Link, useNavigate } from "react-router-dom";
import "../components/css/ProductCard.css";
import { useDispatch } from "react-redux";

export default function ProductCard({ product }) {
 

const dispatch = useDispatch()
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card product-card shadow-sm h-100 border-0">
        <Link to={`/products/${product.id}`} className="text-decoration-none text-dark">
          <img
            src={product.image}
            alt={product.title}
            className="card-img-top p-3"
            style={{ height: "250px", objectFit: "contain" }}
          />
        </Link>
        <div className="card-body text-center p-1">
          <h6 className="card-title text-white mb-2">
            {product.title.length > 25 ? `${product.title.slice(0, 20)}...` : product.title}
          </h6>
          <h5 className="text-primary fw-bold mb-3">${product.price}</h5>
         <div className="d-flex flex-column " style={{gap:"10px"}}>
          <button
            className="btn btn-primary w-100"
            onClick={() => dispatch(addToCart(product))}
          >
            <i className="bi bi-cart-plus me-2"></i>Add to Cart
          </button>
      
          <Link
            className="btn btn-primary w-100"
            to={`/products/${product.id}`}
          >
            View Details
          </Link></div> 
        </div>
      </div>
    </div>
  );
}
