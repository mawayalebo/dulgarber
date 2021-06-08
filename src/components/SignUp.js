import styled from "styled-components";
import { auth } from "../firebase";
import {  useState } from "react";
import { Redirect } from "react-router-dom";

import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
const SignUp = () => {

    


    return (  
        <SignUpContainer>
            <SignUpForm>
                <form >
                    <div className="input-field">
                        <input type="text" name="firstName" id="firstName" />
                        <label>First Name</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="lastName" id="lastName" />
                        <label>Last Name</label>
                    </div>
                    <div className="input-field">
                        <input type="email" name="email" id="email" />
                        <label>Email</label>
                    </div>
                    <div className="input-field">
                        <input type="password" name="password" id="password"  />
                        <label>Password</label>
                    </div>
                    <div 
                        className="btn btn-large center black white-text waves-effect waves-light" >
                        SignUp
                    </div>
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