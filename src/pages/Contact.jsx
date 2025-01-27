import React from 'react'
import { AiFillMessage } from 'react-icons/ai'
import { FaFileAlt, FaPhone } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5';
import '../style/pages/contact.css'
import Accordion from '../components/ِAccourdion'
import ContactForm from '../components/ContactForm';


const Contact = () => {
  return (
    <div className="contact">
      <div className="topDel">
        <h4>deals</h4>
        <h4>home &gt;&gt; deals</h4>
      </div>
      <div className="container">
        <div className="content">
          <div className="information">
            <h1>contact information</h1>
            <p className="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sunt
              velit minima esse officia?
            </p>
            <div className="boxes">
              <div className="box">
                <AiFillMessage className="icon" />
                <h2>E-mail address</h2>
                <p>mail@example.com</p>
              </div>
              <div className="box">
                <FaPhone className="icon" />
                <h2>phone number</h2>
                <p>01200 900 (2300)</p>
              </div>
              <div className="box">
                <IoLocationSharp className="icon" />
                <h2>address</h2>
                <p>egypt, cairo</p>
              </div>
              <div className="box">
                <FaFileAlt className="icon" />
                <h2>fax</h2>
                1-500-5500-444
              </div>
            </div>
          </div>
          <div className="rooms">
            <div className="room">
              <Accordion />
            </div>
            <div className="room">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact
