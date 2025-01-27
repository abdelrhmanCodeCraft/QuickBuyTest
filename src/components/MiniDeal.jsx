import React from "react";
import { FaStar } from "react-icons/fa";
import one from "../image/_ (1).jpeg";
import tow from "../image/_.jpeg";
import three from "../image/Food.jpeg";
import four from "../image/Lamb Shanks with Red Wine Sauce.jpeg";
import "../style/components/miniDeal.css";
import { Link } from "react-router-dom";

const products = [
  {
    image: one,
    title: "Grilled Chicken Skewers by Example Name",
    price: (Math.random() * 50 + 100).toFixed(2),
    discount: (Math.random() * 10 + 5).toFixed(2),
    rating: (Math.random() * 5).toFixed(1),
    time: {
      days: Math.floor(Math.random() * 30),
      hours: Math.floor(Math.random() * 24),
      minutes: Math.floor(Math.random() * 60),
      seconds: Math.floor(Math.random() * 60),
    },
  },
  {
    image: tow,
    title: "Barbecue Ribs by Example Name",
    price: (Math.random() * 50 + 150).toFixed(2),
    discount: (Math.random() * 10 + 5).toFixed(2),
    rating: (Math.random() * 5).toFixed(1),
    time: {
      days: Math.floor(Math.random() * 30),
      hours: Math.floor(Math.random() * 24),
      minutes: Math.floor(Math.random() * 60),
      seconds: Math.floor(Math.random() * 60),
    },
  },
  {
    image: three,
    title: "Grilled Lamb Chops by Example Name",
    price: (Math.random() * 50 + 200).toFixed(2),
    discount: (Math.random() * 10 + 10).toFixed(2),
    rating: (Math.random() * 5).toFixed(1),
    time: {
      days: Math.floor(Math.random() * 30),
      hours: Math.floor(Math.random() * 24),
      minutes: Math.floor(Math.random() * 60),
      seconds: Math.floor(Math.random() * 60),
    },
  },
  {
    image: four,
    title: "Smoked Pork Belly by Example Name",
    price: (Math.random() * 50 + 120).toFixed(2),
    discount: (Math.random() * 10 + 5).toFixed(2),
    rating: (Math.random() * 5).toFixed(1),
    time: {
      days: Math.floor(Math.random() * 30),
      hours: Math.floor(Math.random() * 24),
      minutes: Math.floor(Math.random() * 60),
      seconds: Math.floor(Math.random() * 60),
    },
  },
  // Copy items to increase the number to 8
  {
    image: one,
    title: "Grilled Chicken Skewers by Example Name (Copy)",
    price: (Math.random() * 50 + 100).toFixed(2),
    discount: (Math.random() * 10 + 5).toFixed(2),
    rating: (Math.random() * 5).toFixed(1),
    time: {
      days: Math.floor(Math.random() * 30),
      hours: Math.floor(Math.random() * 24),
      minutes: Math.floor(Math.random() * 60),
      seconds: Math.floor(Math.random() * 60),
    },
  },
  {
    image: tow,
    title: "Barbecue Ribs by Example Name (Copy)",
    price: (Math.random() * 50 + 150).toFixed(2),
    discount: (Math.random() * 10 + 5).toFixed(2),
    rating: (Math.random() * 5).toFixed(1),
    time: {
      days: Math.floor(Math.random() * 30),
      hours: Math.floor(Math.random() * 24),
      minutes: Math.floor(Math.random() * 60),
      seconds: Math.floor(Math.random() * 60),
    },
  },
  {
    image: three,
    title: "Grilled Lamb Chops by Example Name (Copy)",
    price: (Math.random() * 50 + 200).toFixed(2),
    discount: (Math.random() * 10 + 10).toFixed(2),
    rating: (Math.random() * 5).toFixed(1),
    time: {
      days: Math.floor(Math.random() * 30),
      hours: Math.floor(Math.random() * 24),
      minutes: Math.floor(Math.random() * 60),
      seconds: Math.floor(Math.random() * 60),
    },
  },
  {
    image: four,
    title: "Smoked Pork Belly by Example Name (Copy)",
    price: (Math.random() * 50 + 120).toFixed(2),
    discount: (Math.random() * 10 + 5).toFixed(2),
    rating: (Math.random() * 5).toFixed(1),
    time: {
      days: Math.floor(Math.random() * 30),
      hours: Math.floor(Math.random() * 24),
      minutes: Math.floor(Math.random() * 60),
      seconds: Math.floor(Math.random() * 60),
    },
  },
];

const MiniDeal = () => {
  return (
    <div className="miniDeal">
      
      <div className="container">
        {/* <h1>Deals Of The Day</h1> */}
        <div className="content">
          {products.map((product, index) => (
            <div className="product-card" key={index}>
              <div className="image">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="discription">
                <div className="time">
                  <p>
                    <strong>D{product.time.days} </strong>
                    <strong>H{product.time.hours} </strong>
                    <strong>M{product.time.minutes} </strong>
                    <strong>S{product.time.seconds} </strong>
                  </p>
                </div>
                <div className="miniDis">
                  <h3>{product.title}</h3>
                  <div className="rating">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        color={i < product.rating ? "orangered" : "#ccc"}
                      />
                    ))}
                    <span>{product.rating} / 5</span>
                  </div>
                  <p>
                    Price: <strong>{product.price} EGP</strong>
                  </p>
                  <p className="p">
                    <strong>Discount: {product.discount}%</strong>
                    <Link className="btn" to={"/shop"}>
                      shop
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MiniDeal;
