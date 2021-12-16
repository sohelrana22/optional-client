import { configureStore } from "@reduxjs/toolkit";
import { OptionalSlice } from "./Slices/Sliices";

export const store = configureStore({
  reducer: {
    Optional: OptionalSlice,
  },
});
