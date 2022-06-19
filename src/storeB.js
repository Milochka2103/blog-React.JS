import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./server/slices/auth";
import messageReducer from "./server/slices/message";

const reducer = {
  auth: authReducer,
  message: messageReducer
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
})
export default store;