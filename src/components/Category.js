import styled from "styled-components";
import { useState, useEffect } from "react";

const Category = () => {
    const [ category, setCategory ] = useState("");
    useEffect( async() => {
        const response = await fetch("https://fakestoreapi.com/products/categories")
        .then(res => res.json())
        .then(
            (data)=>{
                setCategory(data);
            }
        );
        console.log(category);
        return response;
    },[]);
    console.log(category);
    return ( 
        <Tape>
            {
                category && category.map(item=>{
                   return( <span className="white-text">{item}</span>)
                })
            }
        </Tape>
     );
}

const Tape = styled.div`
    background-color: black;
    display: flex;
    align-items: center;
    width: 100vw;
    overflow-x: scroll;
    ::-webkit-scrollbar{
        display: none;
    }
    > span {
        color: white;
        margin: 10px;
        :hover{
            font-weight: bold;
            cursor: pointer;
        }
    }
`;


export default Category;