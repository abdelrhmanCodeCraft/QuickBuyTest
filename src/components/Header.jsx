import React from "react";
import "../style/components/header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="slide">
      <div className="slider">
        <input
          type="radio"
          name="slider"
          title="slide1"
          defaultChecked
          className="slider__nav"
        />
        <input
          type="radio"
          name="slider"
          title="slide2"
          className="slider__nav"
        />
        <input
          type="radio"
          name="slider"
          title="slide3"
          className="slider__nav"
        />

        <div className="slider__inner">
          <div className="slider__contents slider-one">
            <div className="room room-text">
              <h1>
                shopping and <br /> department store
              </h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Dignissimos repellat qui est!
              </p>
              <button className="button-86">shop now</button>
            </div>
          </div>

          <div className="slider__contents slider-tow">
            <div className="room room-text">
              <h1>
                shopping and <br /> department store
              </h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Dignissimos repellat qui est!
              </p>
              <button className="button-86">shop now</button>
            </div>
          </div>

          <div className="slider__contents slider-three">
            <div className="room room-text">
              <h1>
                shopping and <br /> department store
              </h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos repellat qui est!
              </p>
              <Link to={"/shop"} className="button-86">
                shop now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
