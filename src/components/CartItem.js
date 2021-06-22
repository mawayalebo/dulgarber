import { Close } from "@material-ui/icons";
import styled from "styled-components";

const CartItem = ({item}) => {
    return ( 
        <ItemContainer className="card col s12">
            <ItemImage>
                <img src={item.image}/>
            </ItemImage>
            <ItemContent>
                <ItemTitle>
                    <span className="activator">{item.title}</span>
                </ItemTitle>
            </ItemContent>  
            <CloseButton className="btn-floating halfway-fab black white-text waves-effect waves-light">
                <Close/>
            </CloseButton>
            <div className="card-reveal black white-text">
                <div className="row">
                    <div className="container">
                        <span className="card-title">{item.title}</span>
                        <span>{item.description}</span>
                    </div>
                </div>
            </div>
        </ItemContainer>
     );
}
 

const ItemContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: white;
    margin-top: 10px;
    justify-content: space-evenly;
    position: relative;
`;
const ItemImage = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    > img {
        width: 150px !important;
        height: 150px !important;
        object-fit: contain;
    }

`;
const ItemContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    padding: 10px;
    width: 100%;
`;

const ItemTitle = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    cursor: pointer;
    > span {
        font-weight: bold;
    }
`;
const CloseButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default CartItem;