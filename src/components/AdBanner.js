import styled from "styled-components";
import nike_black from "./assets/nike_black.jpg";
const AdBanner = () => {
    return ( 
        <AdContainer>
            <img src={nike_black} />
        </AdContainer>
     );
}
 

const AdContainer = styled.div`
    >img {
        width: 100vw;
    }
    > div.mrSmall{
        position: absolute;
        background: transparent;
        background: linear-gradient(0deg, white 60%, rgba(0,0,0,0) 100%);
        width: 100%;
        height: 100%;
    }
    > div.mrMed{
        position: absolute;
        background: transparent;
        background: linear-gradient(0deg, white 5%, rgba(0,0,0,0) 100%);
        width: 100%;
        height: 100%;
    }
    > div.mrLarge{
        position: absolute;
        background: transparent;
        background: linear-gradient(0deg, white 5%, rgba(0,0,0,0) 100%);
        width: 100%;
        height: 100%;
    }
`;


export default AdBanner;