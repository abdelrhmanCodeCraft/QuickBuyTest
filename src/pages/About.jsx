import React from 'react'
import aboutBase from '../image/FOOD PHOTOGRAPHY.jpeg'
import aboutOne from '../image/Apogeu.jpeg'
import aboutTow from "../image/Hooked On Meat.jpeg";
import aboutthree from "../image/How to Pan-Sear.jpeg";
import one from '../image/Perfect plates.jpeg'
import tow from '../image/The Republic _ 2017.jpeg'
import '../style/pages/about.css'
import personOne from "../image/20 Little Known Facts About The Witcher's Henry Cavill.jpeg"
import personTow from "../image/Peaky Blinders' Cillian Murphy sends the internet into meltdown.jpeg"
import {
  FaTag,
  FaShoppingCart,
  FaTruck,
  FaUndo,
  FaSmile,
  FaStar,
  FaFacebookF,
} from "react-icons/fa";
import { BsTwitterX } from 'react-icons/bs';
import { FiInstagram, FiYoutube } from 'react-icons/fi';




const About = () => {

  const boxes = [
    {
      title: "Best Prices & Offers",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
      icon: <FaTag />,
      link: <a href="https://example.com/best-prices">Read More</a>,
    },
    {
      title: "Wide Assortment",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
      icon: <FaShoppingCart />,
      link: <a href="https://example.com/wide-assortment">Read More</a>,
    },
    {
      title: "Free Delivery",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
      icon: <FaTruck />,
      link: <a href="https://example.com/free-delivery">Read More</a>,
    },
    {
      title: "Easy Returns",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
      icon: <FaUndo />,
      link: <a href="https://example.com/easy-returns">Read More</a>,
    },
    {
      title: "100% Satisfaction",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
      icon: <FaSmile />,
      link: <a href="https://example.com/satisfaction">Read More</a>,
    },
    {
      title: "Great Daily Deal",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
      icon: <FaStar />,
      link: <a href="https://example.com/daily-deal">Read More</a>,
    },
  ];




  return (
    <div className="about">
      <div className="topDel">
        <h4>about</h4>
        <h4>home &gt;&gt; about</h4>
      </div>
      <div className="container">
        <div className="content">
          <div className="head">
            <div className="one">
              <img src={aboutBase} alt="" />
            </div>
            <div className="tow">
              <h1>Welcome to QuickBuy</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate id est laborum.
              </p>
              <p>
                Ius ferri velit sanctus cu, sed at soleat accusata. Dictas
                prompta et Ut placerat legendos interpre.Donec vitae sapien ut
                libero venenatis faucibus. Nullam quis ante Etiam sit amet orci
                eget. Quis commodo odio aenean sed adipiscing. Turpis massa
                tincidunt dui ut ornare lectus. Auctor elit sed vulputate mi sit
                amet. Commodo consequat. Duis aute irure dolor in reprehenderit
                in voluptate id est laborum.
              </p>
              <div className="images">
                <img src={aboutOne} alt="" />
                <img src={aboutTow} alt="" />
                <img src={aboutthree} alt="" />
              </div>
            </div>
          </div>
          <div className="boxes-container">
            <h1>What We Provide?</h1>
            <div className="content">
              {boxes.map((box, index) => (
                <div className="box" key={index}>
                  <div className="icon">{box.icon}</div>
                  <h2>{box.title}</h2>
                  <p>{box.description}</p>
                  <div className="link">{box.link}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="performance">
            <div className="content">
              <div className="box">
                <div className="one">
                  <img src={one} alt="" />
                </div>
                <div className="tow">
                  <img src={tow} alt="" />
                </div>
              </div>
              <div className="room">
                <h3>our performance</h3>
                <h1>Your Partner for e-commerce grocery solution</h1>
                <p>
                  Ed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                </p>
                <p>
                  Pitatis et quasi architecto beatae vitae dicta sunt explicabo.
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia
                </p>
              </div>
            </div>
            <div className="text">
              <div className="text-one">
                <h2>Who we are</h2>
                <p>
                  Volutpat diam ut venenatis tellus in metus. Nec dui nunc
                  mattis enim ut tellus eros donec ac odio orci ultrices in.
                  ellus eros donec ac odio orci ultrices in.
                </p>
              </div>
              <div className="text-one">
                <h2>Our history</h2>
                <p>
                  Volutpat diam ut venenatis tellus in metus. Nec dui nunc
                  mattis enim ut tellus eros donec ac odio orci ultrices in.
                  ellus eros donec ac odio orci ultrices in.
                </p>
              </div>
              <div className="text-one">
                <h2>Our mission</h2>
                <p>
                  Volutpat diam ut venenatis tellus in metus. Nec dui nunc
                  mattis enim ut tellus eros donec ac odio orci ultrices in.
                  ellus eros donec ac odio orci ultrices in.
                </p>
              </div>
            </div>
          </div>

          <div className="team">
            <h1 className="h1">our team</h1>
            <div className="content">
              <div className="rooms">
                <div className="room-one">
                  <h5>our team</h5>
                  <h1>Meet Our Expert Team ;)</h1>
                  <p>
                    Proin ullamcorper pretium orci. Donec necscele risque leo.
                    Nam massa dolor imperdiet neccon sequata congue idsem.
                    Maecenas malesuada faucibus finibus.
                  </p>
                  <p>
                    Proin ullamcorper pretium orci. Donec necscele risque leo.
                    Nam massa dolor imperdiet neccon sequata congue idsem.
                    Maecenas malesuada faucibus finibus.
                  </p>
                  <button>view all member</button>
                </div>
                <div className="room-tow">
                  <div className="one">
                    <img src={personOne} alt="" />
                  </div>
                  <div className="box">
                    <h2>henry cavill</h2>
                    <p>CEO & Co-Founder</p>
                    <div className="social">
                      <FaFacebookF className="icon" />
                      <BsTwitterX className="icon" />
                      <FiInstagram className="icon" />
                      <FiYoutube className="icon" />
                    </div>
                  </div>
                </div>
                <div className="room-three">
                  <div className="one">
                    <img src={personTow} alt="" />
                  </div>
                  <div className="box">
                    <h2>Peaky Blinders</h2>
                    <p>CEO & Co-Founder</p>
                    <div className="social">
                      <FaFacebookF className="icon" />
                      <BsTwitterX className="icon" />
                      <FiInstagram className="icon" />
                      <FiYoutube className="icon" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About
