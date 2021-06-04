import styled from "styled-components";
import { Person, Search, ShoppingCart, Menu } from "@material-ui/icons";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { Link } from "react-router-dom";
const Navbar = ()=> {
    return(
        <div>
            <NavWrapper>
                <NavLeft>
                    <BrandLogo>
                        <Link to="/">
                            <span>Dulgarber</span>
                        </Link> 
                    </BrandLogo>
                </NavLeft>
                <NavMiddle>
                    <Searchbar className="hide-on-small-only">
                        <SearchInput type="text" placeholder="golf tees" />
                        <Search/>
                    </Searchbar>
                </NavMiddle>
                <NavRight className="hide-on-med-and-down">
                        <NavItem >
                            <Link to="/signup">
                                <span className="black-text">Sign Up</span>
                            </Link>
                        </NavItem>
                        <NavItem >
                            <Link to="/signin">
                                <span className="black-text">Sign In</span>
                            </Link> 
                        </NavItem>
                        <NavItem >
                            <ShoppingCart className="large"/>
                            <span>Cart</span>
                        </NavItem>
                </NavRight>
                <NavRight className="hide-on-large-only">
                        <NavItem>
                            <Menu className="large"/>
                            <span>Menu</span>
                        </NavItem>
                </NavRight>
                
            </NavWrapper>
            <div className="modal" id="signup">
                <SignUp/>
            </div>
            <div className="modal" id="signin">
                <SignIn/>
            </div>
        </div>
        
    );
}


const NavWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 15px;
    border-bottom: solid 1px black;
    box-shadow: 0px 1px 3px grey;
    position: sticky;
    background-color: white;
    width: 100vw;
`;

const NavLeft = styled.div`
    flex: 0.3;
    display: flex;
    > img {
        object-fit: contain;
    }
`;

const NavMiddle = styled.div`
    flex: 0.5;
    display: flex;
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
    flex: 0.3;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const NavItem = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    align-items: center;
    margin: 10px;
    :hover {
        font-weight: bold; 
        cursor: pointer;
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