import { createSlice } from "@reduxjs/toolkit";

const basketStore=createSlice({
    name:'basket',
    initialState:{
        basketItem:false
    },
    reducers:{
        basketToggle:(state,action)=>{
            state.basketItem=!state.basketItem
        }
    }

})

export const {basketToggle}=basketStore.actions

export default basketStore.reducer