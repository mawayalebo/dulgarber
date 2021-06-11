 
import styled from "styled-components";
import { useEffect, useState } from "react";
import Product from "./Product";

const Cart = ({}) => {
    const [ cartItems, setCartItems ] = useState(null);
    useEffect(async() => {
        const response = await fetch("https://fakestoreapi.com/carts/5")
        .then(results => results.json())
        .then((data)=>{
            setCartItems(data);
        })
        return response;
    }, [])   
    console.log("this is cart",cartItems);                                                                    
    return ( 
        <div className="container">
            {
                cartItems && cartItems.products.map(product => {
                    <CardContainer>
                        <CardImage>
                            <img src={product.image}/>
                        </CardImage>
                        <CardContent>
                            <h3>{product.titile}</h3>
                            <p>{product.description}</p>
                        </CardContent>
                    </CardContainer>
                })
            }

        </div>
     );
}


const CardContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: whitesmoke;
    box-shadow: black 4px 2px 4px;
    border-radius: 20px;

`;
const CardImage = styled.div``;
const CardContent = styled.div``;

export default Cart;                                                                                                                                                                                                                                                           