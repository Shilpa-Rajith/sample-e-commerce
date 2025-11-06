import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";
import '../components/css/Navbar.css'
import cart from '../images/shopping-bag.png'
export default function Navbar() {
  const { totalQuantity } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <nav className="navbar">
      <h2 className="logo">EliteShop</h2>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/cart"> <img src={cart} height={25} width={30} alt=""></img>  <span class="position-absolute top-4 start-100 translate-middle badge rounded-pill bg-danger">
   {totalQuantity}
    <span class="visually-hidden">unread messages</span>
  </span> </Link></li>
        {user ? (
          <li onClick={() => dispatch(logout())}>Logout</li>
        ) : (
          <li><Link to="/">Login</Link></li>
        )}
      </ul>
    </nav>
  );
}
