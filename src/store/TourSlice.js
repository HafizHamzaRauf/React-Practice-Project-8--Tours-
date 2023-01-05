import { createSlice } from "@reduxjs/toolkit";
import { url } from "../libs/config";
const initialState = { tours: [], loadingTours: null, error: false };
const TourSlice = createSlice({
  name: "tours",
  initialState,
  reducers: {
    setTours(state, action) {
      state.tours = action.payload.map((item) => {
        return { ...item, isFullDescription: false };
      });
    },
    setLoadingTours(state, action) {
      state.loadingTours = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    removeTour(state, action) {
      const id = action.payload;
      state.tours = state.tours.filter((item) => item.id !== id);
    },
    setIsFullDescription(state, action) {
      const id = action.payload;
      const tour = state.tours.find((item) => {
        return id === item.id;
      });
      tour.isFullDescription = !tour.isFullDescription;
    },
  },
});

export const TourSliceActions = TourSlice.actions;
export const TourSliceReducer = TourSlice.reducer;

export const fetchTours = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error();
      }
      const data = await response.json();

      return data;
    };
    try {
      dispatch(TourSliceActions.setLoadingTours(true));
      const data = await fetchData();
      dispatch(TourSliceActions.setTours(data));
    } catch (err) {
      dispatch(TourSliceActions.setError(true));
    } finally {
      dispatch(TourSliceActions.setLoadingTours(false));
    }
  };
};
