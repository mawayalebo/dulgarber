 
import styled from "styled-components";
import { useEffect, useState } from "react";
import Product from "./Product";
import { useSelector } from "react-redux";
import { selectBasket, selectBasketTotal,  } from "../app/slices/basketSlice";
import CartItem from "./CartItem";
import Currency from "react-currency-formatter";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import yoco from "../yoco.config";
import { Link } from "react-router-dom";
const Cart = () => {

    const products = useSelector(selectBasket);   
    const total = useSelector(selectBasketTotal); 
    const [user]  = useAuthState(auth);    
    
    
    return ( 
        <CartContainer>
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
                {
                    products.length > 0 &&
                    <>
                        <div className="container black white-text">
                            <span>{ products.length } items </span>
                            <span>
                                Total Amount: <Currency quantity={total} currency="ZAR"/>
                            </span>
                        </div>
                        <div className="row">
                            {
                                user?(
                                    <div 
                                        className="btn btn-medium white black-text waves-effect waves-dark "
                                        
                                    >
                                        <Link to="/checkout">
                                            procced to checkout
                                        </Link> 
                                    </div>
                                ):(
                                    <div disabled className="btn btn-medium white black-text waves-effect waves-dark ">
                                        sign in to procced to checkout
                                    </div>
                                )
                            }
                        </div>
                    </>
                }
                
            </CartFooter>
        </CartContainer>
     );
}
const CartContainer = styled.div`
    margin-top: 80px;
`;
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
    z-index: 1;
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