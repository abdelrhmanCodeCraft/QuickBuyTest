import React from 'react'
import '../style/components/footer.css'
import logo from "../image/logoecom-removebg-preview.png";
import { IoLocationOutline } from "react-icons/io5";
import { SlEarphonesAlt } from "react-icons/sl";
import { IoIosSend } from "react-icons/io";
import { FaPinterest, FaRegClock, FaYoutube } from "react-icons/fa";
import appstore from '../image/app-store.jpg'
import googl from '../image/google-play.jpg'
import payment from '../image/payment-method.png'
import { FaPhoneVolume } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";





const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="content">
          <div className="room">
            <div className="logo">
              <h1
                className="navbar-logo"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  fontSize: "1.8rem",
                }}
              >
                <img src={logo} alt="Logo" style={{ width: "3.3rem" }} />
                QuickBuy
              </h1>
            </div>
            <h4>
              Awesome grocery store website <br /> template
            </h4>
            <p>
              <IoLocationOutline className="fo-icon" />
              <span>Address</span>: 5171 W Campbell Ave undefined Kent, <br />
              Utah 53127 United States
            </p>
            <p>
              <SlEarphonesAlt className="fo-icon" />
              <span>Call Us</span>:(+91) - 543-025-920438
            </p>
            <p>
              <IoIosSend className="fo-icon" />
              <span>Email</span>:abdo@sbix.com
            </p>
            <p>
              <FaRegClock className="fo-icon" />
              <span>Hours</span>:10:00 - 18:00, Mon - Sat
            </p>
          </div>
          <div className="room">
            <h3>company</h3>
            <p>about</p>
            <p>Delivery Information</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Contact Us</p>
            <p>Support Center</p>
            <p>Careers</p>
          </div>
          <div className="room">
            <h3>account</h3>
            <p>Sign In</p>
            <p>View Cart</p>
            <p>My Wishlist</p>
            <p>Track My Order</p>
            <p>Help Ticket</p>
            <p>Shipping Details</p>
            <p>Compare products</p>
          </div>
          <div className="room">
            <h3>Corporate</h3>
            <p>Become a Vendor</p>
            <p>Affiliate Program</p>
            <p>Farm Business</p>
            <p>Farm Careers</p>
            <p>Our Suppliers</p>
            <p>Accessibility</p>
            <p>Promotions</p>
          </div>
          <div className="room">
            <h3>Popular</h3>
            <p>Milk & Flavoured Milk</p>
            <p>Butter and Margarine</p>
            <p>Eggs Substitutes</p>
            <p>Marmalades</p>
            <p>Sour Cream and Dips</p>
            <p>Tea & Kombucha Cheese</p>
          </div>
          <div className="room">
            <h3>Install App</h3>
            <p>From App Store or Google Play</p>
            <div className="image">
              <img src={appstore} alt="" />
              <img src={googl} alt="" />
            </div>
            <p>Secured Payment Gateways</p>
            <img src={payment} alt="" />
          </div>
        </div>
        <div className="content-tow">
          <div className="box">
            <p style={{ color: "gray" }}>
              © 2024,{" "}
              <span style={{ color: "var(--color-primary)" }}>abdo</span> - HTML
              Ecommerce Template <br /> All rights reserved
            </p>
          </div>
          <div className="box box-number">
            <div className="one">
              <div>
                <FaPhoneVolume style={{ color: "gray", fontSize: "3rem" }} />
              </div>
              <div>
                <h1 style={{ color: "var(--color-primary)" }}>1300-4099</h1>
                <h6>Working 8:00 - 22:00</h6>
              </div>
            </div>
            <div className="one">
              <div>
                <FaPhoneVolume style={{ color: "gray", fontSize: "3rem" }} />
              </div>
              <div>
                <h1 style={{ color: "var(--color-primary)" }}>2300-1200</h1>
                <h6>24/7 Support Center</h6>
              </div>
            </div>
          </div>
          <div className="box box-end">
            <h4>
              follow us
              <a href="">
                <FaFacebookF className="icon" />
              </a>
              <a href="">
                <FaXTwitter className="icon" />
              </a>
              <a href="">
                <FaInstagram className="icon" />
              </a>
              <a href="">
                <FaYoutube className="icon" />
              </a>
              <a href="">
                <FaPinterest className="icon" />
              </a>
            </h4>
            <p>Up to 15% discount on your first subscribe</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer
