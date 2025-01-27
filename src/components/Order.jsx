import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToOrder } from "../store/DataSlice";
import "../style/components/order.css";

const Order = () => {
  const { cart } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    if (cart.length > 0) {
      dispatch(addToOrder()); 
    }
  }, [dispatch, cart]);

  const getTotal = () => {
    return cart.reduce(
      (total, item) => total + item.final_display_price ,
      0
    );
  };

  return (
    <div className="order">
      <h2>Order Summary</h2>
      <table className="order-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>1</td>
              <td>{item.final_display_price} EGP</td>
              <td>
                {(item.final_display_price * 1).toFixed(
                  2
                )}{" "}
                EGP
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="order-total">
        <span>Total: </span>
        <span>{getTotal().toFixed(2)} EGP</span>
      </div>
    </div>
  );
};

export default Order;
