import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../features/cart/cartSlice";

export default function CartPage() {
  const { items, totalQuantity } = useSelector((s) => s.cart);
  const dispatch = useDispatch();

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div className="cart-page row m-0">
      <h2>Your Cart ({totalQuantity} items)</h2>
      {items.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <>
         
          {items.map((i) => (
          <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card product-card shadow-sm h-100 border-0">
        
          <img
            src={i.image}
            alt={i.title}
            className="card-img-top p-3"
            style={{ height: "250px", objectFit: "contain" }}
          />
       
        <div className="card-body text-center p-1">
          <h6 className="card-title text-white mb-2">
            {i.title.length > 25 ? `${i.title.slice(0, 25)}...` : i.title}
          </h6>
          <h5 className="text-primary fw-bold mb-3">${i.price}</h5>
         <div className="d-flex flex-column " style={{gap:"10px"}}>
        
       <button className="btn btn-danger" onClick={() => dispatch(removeFromCart(i.id))}>Remove</button>
       </div> 
        </div>
      </div>
    </div>
               ))}
               <h3>Total: ${total.toFixed(2)}</h3>
          <button className="btn btn-danger w-25 ms-2 " onClick={() => dispatch(clearCart())}>Clear Cart</button>
        </>
      )}
    </div>
  );
}
