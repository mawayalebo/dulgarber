 
import styled from "styled-components";
import { useEffect, useState } from "react";
import Product from "./Product";
import { useSelector } from "react-redux";
import { selectBasket } from "../app/slices/basketSlice";

const Cart = () => {
    const products = useSelector(selectBasket);
                                                                      
    return ( 
        <div className="container">
            <CartTop>
                {
                    products.length <= 0 && 
                    <h1 classname="center">NO ITEMS IN BASKET</h1>
                }
            </CartTop>
            <CartFeed>
                

            </CartFeed>
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




export default Cart;                                                                                                                                                                                                                                                           