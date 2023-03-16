import  { createSlice } from '@reduxjs/toolkit'
 
export const cartSilice=createSlice({
    name:'cart',
    initialState:{
        cartItems:[],
        totalCount:0,
        totalAmount:0
    },
    reducers:{
        addItem:(state,action)=>{
            const newItem=action.payload
            const existingItem=state.cartItems.find(item=>item.id==newItem.id)
            state.totalCount++

            if(!existingItem){
                state.cartItems.push({
                    id:newItem.id,
                    title:newItem.title,
                    image01:newItem.image01,
                    price:newItem.price,
                    quantity:1,
                    totalPrice:newItem.price
                })
            }
            else{
                existingItem.quantity++
                existingItem.totalPrice=Number(existingItem.totalPrice)+Number(newItem.price)
            }
            state.totalAmount=state.cartItems.reduce((total,item)=>(
                total+Number(item.price)*Number(item.quantity)
            ),0)
        },
        removeItem:(state,action)=>{
            const id=action.payload
            const existingItems=state.cartItems.find(item=>item.id==id)
            state.totalCount--

            if(existingItems.quantity==1){
                state.cartItems=state.cartItems.filter(item=>item.id!==id)
            }
            else{
                existingItems.quantity--
                existingItems.totalPrice=Number(existingItems.totalPrice)-Number(existingItems.price)
            }

            state.totalAmount=state.cartItems.reduce((total,item)=>(
                total+Number(item.price)*Number(item.quantity)
                
            ),0)
        },
        removeBox:(state,action)=>{
            const id=action.payload
            const existingItemss=state.cartItems.find((item)=>item.id===id)

            if(existingItemss){
                state.cartItems=state.cartItems.filter((item)=>item.id!==id)
                state.totalCount=state.totalCount-existingItemss.quantity
            }
            state.totalAmount=state.cartItems.reduce((total,item)=>(
                total+Number(item.price)*Number(item.quantity)
                
                
            ),0)
        }
    }

})

export const {addItem,removeItem,removeBox}=cartSilice.actions

export default cartSilice.reducer