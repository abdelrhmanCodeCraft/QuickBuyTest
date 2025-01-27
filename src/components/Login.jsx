import React, { useState } from 'react';
import '../style/components/login.css'; 
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [dataLogin, setDataLogin] = useState({
        phone: ""
    });

    const navigat = useNavigate()

    const loginFetchUserData = async (data) => {
        try {
            const response = await axios.post(`https:/example.com`, data);
            navigat("/verifyOtp");
        } catch (error) {
            toast.error(error.response?.data?.message || error.message);
            console.error("login error:", error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDataLogin((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(dataLogin);
        loginFetchUserData(dataLogin);
    };

    return (
        <div className="login">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Phone:
                        <input
                            type="tel"
                            name="phone"
                            value={dataLogin.phone}
                            onChange={handleChange}
                            required
                            placeholder="Enter your phone number"
                        />
                    </label>
                </div>
                
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
