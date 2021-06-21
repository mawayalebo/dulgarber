import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    items: []
};

const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers:{
        addToBasket:(state, action)=>{
            initialState.items = [...state, action.payload];
        },
        removefromBasket:(state, action)=>{
            console.log("nothing");
        }
    }
});

export const { addToBasket , removefromBasket } = basketSlice.actions;

export const selectBasket =() => initialState.items.value;

export default basketSlice.reducer;