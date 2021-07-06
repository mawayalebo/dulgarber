import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { ShoppingCart } from "@material-ui/icons";
import { selectBasket } from "../app/slices/basketSlice";
import { useSelector } from "react-redux";

const SideNav = ({signIn}) => {

    const [user] = useAuthState(auth);
    const basketItems = useSelector(selectBasket);
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
            {
                user && 
                <BlackButton onClick={(e)=>{signIn(e)}}
                    className="white btn btn-large waves-effect waves-dark black-text sidenav-close"
                >
                    <div className="btn-floating user-avatar">
                        <img src={user.photoURL}/>
                    </div>
                    <span>{user.email}</span>
                </BlackButton>

            }
            
            
            
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
    > div.user-avatar {
        display: flex;
        justify-content: center;
        > img {
            object-fit: contain;
        }
    }
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