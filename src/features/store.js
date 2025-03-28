import { configureStore } from "@reduxjs/toolkit";
import fakeReducer from "./fake/fakeSlice"

const store = configureStore({
    reducer:{
            product:fakeReducer,
    }
})

export default store