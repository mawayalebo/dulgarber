import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import nike_max from "./assets/nikemax.jpg";
import nike_black from "./assets/nike_black.jpg";
import nike_wings from "./assets/wings.jpg";

const Banner = () => {
    return ( 
       
        <Carousel 
            autoPlay={true} 
            infiniteLoop={true} 
            showThumbs={false}
            interval={10000}
            showArrows={false}
            showStatus={false}
            showIndicators={false}
            className="banner"
        >
            <div>
                <img src={nike_max} className="responsive-img" height="500"/>
            </div>
            <div>
                <img src={nike_black} className="responsive-img" />
            </div>
            <div>
                <img src={nike_wings} className="responsive-img" />
            </div>
        </Carousel>
        
     );
}


export default Banner;