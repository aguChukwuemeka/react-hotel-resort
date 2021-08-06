import { configureStore } from "@reduxjs/toolkit";
import reducer from "../reducers";

export default function configureStoresFunc() {
  return configureStore({
    reducer,
  });
}
