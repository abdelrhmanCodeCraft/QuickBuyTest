import React from 'react'
import Header from '../components/Header'
import Product from '../components/Categories'
import one from '../image/car2-removebg-preview.png'
import tow from '../image/card1-removebg-preview.png'
import '../style/pages/home.css'
import MiniDeal from '../components/MiniDeal'
import { json, Link } from 'react-router-dom'
import one1 from '../image/1.jpeg'
import tow2 from '../image/2.jpeg'
import three from '../image/3.jpeg'
import four from '../image/4.jpeg' 


const Home = () => {

  return (
    <>
      <Header />
      <div className="home-card">
        <div className="content">
          <div className="box">
            <div className="image">
              <img src={one} alt="" />
            </div>
            <div className="discription">
              <h1>Tasty Snack & Fast food</h1>
              <p>The flavour of something special</p>
              <Link className="card-btn" to={"/shop"}>
                shop now
              </Link>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img src={tow} alt="" />
            </div>
            <div className="discription">
              <h1>Fresh fast foods in addition to juices</h1>
              <p>The flavour of something special</p>
              <Link className="card-btn" to={"/shop"}>
                shop now
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="rival">
        <div className="content">
          <div className="box">
            <h1>
              <h4>off 25%</h4>
              on fast food
            </h1>
            <Link className="rival-btn" to={"/shop"}>
              shop now
            </Link>
          </div>
        </div>
      </div>

      <Product />
      <h1 className="deal-title">deals of the day</h1>
      <MiniDeal />

      <div className="more-info">
        <div className="content">
          <div className="room">
            <div className="image">
              <img src={one1} alt="" />
            </div>
            <Link to={"/blog"} className="dis">
              <p>may 10,2024</p>
              <h3>Best way to solve business deal issue.</h3>
            </Link>
          </div>
          <div className="room">
            <div className="image">
              <img src={tow2} alt="" />
            </div>
            <Link to={"/blog"} className="dis">
              <p>may 10,2024</p>
              <h3>Business ideas to grow your business.</h3>
            </Link>
          </div>
          <div className="room">
            <div className="image">
              <img src={three} alt="" />
            </div>
            <Link to={"/blog"} className="dis">
              <p>may 10,2024</p>
              <h3>31 customer stats know in 2020.</h3>
            </Link>
          </div>
          <div className="room">
            <div className="image">
              <img src={four} alt="" />
            </div>
            <Link to={"/blog"} className="dis">
              <p>may 10,2024</p>
              <h3>Marketing Guide: 5 Steps to Success.</h3>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home
