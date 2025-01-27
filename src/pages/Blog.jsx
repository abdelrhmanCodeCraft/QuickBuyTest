import React from 'react'
import MiniBlog from '../components/MiniBolg'
import { RiSearch2Line } from "react-icons/ri";
import '../style/pages/blog.css'
import { Link } from 'react-router-dom';
import blog15 from '../image/blog15.jpeg'
import bloge13 from '../image/blog13.jpeg'
import blog11 from '../image/blog11.jpeg'
import blog9 from '../image/blog9.jpeg'
import blog5 from '../image/blog5.jpeg'
import bolog6 from '../image/blog6.jpeg'
import { GoStarFill } from 'react-icons/go';
import { IoClose } from 'react-icons/io5';


const Blog = () => {


  const trending = [
    {
      image: blog15,
      title: "Delicious Grilled Steak",
      price: 120,
      rating: [
        <GoStarFill />,
        <GoStarFill />,
        <GoStarFill />,
        <GoStarFill />,
        <GoStarFill />,
      ],
    },
    {
      image: bloge13,
      title: "BBQ Chicken Wings",
      price: 80,
      rating: [
        <GoStarFill />,
        <GoStarFill />,
        <GoStarFill />,
        <GoStarFill />,
        <GoStarFill />,
      ],
    },
    {
      image: blog11,
      title: "Grilled Vegetable Skewers",
      price: 60,
      rating: [
        <GoStarFill />,
        <GoStarFill />,
        <GoStarFill />,
        <GoStarFill />,
        <GoStarFill />,
      ],
    },
    {
      image: blog9,
      title: "Savory Fish Tacos",
      price: 100,
      rating: [
        <GoStarFill />,
        <GoStarFill />,
        <GoStarFill />,
        <GoStarFill />,
        <GoStarFill />,
      ],
    },
  ];



  return (
    <div className="blog">
      <div className="topDel">
        <h4>blog</h4>
        <h4>home &gt;&gt; blog</h4>
      </div>
      <div className="container">
        <h1>Blog & News</h1>
        <div className="content">
          <MiniBlog />
          <div className="rooms">
            <div className="search">
              <label>
                <input type="text" placeholder="search" />
                <RiSearch2Line />
              </label>
            </div>
            <div className="category">
              <h2>category</h2>
              <div className="line">
                <Link>
                  Grilled Chicken <span>0</span>
                </Link>
                <Link>
                  BBQ Ribs <span>0</span>
                </Link>
                <Link>
                  Grilled Vegetables <span>0</span>
                </Link>
                <Link>
                  Fish Tacos<span>0</span>
                </Link>
                <Link>
                  Lamb Chops<span>0</span>
                </Link>
              </div>
            </div>

            <div className="trending">
              <h2>Trending Now</h2>
              <div>
                {trending.map((item, index) => (
                  <div className="room" key={index}>
                    <div className="image">
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div className="discription">
                      <h4>{item.title}</h4>
                      <p style={{ color: "gray" }}>Price: ${item.price}</p>
                      <div>
                        {item.rating.map((star, starIndex) => (
                          <span className="stars" key={starIndex}>
                            {star}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="Gallery">
              <h2>Gallery</h2>
              <div className="room">
                <img src={blog9} alt="" />
                <img src={blog11} alt="" />
                <img src={blog15} alt="" />
                <img src={blog5} alt="" />
                <img src={bolog6} alt="" />
                <img src={bloge13} alt="" />
              </div>
            </div>

            <div className="popular">
              <h2>popular tage</h2>
              <div className="room">
                <h4>
                  <IoClose className="icon" />
                  Cabbage
                </h4>
                <h4>
                  <IoClose className="icon" />
                  Broccoli
                </h4>
                <h4>
                  <IoClose className="icon" />
                  Smoothie
                </h4>
                <h4>
                  <IoClose className="icon" />
                  Fruit
                </h4>
                <h4>
                  <IoClose className="icon" />
                  Salad
                </h4>
                <h4>
                  <IoClose className="icon" />
                  Appetizer
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog
