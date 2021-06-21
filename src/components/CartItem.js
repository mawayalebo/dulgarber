import styled from "styled-components";

const CartItem = ({title, description, price}) => {
    return ( 
        <ItemContainer>
            
        </ItemContainer>
     );
}
 

const ItemContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: black;
    border-radius: 20px;
    box-shadow: 1px 1px black 1px;
`;
export default CartItem;