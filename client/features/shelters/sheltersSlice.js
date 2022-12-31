import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {},
};

export const sheltersSlice = createSlice({
  name: "shelters",
  initialState,
  reducers: {
    storeShelterData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { storeShelterData } = sheltersSlice.actions;

export default sheltersSlice.reducer;
