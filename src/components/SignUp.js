import styled from "styled-components";
import Navbar from "./Navbar";

const SignUp = () => {
    return (  
        <SignUpContainer>
            <SignUpForm>
                <form>
                    <div className="input-field">
                        <input type="text" name="name" id="" />
                        <label>First Name</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="name" id="" />
                        <label>Last Name</label>
                    </div>
                    <div className="input-field">
                        <input type="email" name="name" id="" />
                        <label>Email</label>
                    </div>
                    <div className="input-field">
                        <input type="password" name="name" id="" />
                        <label>Password</label>
                    </div>
                    <div className="btn btn-large center black white-text waves-effect waves-light">SignUp</div>
                </form>
            </SignUpForm>
        </SignUpContainer>
        
    );
}


const SignUpContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    margin-top: 50px;
`;

const SignUpForm = styled.div`
    background-color: lightgrey;
    width: 50vw;
    > form {
        padding: 50px;
    }
`;
export default SignUp;