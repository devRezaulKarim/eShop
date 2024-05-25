import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "@/redux/slices/productsSlice";

export const store = () => {
  return configureStore({
    reducer: {
      products: productsReducer,
    },
  });
};

export type AppStore = ReturnType<typeof store>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
