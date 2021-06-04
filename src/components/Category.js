import styled from "styled-components";

const Category = () => {
    return ( 
        <Tape>
            <span>Male</span>
            <span>Female</span>
            <span>Accessories</span>
            <span>Kids</span>
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