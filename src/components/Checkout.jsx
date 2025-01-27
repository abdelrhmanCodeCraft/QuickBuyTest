import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToOrder } from "../store/DataSlice";
import "../style/components/checkout.css";
import axios from "axios";
import MapComponent from "./MapComponent";

const Checkout = () => {
  const { cart } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    payment_method: "",
    time_slot_id: "",
    date: "",
    notes: "",
  });

  const [orderStatus, setOrderStatus] = useState(null);

  useEffect(() => {
    dispatch(addToOrder());
  }, [dispatch, cart]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendDataOrder = async () => {
    try {
      const response = await axios.post(`https:/example.com`, formData, {
        headers: {
          "Content-Type": "application/json",
          "service-id": 14,
          branch: 24,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendDataOrder();
      setOrderStatus("success");
      setFormData({
        payment_method: "",
        time_slot_id: "",
        date: "",
        notes: "",
      });
    } catch (error) {
      setOrderStatus("error");
    }
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.final_display_price, 0);
  };

  return (
    <div className="checkout">
      <div className="checkout-container">
        <div className="order-summary">
          <h2>Order Summary</h2>
          <div className="order-items">
            {cart.map((item) => (
              <div key={item.id} className="order-item">
                <span className="order-item-name">{item.name}</span>
                <span className="order-item-quantity">x{item.quantity}</span>
                <span className="order-item-price">
                  {item.final_display_price} EGP
                </span>
              </div>
            ))}
          </div>
          <div className="order-total">
            <span>Total</span>
            <span>{getTotal()} EGP</span>
          </div>
        </div>

        <form className="user-info" onSubmit={handleSubmit}>
          <h2>User Information</h2>
          <div className="input-group">
            <label htmlFor="timeSlotId">Time Slot</label>
            <select
              id="timeSlotId"
              name="timeSlotId"
              value={formData.timeSlotId}
              onChange={handleChange}
              required
            >
              <option value="">Select Time Slot</option>
              <option value="1">9:00 AM - 12:00 PM</option>
              <option value="2">12:00 PM - 3:00 PM</option>
              <option value="3">3:00 PM - 6:00 PM</option>
            </select>
          </div>

          <div className="input-group">
            <label htmlFor="date"> Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="notes">Notes</label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Any additional notes?"
            />
          </div>

          <div className="payment-method">
            <h2>Payment Method</h2>
            <div className="payment-options">
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cash"
                  checked={formData.paymentMethod === "cash"}
                  onChange={handleChange}
                />
                Cash
              </label>
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="paypal"
                  checked={formData.paymentMethod === "paypal"}
                  onChange={handleChange}
                />
                online
              </label>
            </div>
          </div>

          {orderStatus === "success" && (
            <p className="success">Order placed successfully!</p>
          )}
          {orderStatus === "error" && (
            <p className="error">Failed to place order. Please try again.</p>
          )}

          <div className="checkout-btn">
            <button type="submit">Place Order</button>
          </div>
        </form>
      </div>
      <MapComponent/>
    </div>
    
  );
};

export default Checkout;





