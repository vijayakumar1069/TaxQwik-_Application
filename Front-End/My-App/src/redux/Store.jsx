import {configureStore } from "@reduxjs/toolkit"
import returnsReducer from "./Slice"

 const store = configureStore({
    reducer: {
      returns: returnsReducer
    }
  });


  export default store;
