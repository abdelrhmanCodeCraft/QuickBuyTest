import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

export const fetchData = createAsyncThunk("data/fetchData", async (url) => {
  try {
    const response = await axios.get(url);
    console.log(response);
    return response?.data.data.categories;
    
  } catch (error) {
    throw new Error("Network response was not ok");
  }
  
});

const initialState = {
  items: [],
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  save: JSON.parse(localStorage.getItem("save")) || [],
  compare: [],
  order: [],
  totalAmount: 0,
  totalItems: 0,
  totalSave: 0,
  loading: false,
  error: null,
};

const dataSlice = createSlice({
  name: "data",
  initialState,

  reducers: {
    addToCart: (state, action) => {
      const token = localStorage.getItem("authToken");

      if (token !== null) {
        toast.success("Item added to cart");

        const existingItem = state.cart.find(
          (item) => item.id === action.payload.id
        );

        if (!existingItem) {
          state.cart.push({ ...action.payload, quantity: 1 });
          localStorage.setItem("cart", JSON.stringify(state.cart));
        }

        const updateCartOnServer = async () => {
          try {
            const productData = {
              product_id: action.payload.id,
              quantity: 1,
              notes: action.payload.notes || "",
              attributes: action.payload.attributes || [],
            };

            const response = await axios.post(
              `https:/example.com`,
              productData,
              {
                headers: {
                  "Content-Type": "application/json",
                  "service-id": 14,
                  branch: 24,
                },
              }
            );
            console.log("Cart updated on server", response.data);
          } catch (error) {
            console.error("Error updating cart on server:", error);
            toast.error("Failed to update cart on server.");
          }
        };

        updateCartOnServer();
      } else {
        toast.error("Please log in to add items to your cart.");
      }
    },

    removeItem: (state, action) => {
      const productId = action.payload;
      state.cart = state.cart.filter((item) => item.id !== productId);
      localStorage.setItem("cart", JSON.stringify(state.cart));

      const updateCartOnServer = async () => {
        try {
          const productData = {
            product_id: productId,
            quantity: 1,
            notes: "",
            attributes: [],
          };

          const response = await axios.post(`https:/example.com`, productData, {
            headers: {
              "Content-Type": "application/json",
              "service-id": 14,
              branch: 24,
            },
          });
          console.log("Cart updated on server", response.data);
        } catch (error) {
          console.error("Error updating cart on server:", error);
        }
      };
      updateCartOnServer();
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cart.find((item) => item.id === id);
      if (item) {
        item.quantity = quantity > 0 ? quantity : 1;
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }

      const updateCartOnServer = async () => {
        try {
          const productData = {
            product_id: id,
            quantity: quantity || 1,
            notes: action.payload.notes || "",
            attributes: action.payload.attributes || [],
          };

          const response = await axios.post(`https:/example.com`, productData, {
            headers: {
              "Content-Type": "application/json",
              "service-id": 14,
              branch: 24,
            },
          });
          console.log("Cart updated on server", response.data);
        } catch (error) {
          console.error("Error updating cart on server:", error);
        }
      };
      updateCartOnServer();
    },

    updateTotalItems(state) {
      state.totalItems = state.cart.length;
    },

    updateTotalSave(state) {
      state.totalSave = state.save.length;
    },

    addToSave(state, action) {
      const token = localStorage.getItem("authToken");
      if (token !== null){
        try {
          const existingItem = state.save.find(
            (item) => item.id === action.payload.id
          );
          if (!existingItem) {
            state.save.push(action.payload);
            localStorage.setItem("save", JSON.stringify(state.save));
          }
        } catch (error) {
          console.error("Error saving to localStorage:", error);
        }
      }else{
        toast.error("Please log in to add items to your wishlist.");
      }
      
    },

    removeSave(state, action) {
      state.save = state.save.filter((item) => item.id !== action.payload);
      localStorage.setItem("save", JSON.stringify(state.save));
    },


    addToOrder(state) {
      const orderItems = state.cart.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.final_display_price,
        quantity: item.quantity || 1,
        total: (item.final_display_price * (item.quantity || 1)).toFixed(2),
      }));

      state.order = orderItems;

      const totalAmount = state.order.reduce(
        (total, item) => total + parseFloat(item.total),
        0
      );
      state.totalAmount = totalAmount.toFixed(2);
    },

    removeFromOrder(state, action) {
      state.order = state.order.filter((item) => item.id !== action.payload);
      const totalAmount = state.order.reduce(
        (total, item) => total + parseFloat(item.total),
        0
      );
      state.totalAmount = totalAmount.toFixed(2);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {
  addToCart,
  removeItem,
  addToSave,
  removeSave,
  updateTotalSave,
  addToCompare,
  removeFromCompare,
  addToOrder,
  removeFromOrder,
  updateQuantity,
} = dataSlice.actions;

export const reducer = dataSlice.reducer;
