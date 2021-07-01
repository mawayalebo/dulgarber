import styled from "styled-components";
import nike_black from "./assets/nike_black.jpg";
const AdBanner = () => {
    return ( 
        <AdContainer>
            <div className="hide-on-med-and-up mrSmall" ></div>
            <div className="hide-on-small-and-large mrMed" ></div>
            <div className="hide-on-med-and-down mrLarge"></div>
            <img src={nike_black} />
        </AdContainer>
     );
}
 

const AdContainer = styled.div`
    margin-top: 80px;
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
        background: linear-gradient(0deg, white 35%, rgba(0,0,0,0) 100%);
        width: 100%;
        height: 100%;
    }
    > div.mrLarge{
        position: absolute;
        background: transparent;
        background: linear-gradient(0deg, white 20%, rgba(0,0,0,0) 100%);
        width: 100%;
        height: 100%;
    }
`;


export default AdBanner;