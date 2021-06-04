import styled from "styled-components";
const SignIn = () => {
    return ( 
        <SignInContainer>
             <SignInForm>
                <form>
                    <div className="input-field">
                        <input type="email" name="name" id="" />
                        <label>Email</label>
                    </div>
                    <div className="input-field">
                        <input type="password" name="name" id="" />
                        <label>Password</label>
                    </div>
                    <div className="btn btn-large center black white-text waves-effect waves-light">SignIn</div>
                </form>
            </SignInForm>
        </SignInContainer>
     );
}

const SignInContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    margin-top: 50px;
`;

const SignInForm = styled.div`
    background-color: lightgrey;
    width: 50vw;
    > form {
        padding: 50px;
    }
`;
export default SignIn;