import React, { useState } from "react";
import "../style/components/verifyOtp.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const VerifyOtp = () => {
  const [verifyUser, setVerifyUser] = useState({
    phone: "",
    otp: "",
  });

  const navigate = useNavigate()



  const fetchVerifyData = async (data) => {
    try {
      const response = await axios.post(
        "https://example.com",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            "service-id": 14,
            branch: 24,
          },
        }
      );

      const token = response.data?.data?.authorization?.token;
      console.log("Extracted Token:", token);

      localStorage.setItem("authToken", token);

      toast.success(response.data.message);
      navigate("/");

      return token;
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
      console.error("Verification error:", error);
    }
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    fetchVerifyData(verifyUser);
  };

  const handleChang = (e) => {
    const { name, value } = e.target;
    setVerifyUser((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="verify">
      <div className="container">
        <div className="content">
          <h1>Verify OTP</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label>
                Phone
                <input
                  type="tel"
                  name="phone"
                  value={verifyUser.phone}
                  onChange={handleChang}
                  required
                  placeholder="Enter your phone number"
                />
              </label>
            </div>
            <div>
              <label>
                OTP
                <input
                  type="text"
                  name="otp"
                  value={verifyUser.otp}
                  onChange={handleChang}
                  required
                  placeholder="Enter the OTP"
                />
              </label>
            </div>
            <button type="submit">Verify</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;
