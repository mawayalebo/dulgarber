import styled  from "styled-components";
import { Favorite } from "@material-ui/icons";
import Currency  from  "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket } from "../app/slices/basketSlice";

const Product = ({product}) => {

    const dispatch = useDispatch();

    const pushToBasket = () => {
        dispatch(addToBasket(product));
    }
    return ( 
           <ProductContainer className="card col s12 m6 l3 hoverable">
               <CardImage className="">
                   <img src={product.image}  alt="" />
               </CardImage>
               <Content className="card-content">
                    <span className="truncate">{product.title}</span>
                    <Currency quantity={product.price * 10} currency="ZAR"/>
                    
               </Content>
               <Bottom>
                    <BusketButton onClick={ pushToBasket }>
                        <span>Add to Cart</span>
                    </BusketButton>
                </Bottom>
           </ProductContainer>
     );
}

const ProductContainer = styled.div`
    width: 450px;

`;

const FavButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CardImage = styled.div`
    display: flex;
    justify-content: center;
    overflow: hidden;
    > img {
        width: 150px !important;
        height: 150px !important;
        object-fit: contain;
    } 
`;

const Bottom = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

`;
const Content = styled.div`
    padding-top: 2px !important;
    padding-bottom: 10px !important;
`;

const BusketButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px 20px 0 0;
    width: 80%;
    background-color: lightgrey;
    cursor: pointer;
`;

export default Product;