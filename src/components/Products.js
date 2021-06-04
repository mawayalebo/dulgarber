import { useState, useEffect } from "react";
import styled from "styled-components";
import Product from "./Product";


const Products = () => {
    const [ products, setProducts ] = useState([]);


    useEffect(async()=>{

         const response = await fetch("https://fakestoreapi.com/products").then(
             res=> res.json()
         );
        setProducts(response);

    },[setProducts, products]);
    return ( 
        <ProductsContainer className="">
            {
                products && products.map((product)=>{
                    console.log(product.id ,product);
                    return(
                        <Product key={product.id} product={product}/>
                    )
                })
                
            }
        </ProductsContainer>
     );
}

const ProductsContainer = styled.div`
    padding: 20px;
    display: flex;
    flex-flow: column wrap;
    flex-direction: row;
    justify-content: space-evenly;
`;
export default Products;