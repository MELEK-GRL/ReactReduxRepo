import { configureStore } from "@reduxjs/toolkit";
import cartSliceStore from './cartSliceStore'
import basketStore from "./basketStore";


const store=configureStore({
    reducer:{
       cart:cartSliceStore,
       baskets:basketStore,
      

    }
})

export default store