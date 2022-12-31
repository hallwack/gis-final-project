import { configureStore } from "@reduxjs/toolkit";
import routesSlice from "../features/routes/routesSlice";
import sheltersSlice from "../features/shelters/sheltersSlice";

export const store = configureStore({
  reducer: {
    shelters: sheltersSlice,
    routes: routesSlice,
  },
});
