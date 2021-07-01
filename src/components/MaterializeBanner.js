import styled from "styled-components"

const MBanner = () => {
    return ( 
        <div class="carousel carousel-slider">
            <div class="carousel-item red white-text">
                <h2>First Panel</h2>
                <p class="white-text">This is your first panel</p>
            </div>
            <div class="carousel-item amber white-text" >
                <h2>Second Panel</h2>
                <p class="white-text">This is your second panel</p>
            </div>
            <div class="carousel-item green white-text" >
                <h2>Third Panel</h2>
                <p class="white-text">This is your third panel</p>
            </div>
            <div class="carousel-item blue white-text" >
                <h2>Fourth Panel</h2>
                <p class="white-text">This is your fourth panel</p>
            </div>
        </div>
     );
}
 
export default MBanner;