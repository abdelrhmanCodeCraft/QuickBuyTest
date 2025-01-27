import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeSave } from "../store/DataSlice";
import { Link } from "react-router-dom";
import '../style/components/save.css'

const Save = () => {
  const dispatch = useDispatch();
  const { save } = useSelector((state) => state.data);
  const [disabledButtons, setDisabledButtons] = useState({});

  const handleAddToCart = (id) => {
    dispatch(addToCart(id));
    setDisabledButtons((prev) => ({ ...prev, [id]: true }));
  };

  const handleRemove = (id) => {
    dispatch(removeSave(id));
    setDisabledButtons((prev) => ({ ...prev, [id]: false }));
  };

  console.log(save);

  return (
    <div className="save">
      <div className="container">
        <div className="content">
          <h1>Your Wishlist</h1>
          {save.length === 0 ? (
            <div className="save-empty">
              <Link to={"/"} className="empty-content">
                No saved items available.
              </Link>
            </div>
          ) : (
            <table className="table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Action</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {save.map((item) => (
                  <tr key={item.id}>
                    <td className="product">
                      <img
                        src={item.thumbnail}
                        alt={item.name}
                        style={{ width: "50px", marginRight: "10px" }}
                      />
                      <div>{item.name}</div>
                    </td>
                    <td>{item.final_display_price}$</td>
                    <td>
                      <button
                        onClick={() => handleAddToCart(item.id)}
                        className={`action-button btn-${
                          disabledButtons[item.id] ? "secondary" : "success"
                        }`}
                        disabled={disabledButtons[item.id]}
                      >
                        {disabledButtons[item.id] ? "Added" : "Add to Cart"}
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => handleRemove(item.id)}
                        className="remove-button "
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Save;
