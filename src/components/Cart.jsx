import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeItem, updateQuantity, fetchData } from "../store/DataSlice";
import "../style/components/cart.css";

const Cart = () => {
  const dispatch = useDispatch();
  const apiUrl = `https:/example.com`;

  useEffect(() => {
    dispatch(fetchData(apiUrl));
  }, [dispatch]);

  const cart = useSelector((state) => state.data.cart);

  const handleRemove = (id) => dispatch(removeItem(id));
  const handleQuantityChange = (id, quantity) =>
    dispatch(updateQuantity({ id, quantity }));

  const getProductOptions = ({ default_attributes }) => {
    const options = default_attributes?.[0]?.options?.map((option, index) => (
      <span key={index} style={{ display: "block" }}>
        {option?.name || "Unknown Option"} - {option?.price || "No Price"}
      </span>
    )) || <span>No options available</span>;

    return options;
  };


  return (
    <div className="cart">
      <div className="content">
        <h1>Shopping Cart</h1>
        <div className="container">
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Remove</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(
                ({
                  id,
                  name,
                  thumbnail,
                  quantity,
                  final_display_price,
                  default_attributes,
                }) => (
                  <tr key={id}>
                    <td>
                      <img
                        src={thumbnail}
                        alt={name}
                        className="product-image"
                      />
                      <h3>{name}</h3>
                    </td>
                    <td className="quantity">
                      <button
                        onClick={() => handleQuantityChange(id, quantity - 1)}
                        disabled={quantity <= 1}
                      >
                        -
                      </button>
                      <span style={{ margin: "0 1rem" }}>{quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(id, quantity + 1)}
                        disabled={quantity >= 10}
                      >
                        +
                      </button>
                    </td>
                    <td>${(final_display_price * quantity).toFixed(2)}</td>
                    <td>
                      <button
                        className="remove-button"
                        onClick={() => handleRemove(id)}
                      >
                        Remove
                      </button>
                    </td>
                    <td>{getProductOptions({ default_attributes })}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
          <div className="subtotal">
            <h3>
              Subtotal: EGP{" "}
              {cart
                .reduce(
                  (total, { final_display_price, quantity }) =>
                    total + final_display_price * quantity,
                  0
                )
                .toFixed(2)}
            </h3>
            <Link className="checkout-button" to="/checkout">
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
