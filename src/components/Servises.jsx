import React from 'react'
import '../style/components/servises.css'
import { GiPriceTag } from "react-icons/gi";
import { FaHandsHelping } from "react-icons/fa";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { GoDiscussionOutdated } from "react-icons/go";
import { FaBoxOpen } from "react-icons/fa6";





const Servises = () => {
  return (
    <div className="servises">
      <div className="container">
        <div className="content">
          <div className="room">
            <div className="icon">
              <GiPriceTag className="serv-icon" />
            </div>
            <div className="text">
              <h2>Best prices </h2>
              <p>Orders $50 or more</p>
            </div>
          </div>
          <div className="room">
            <div className="icon">
              <FaHandsHelping className="serv-icon" />
            </div>
            <div className="text">
              <h2>Free delivery</h2>
              <p>24/7 amazing services</p>
            </div>
          </div>
          <div className="room">
            <div className="icon">
              <FaFileInvoiceDollar className="serv-icon" />
            </div>
            <div className="text">
              <h2>BGreat daily deal</h2>
              <p>When you sign up</p>
            </div>
          </div>
          <div className="room">
            <div className="icon">
              <GoDiscussionOutdated className="serv-icon" />
            </div>
            <div className="text">
              <h2>Wide assortment</h2>
              <p>Mega Discounts</p>
            </div>
          </div>
          <div className="room">
            <div className="icon">
              <FaBoxOpen className="serv-icon" />
            </div>
            <div className="text">
              <h2>Easy returns</h2>
              <p>Within 30 days</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Servises
