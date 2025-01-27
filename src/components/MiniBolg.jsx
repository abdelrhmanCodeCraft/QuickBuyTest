import React from "react";
import grilledFoods from "../data/BlogData";
import "../style/components/miniBlog.css"; 

const MiniBlog = () => {
  return (
    <div className="mini-blog">
      <div className="container">
        <h2>Grilled Foods</h2>
        <div className="content">
          {grilledFoods.map((food, index) => (
            <div className="card" key={index}>
              <img src={food.imageUrl} alt={food.title} className="image" />
              <div className="blog-content">
                <h3 className="title">{food.title}</h3>
                <p className="description">{food.description}</p>
                <div className="info">
                  <span>{food.date}</span>
                  <span>{food.views} views</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MiniBlog;
