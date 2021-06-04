import styled  from "styled-components";


const Product = ({product}) => {
    return ( 
        <ProductContainer className="">
            <ProductTop>
                <img src={product.image} alt="" />
            </ProductTop>
            <ProductMiddle>
                <span className="truncate">{product.title}</span>
            </ProductMiddle>
            

        </ProductContainer>
     );
}

const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 300px;
    border: solid black 1px;
    border-radius: 20px;
    margin-top: 15px;
    z-index: 21;
    background-color: white;

`;

const ProductTop = styled.div`
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    > img {
        height: 50%;
    }
`;
const ProductMiddle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 10px;
    > span {
         font-weight: bold;
         color: black;
    }
`;
export default Product;