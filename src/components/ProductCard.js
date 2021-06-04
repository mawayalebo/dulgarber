import styled from "styled-components";


const ProductCard = () => {
    return ( 
        <CardContainer>
            <CardTop>
                <img src={}/>
            </CardTop>
        </CardContainer>
     );
}
 
const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const cardTop = styled.div`
    display: flex;
    height: 50%;
`;
export default ProductCard;