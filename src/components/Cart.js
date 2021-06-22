 
import styled from "styled-components";
import { useEffect, useState } from "react";
import Product from "./Product";
import { useSelector } from "react-redux";
import { selectBasket, selectBasketTotal } from "../app/slices/basketSlice";
import CartItem from "./CartItem";
import Currency from "react-currency-formatter";

const Cart = () => {
    const products = useSelector(selectBasket);
    const total = useSelector(selectBasketTotal);                                                           
    return ( 
        <div className="container">
            <CartTop>
                {
                    products.length <= 0 && 
                    <h1 classname="center">NO ITEMS IN BASKET</h1>
                }
                {
                    products.length > 0 && 
                    <h1 classname="center">Your Shopping Basket</h1>
                }
            </CartTop>
            <CartFeed className="row">
                {
                    products.map((item)=>{
                        return(
                            <CartItem item={item}/>
                        )
                        
                    })
                }
            </CartFeed>
            <CartFooter>
                <div className="container">
                    <span>
                        <Currency quantity={total} currency="ZAR"/>
                    </span>
                </div>
            </CartFooter>
        </div>
     );
}

const CartFeed = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const CartTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: solid grey 1px;
`;
const CartFooter = styled.div`
`;




export default Cart;                                                                                                                                                                                                                                                           