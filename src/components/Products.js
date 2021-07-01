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
    },[]);
    return ( 
        <ProductsContainer className="row container">
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
    margin-top: -80px;
`;
export default Products;