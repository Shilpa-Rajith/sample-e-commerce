import React from "react";
import "./Home.css";
import banner1 from "../../src/images/banner1.png";
import banner2 from "../../src/images/banner2.png";
import banner3 from "../../src/images/banner3.png";
import card1 from '../images/card1.png';
import card2 from '../images/card2.png';
import card3 from '../images/card3.png';
import { useNavigate } from "react-router-dom";
export default function Home() {

  const navigate =useNavigate();
 
  const handleButton=()=>{
    navigate('/products')
  }
  return (
    <div className="home-container w-100">
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide carousel-fade shadow-lg "style={{marginTop:"600px"}}
        data-bs-ride="carousel"
      >
        <div className="carousel-inner rounded-4 overflow-hidden">
          <div className="carousel-item active">
            <img
              src={banner1}
              className="d-block w-100"
              alt="Mountains"
              style={{ height: "480px", objectFit: "cover" }}
            />
            <div className="carousel-caption d-none d-md-block bg-blur">
             
             
            </div>
          </div>

          <div className="carousel-item">
            <img
              src={banner2}
              className="d-block w-100"
              alt="Beach"
              style={{ height: "480px", objectFit: "cover" }}
            />
            <div className="carousel-caption d-none d-md-block bg-blur">
               
            </div>
          </div>

          <div className="carousel-item">
            <img
              src={banner3}
              className="d-block w-100"
              alt="Forest"
              style={{ height: "480px", objectFit: "cover" }}
            />
            <div className="carousel-caption d-none d-md-block bg-blur">
  
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="card-group  main-bg mt-5">
        <div className="card bg-dark text-white shadow-sm border-0 mx-2 rounded-4 overflow-hidden" >
          <img
            src={card1}
            className="card-img-top"
            alt="..."
            style={{ height: "500px", objectFit: "cover" }}
          />
          <div className="card-body">
    <button className="btn-outline-primary btn" onClick={handleButton}>Shop now</button>
            <p className="card-text">
              Wider card with supporting text below as a natural lead-in to
              additional content.
            </p>
         
          </div>
        </div>

        <div className="card bg-dark text-white shadow-sm border-0 mx-2 rounded-4 overflow-hidden">
          <img
            src={card2}
            className="card-img-top"
            alt="..."
            style={{ height: "500px", objectFit: "cover" }}
          />
           <div className="card-body">
            <button className="btn-outline-primary btn" onClick={handleButton}>Shop now</button>
            <p className="card-text">
              Wider card with supporting text below as a natural lead-in to
              additional content.
            </p>
         
          </div>
        </div>

        <div className="card bg-dark text-white shadow-sm border-0 mx-2 rounded-4 overflow-hidden">
          <img
            src={card3}
            className="card-img-top"
            alt="..."
            style={{ height: "500px", objectFit: "cover" }}
          />
          <div className="card-body">
             <button className="btn-outline-primary btn" onClick={handleButton}>Shop now</button>
            <p className="card-text">
              Wider card with supporting text below as a natural lead-in to
              additional content.
            </p>
         
          </div>
        </div>
      </div>
    </div>
  );
}
