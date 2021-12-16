import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("users/fetchByIdStatus", async () => {
  const response = fetch('url')
  return response.data;
});
