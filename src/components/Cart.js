 
import styled from "styled-components";
import { useEffect, useState } from "react";
import Product from "./Product";
import { useSelector } from "react-redux";
import { selectBasket, selectBasketTotal,  } from "../app/slices/basketSlice";
import CartItem from "./CartItem";
import Currency from "react-currency-formatter";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
const Cart = () => {

    const products = useSelector(selectBasket);   
    const total = useSelector(selectBasketTotal); 
    const [ loading, user, error ]  = useAuthState(auth);    

    return ( 
        <>
            <CartTop className="container">
                {
                    products.length <= 0 && 
                    <h1 classname="center">NO ITEMS IN BASKET</h1>
                }
                {
                    products.length > 0 && 
                    <h1 classname="center">Your Shopping Basket</h1>
                }
            </CartTop>
            <CartFeed className="row container">
                {
                    products.map((item)=>{
                        return(
                            <CartItem item={item}/>
                        )
                        
                    })
                }
            </CartFeed>
            <CartFooter>
                <div className="container black white-text">
                    <span>{ products.length } items </span>
                    <span>
                        Total Amount: <Currency quantity={total} currency="ZAR"/>
                    </span>
                </div>
                <div className="row">
                    <div 
                        disabled={
                            user?(
                                false
                            ):(
                                true
                            )
                        }
                        className="btn white black-text btn-medium waves-effect waves-dark"
                    >
                        Procced to checkout
                    </div>


                </div>
            </CartFooter>
        </>
     );
}

const CartFeed = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 140px;
`;

const CartTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: solid grey 1px;
`;
const CartFooter = styled.div`
    position: fixed;
    width: 100%;
    background-color: black;
    z-index: 60;
    top: 80vh;
    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        > span {
            margin: 10px;
        }
    }
`;




export default Cart;                                                                                                                                                                                                                                                           