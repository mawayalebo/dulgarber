import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import nike_max from "./assets/nikemax.jpg";
import nike_black from "./assets/nike_black.jpg";
import nike_wings from "./assets/wings.jpg";

const Banner = () => {
    return ( 
        <>
            <BannerContainer className="hide-on-med-and-down">
                <Carousel className="hide-on-med-and-down"
                    autoPlay={true} 
                    infiniteLoop={true} 
                    showThumbs={false}
                    interval={10000}
                    showArrows={false}
                    showStatus={false}
                    showIndicators={false}
                >
                    <div>
                        <img src={nike_max} />
                    </div>
                    <div>
                        <img src={nike_black} />
                    </div>
                    <div>
                        <img src={nike_wings} />
                    </div>
                </Carousel>
            </BannerContainer>
        </>
        
     );
}
const BannerContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    border-radius: 0 0 50px 50px;
    overflow: hidden;
`;
export default Banner;