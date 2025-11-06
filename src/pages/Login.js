import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({ username }));
    navigate("/home");
  };

  return (
    <div className="login-page justify-content-center align-items-center d-flex mt-5 "style={{borderRadius: "80px"}} >
     <div class="card bg-dark shadow  text-white" style={{marginTop:"100px",height:"400px", border:" #0c9ff0 2px solid",borderRadius: "40px"}}>
 
  <div class="card-body"  >
    <h2 class="card-title  justify-content-center align-items-center d-flex text-primary " style={{height: "140px",
    border:" #0c9ff0 2px solid",borderRadius: "20px"}}>EliteShop</h2>
    <h3 className="justify-content-center align-items-center d-flex">Login</h3>
   <form className="m-4">
  <label className="form-label mx-2">Name:</label>
  <input type="textarea" placeholder="Enter Your Name" className="mx-4"></input> <br></br>
   <label className="form-label mx-2 " >Password:</label>
  <input className="form-input" type="password" form="form-input" placeholder="password" ></input>
   </form>
    <Link href="#" class="btn btn-primary justify-content-center align-items-center d-flex btn-md w-50 " style={{marginLeft:"100px"}} type="button" onClick={handleLogin}>Login</Link>
  </div>
</div>
    </div>
  );
}
