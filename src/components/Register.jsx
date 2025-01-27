import React, { useState } from "react";
import "../style/components/register.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Register = () => {
  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
  });
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const registerFetchUserData = async (data) => {
    try {
      const response = await axios.post(`https:/example.com`, data);
      console.log("Registration successful:", response.data);
      toast.success(response.data.message);
      setTimeout(() => {
        navigate("/verifyOtp");
      }, 3000);
    } catch (error) {
      toast.error(error.message);
      console.error("Registration error:", error);
      setError("Registration failed. Please try again.");
    }
  };

  const handleChang = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    await registerFetchUserData({ ...userData, password });

    setError("");
  };

  return (
    <div className="register">
      <h1>Create Account</h1>
      <Link className="check" to={"/login"}>
        Already have an account?
      </Link>
      <h3>{error}</h3>
      <form onSubmit={handleSubmit}>
        {error && (
          <p
            className="error"
            style={{
              padding: "0.6rem 2rem",
              background: "#f1aaaa",
              border: "2px solid red",
              borderRadius: "0.5rem",
              maxWidth: "40rem",
            }}
          >
            {error}
          </p>
        )}
        <div>
          <label>
            First Name:
            <input
              type="text"
              name="first_name"
              value={userData.first_name}
              onChange={handleChang}
              required
              placeholder="Enter your first name"
            />
          </label>
        </div>
        <div>
          <label>
            Last Name:
            <input
              type="text"
              name="last_name"
              value={userData.last_name}
              onChange={handleChang}
              required
              placeholder="Enter your last name"
            />
          </label>
        </div>
        <div>
          <label>
            Phone:
            <input
              type="tel"
              name="phone"
              value={userData.phone}
              onChange={handleChang}
              required
              placeholder="Enter your phone number"
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
          </label>
        </div>
        <div>
          <label>
            Confirm Password:
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="Confirm your password"
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
