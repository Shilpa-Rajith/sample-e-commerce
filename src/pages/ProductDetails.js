import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { fetchProductsById } from "../features/products/productsSlice";
import "../components/css/ProductDetails.css";

export default function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { selectedProduct: product, status, error } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchProductsById(id));
  }, [dispatch, id]);

  if (status === "loading") return <p className="text-center mt-5">Loading...</p>;
  if (status === "failed") return <p className="text-center text-danger">{error}</p>;
  if (!product) return null;

  return (
    <div className="product-detail container my-5 bg-dark text-white p-4 rounded-4 shadow-lg d-flex align-items-center justify-content-center gap-5">
      <img
        src={product.image}
        alt={product.title}
        style={{
          width: "300px",
          height: "350px",
          objectFit: "contain",
          borderRadius: "10px",
          backgroundColor: "white",
          padding: "15px",
        }}
      />
      <div className="product-info">
        <h2 className="fw-bold">{product.title}</h2>
        <p className="text-white mt-3">{product.description}</p>
        <h3 className="mt-3 text-warning">${product.price}</h3>
        <button
          onClick={() => dispatch(addToCart(product))}
          className="btn btn-danger mt-3 px-4 py-2"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
