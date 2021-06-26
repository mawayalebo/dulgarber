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
        removeFromBasket:(state, action)=>{
            const unWantedItem = state.items.findIndex((item)=>{
                return item.id == action.payload.id ;
            });

            const newBasketItems = [...state.items];

            if(unWantedItem >= 0){
                newBasketItems.splice(unWantedItem, 1);
            }

            state.items = newBasketItems;

            /*const unWantedItem = action.payload.id;

            const newBasketItems = state.items.filter((item)=>{
                return item.id !== unWantedItem
            });

            state.items = newBasketItems;*/
        }
    }
});

export const { addToBasket , removeFromBasket } = basketSlice.actions;

export const selectBasket = (state) => state.basket.items;

export const selectBasketTotal = (state)=>{
    return state.basket.items.reduce((total, item)=>{
        return total + item.price;
    }, 0);
};

export const allTotal = state => selectBasketTotal + 100;

export default basketSlice.reducer;   