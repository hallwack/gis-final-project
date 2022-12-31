import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {},
};

export const routesSlice = createSlice({
  name: "routes",
  initialState,
  reducers: {
    storeRouteData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { storeRouteData } = routesSlice.actions;

export default routesSlice.reducer;
