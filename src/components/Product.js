import styled  from "styled-components";
import { Favorite } from "@material-ui/icons";
const Product = ({product}) => {
    return ( 
           <ProductContainer className="card col s12 m6 l3 hoverable">
               <CardImage className="card-image">
                   <img src={product.image}  className="responsive-img"alt="" />
                   <div className="btn-floating grey btn-medium halfway-fab right black-text">
                    <Favorite/>
                    </div>
               </CardImage>
               
               <div className="card-content">
                    <span className="truncate card-title">{product.title}</span>
            
               </div>
           </ProductContainer>
     );
}

const ProductContainer = styled.div`
 width: 450px;
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

const CardImage = styled.div`
    padding: 20px;
    > img {
        height: 150px;

    }
`;
export default Product;