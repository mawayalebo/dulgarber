import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { ShoppingCart } from "@material-ui/icons";

const SideNav = ({signIn}) => {

    const [user] = useAuthState(auth);

    return ( 
        <SidenavContainer className="hide-on-large-only" >
            {
                user && 
                <BlackButton onClick={()=>{auth.signOut()}}
                    className="white btn btn-large waves-effect waves-dark black-text sidenav-close"
                >
                    Sign out
                </BlackButton>
            }
            {
                !user && 
                <BlackButton onClick={(e)=>{signIn(e)}}
                    className="white btn btn-large waves-effect waves-dark black-text sidenav-close"
                >
                    Account
                </BlackButton>
            }
            
                <BlackButton 
                    className="btn btn-large waves-effect waves-dark white black-text sidenav-close"
                >
                    <Link to="/cart" className="cartLink">
                        <ShoppingCart/>
                        <span>Cart</span>
                    </Link>
                    
                </BlackButton>
            
            
        </SidenavContainer>
     );
}


const SidenavContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 20px;
`;

const BlackButton = styled.div`
    text-decoration: none;
    text-transform: none;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    .cartLink{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        text-decoration: none;
        text-transform: none;
        > span {
            text-decoration: none;
            text-transform: none;
        }
        
    }
`;
export default SideNav;