import { createSlice } from "@reduxjs/toolkit";
const IntialState = {
    shippingAddress:[]
}
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        addAdress : (state, action)=>{

        },
        editAddress: (state, action)=>{

        },
        removeAddress: (state, action)=>{

        }
    }

});


