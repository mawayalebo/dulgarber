import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    items: []
};

const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers:{
        addToBasket:(state, action)=>{
            state.items = [...state.items, action.payload];
        },
        removefromBasket:(state, action)=>{

        }
    }
});

export const { addToBasket , removefromBasket } = basketSlice.actions;

export const selectBasket = (state) => state.basket.items;

export const selectBasketTotal = (state)=>{
    return state.basket.items.reduce((total, item)=>{
        return total + item.price;
    }, 0);
};


export default basketSlice.reducer;   