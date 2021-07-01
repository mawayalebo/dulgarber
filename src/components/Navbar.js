import styled from "styled-components";
import { Person, Search, ShoppingCart, Menu } from "@material-ui/icons";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { Link } from "react-router-dom";
import SideNav from "./SideNav";
import { Hidden, Modal } from "@material-ui/core";
import { auth, provider } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectBasket } from "../app/slices/basketSlice";
import Category from "./Category";


const Navbar = ()=> {
    const signIn = (e) =>{
        e.preventDefault();
        auth.signInWithPopup(provider).catch((err)=>{
            alert(err.message);
        });
    }

    const [ user, loading, error ] = useAuthState(auth);

    const items = useSelector(selectBasket);

    return(
        <div>
            <NavWrapper>
                <NavTop>
                    <NavLeft>
                        <BrandLogo>
                            <Link to="/">
                                <span>Dulgarber</span>
                            </Link> 
                        </BrandLogo>
                    </NavLeft>
                    <NavMiddle className="hide-on-med-and-down">
                        {
                            user && 
                            <Profile>
                                <div className="btn btn-floating btn-medium">
                                    <img src={user.photoURL} />
                                </div>
                                <span>{user.displayName}</span>
                            </Profile>
                        }
                        {
                            loading && 
                            <NavItem>
                                <span>fetching ...</span>
                            </NavItem>
                        }
                    </NavMiddle>
                    <NavRight className="hide-on-med-and-down">
                        
                        {
                            !user && 
                            <NavItem onClick={signIn}>
                                <Person className="large"/>
                                <span>Use Google Account</span>
                            </NavItem>
                        }
                        {
                            user && 
                            <NavItem>
                                <span onClick={(e)=>{ auth.signOut() }}>Sign out</span>
                            </NavItem>
                        }
                        
                        <NavItem >
                            <Link to="/cart">
                                <ShoppingCart />
                                {
                                    items.length == 0 ?
                                    <span>Cart</span>: <span></span>
                                }
                                
                                {
                                    items.length == 1 ?
                                    <span>{items.length} Item</span>: <span></span>
                                }
                                {
                                    items.length > 1 ?
                                    <span>{items.length} Items</span>: <span></span>
                                }
                            </Link>
                        </NavItem>
                    </NavRight>
                    <NavRight className="hide-on-large-only">
                        <NavItem  className="hide-on-large-only" >
                            <Menu className="large sidenav-trigger" data-target="mobileSide"/>
                            <span>Menu</span>
                        </NavItem>
                    </NavRight>
                </NavTop>
                <NavBottom>
                    
                </NavBottom>
            </NavWrapper>
            { selectBasket }
            <div className="sidenav" id="mobileSide">
                <SideNav signIn={signIn}/>
            </div>
        </div>
        
    );
}


const NavWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    position: fixed;
    z-index: 3;
    top: 0vh;
    
`;
const NavBottom = styled.div`
    display: flex;
    align-items: center;
`;
const NavTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 15px;
    box-shadow: 0px 1px 3px grey;
    position: sticky;
    background-color: white;

`;
const NavLeft = styled.div`
    flex: 0.3;
    display: flex;
    > img {
        object-fit: contain;
    }
`;

const NavMiddle = styled.div`
    flex: 0.4;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
`;

const BrandLogo = styled.div`
    display: flex;
    align-items: content;
    > * > span {
        font-size: 40px;
        margin: 0;
        font-weight: bold;
        color: black;
    }
`;

const NavRight = styled.div`
    flex: 0.5;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const NavItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    :hover {
        font-weight: bold; 
        cursor: pointer;
    }
    > a {
        display: flex;
        flex-direction: column; 
        align-items: center;
        margin: 10px;
    }
    
`;
const Profile = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 10px;
    :hover {
        font-weight: bold; 
        cursor: pointer;
    }
    > div {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px;
        > img {
            width: 50px;
            height: 50px;
        }
    }
`;

const Searchbar = styled.div`
    display: flex;
    align-items: center;
    padding: 0 20px;
    width: 70%;
    background-color: #e7e7e7;
    border-radius: 20px;
`;

const SearchInput = styled.input`
    margin-left: 20px;
    border-bottom: none !important;
    :focus{
        border-bottom: none !important; 
        box-shadow: none !important;
    }
`;





export default Navbar;