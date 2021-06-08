import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAuthState } from "react-firebase-hooks/auth";


const SideNav = ({display}) => {
    const getDisplay = (display)=>{
        var status = "none";
        display? (status = "block"):(status ="none");
        return(status);
    }
    const SidenavContainer = styled.div`
        display: ${getDisplay(display)};
        position: absolute;
        top: 0px;
        height: 100vh;
        width: 100vw;
        background-color: rgba(0, 0, 0, 0.4);
        z-index: 50;
    `;
    
    return ( 
        <SidenavContainer className="container hide-on-large-only" onClick={()=>{getDisplay(true)}}>
            <NavContainer>
                <ul>
                    <li>cart</li>
                    <li>sign up</li>
                </ul>
            </NavContainer>
        </SidenavContainer>
     );
}



const NavContainer = styled.div`
    background-color: white;
    width: 40vw;
    height: 100vh;

`;
export default SideNav;