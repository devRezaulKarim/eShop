import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

interface InitialState {
  isLoading: boolean;
  products: any;
  error: any;
}

const initialState: InitialState = {
  isLoading: false,
  products: [],
  error: "",
};

export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
  const response = await fetch(
    "https://rezauls-json-server.vercel.app/clothings"
  );
  return await response.json();
});

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false;
      console.log(action.payload);
      state.error = action.payload;
    });
  },
});

export default productSlice.reducer;
