import { configureStore } from "@reduxjs/toolkit";
import { TourSliceReducer } from "./TourSlice";
const store = configureStore({
  reducer: { tours: TourSliceReducer },
});

export default store;
