import React, { useState } from "react";
import "../style/components/account.css";
import { RxDashboard } from "react-icons/rx";
import { LuShoppingBag, LuShoppingCart } from "react-icons/lu";
import { MdLogout } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import Order from "./Order";
import Register from "./Register";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Account() {
    const [activeTab, setActiveTab] = useState("tab1");

    const navigate = useNavigate()

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    const handleLogout = async () => {
      const token = localStorage.getItem("authToken");
      if (!token) {
        toast.error("No token found. Please log in first.");
        return;
      }

      try {
        const response = await axios.post(
          `https:/example.com`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
              "service-id": 14,
              branch: 24,
            },
          }
        );

        console.log("Logout successful:", response.data);
        toast.success("Logged out successfully!");

        localStorage.removeItem("authToken");
        navigate("/login");
      } catch (error) {
        console.error("Logout error:", error);
        toast.error(
          error.response?.data?.message ||
            "Failed to log out. Please try again."
        );
      }
    };



    const Tab1 = () => (
        <div className="room">
            <h2 style={{fontSize:"2.5rem", fontWeight:"600"}}>hello</h2>
            <p style={{lineHeight:"30px", fontWeight:"bold"}}>
                From your account dashboard. you can easily check & view your recent <br />
                orders, manage your <span style={{color:"var(--color-primary)"}}>shipping and billing addresses and edit your <br />
                password and account details.</span>
            </p>
        </div>
    );

    const Tab2 = () => (
        <Order />
    );

    const Tab3 = () => (
        <div className="track">
            <h1 style={{fontSize:"2.4rem"}}>orders tracking</h1>
            <p style={{lineHeight:"30px", color:"gray"}}>To track your order please enter your OrderID in the box below and press "Track" button. This was <br /> given to you on your receipt and in the confirmation email you should have received.</p>
            <label >
                <h5 style={{fontWeight:"500"}}>order ID</h5>
                <input style={{padding:" 1rem", width:"23rem", border:"1px solid #d6d6d6", background:"none", borderRadius:"0.4rem"}} type="text" placeholder="found in your order confirmation email"/>
            </label>

            <label >
                <h5 style={{fontWeight:"500"}}>biling email</h5>
                <input style={{padding:" 1rem", width:"23rem", border:"1px solid #d6d6d6", background:"none", borderRadius:"0.4rem", marginBottom:"3rem"}} type="text" placeholder="email you used during checkout "/>
            </label>
            <div>
                <button className="btn-tracking">track</button>
            </div>
        </div>
    );
    const Tab4 = () => (
        <div className="biling" style={{display:"flex", justifyContent:"space-around", alignItems:"start"}}>
            <div className="room">
                <h1 style={{marginBottom:"3rem"}}>Billing Address</h1>
                <p> 3522 Interstate</p>
                <p>75 Business Spur,</p>
                <p>Sault Ste.</p>
                <p>Marie, MI 49783</p>
                <p>New York</p>
                <a href="">edit</a>
            </div>
            <div className="room">
                <h1 style={{marginBottom:"3rem"}}>shiping address</h1>

                <p>4299 Express Lane</p>
                <p>Sarasota,</p>
                <p>FL 34249 USA</p>
                <p>Phone: 1.941.227.4444</p>
                <p>Sarasota</p>
                <a href="">edit</a>

            </div>
        </div>
    );
    const Tab5 = () => (
            <Register />
    );
    const Tab6 = () => (
        <>
        </>
    );

    const tabs = [
        { id: "tab1", label: <span className="span"><RxDashboard /> dashboard</span>, component: <Tab1 /> },
        { id: "tab2", label: <span className="span"> <LuShoppingBag /> order</span>, component: <Tab2 /> },
        { id: "tab3", label: <span className="span"><LuShoppingCart /> track your order</span>, component: <Tab3 /> },
        { id: "tab4", label: <span className="span"><IoLocationSharp /> address</span>, component: <Tab4 /> },
        { id: "tab5", label: <span className="span"><FaUser /> account</span>, component: <Tab5 /> },
        { id: "tab6", label: <span className="span" onClick={handleLogout}><MdLogout /> logout</span>, component: <Tab6 /> },
    ];

    return (
        <div className="account">
            <div className="container">
                <div className="tabs">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
                            onClick={() => handleTabClick(tab.id)}
                            >
                            {tab.label}
                        </button>
                    ))}
                </div>
                <div className="tab-content">
                    {tabs.map((tab) => (
                        <div
                            key={tab.id}
                            className={`content ${activeTab === tab.id ? "active" : ""}`}
                            style={{ display: activeTab === tab.id ? "block" : "none" }} 
                            >
                            {tab.component}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Account;
