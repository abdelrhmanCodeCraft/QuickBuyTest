import { configureStore } from "@reduxjs/toolkit";
import { reducer as dataReducer } from "./DataSlice";

const store = configureStore({
  reducer: {
    data: dataReducer, 
  },
});

export default store;
