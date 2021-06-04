import styled from "styled-components";
import nike_max from "./assets/nikemax.jpg";
import nike_black from "./assets/nike_black.jpg";
import nike_wings from "./assets/wings.jpg";
const Slide = ({ads}) => {
    return ( 
        <Carousel>
            <CarouselItem>
                <img src={nike_max} alt="" />
            </CarouselItem>
            <CarouselItem>
                <img src={nike_black} alt="" />
            </CarouselItem>
            <CarouselItem>
                <img src={nike_wings} alt="" />
            </CarouselItem>
            
        </Carousel>
     );
}

const Carousel = styled.div`
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    padding: 5px 0px;
    ::-webkit-scrollbar{
        display: none;
    }
`;

const CarouselItem = styled.div`
    margin-top: 110px;
    display: flex;
    border-radius: 20px;
    margin-right: 10px;
    position: "relative";

    > img {
        border-radius: 20px;
        width: 95vw;
        height: 55vh;
    }

`;


export default Slide;