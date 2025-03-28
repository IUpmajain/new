import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const fakeSlice = createSlice({
    name:"product",
    initialState:{
        allProduct:[],
        cart:[],
        isLoading:false,
        isError:false,
        isSuccess:false,
    },
    reducers:{
        add:(state,action)=>{
            return{
                ...state,
                cart:[action.payload, ...state.cart]
            }
        }
    },
    extraReducers:(builer)=>{
        builer
        .addCase(allfetchProduct.pending, (state)=>{
            state.isLoading=true
            state.isError=false
            state.isSuccess=false
        })

        .addCase(allfetchProduct.fulfilled, (state,action)=>{
            state.isSuccess=true
            state.isError=false
            state.isLoading=false
            state.allProduct=action.payload
        })

        .addCase(allfetchProduct.rejected, (state)=>{
            state.isError=true
            state.isSuccess=false
            state.isLoading=false
            state.allProduct=null
        })
        
    },
})

export const {add}=fakeSlice.actions
export default fakeSlice.reducer

export const allfetchProduct = createAsyncThunk("ALL/PRODUCT", async()=>{
    try {
        const response = await fetch("https://fakestoreapi.com/products")
        const data = await response.json()
        // console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
})