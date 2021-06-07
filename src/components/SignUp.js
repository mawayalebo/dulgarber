import styled from "styled-components";
import { auth } from "../firebase";
import {  useState } from "react";

import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
const SignUp = () => {

    const [ createUserWithEmailAndPassword, user, loading, error ] = 
    useCreateUserWithEmailAndPassword(auth);

    
    const [person, setPerson ] = useState({email:null, password: null});

    const signUp = ()=>{

        const { email , password } = person;
        createUserWithEmailAndPassword(email, password); 
    }
    const handleChange = (e) =>{
        setPerson({...person,
            [e.target.id]: e.target.value
        });
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        signUp();
    }


    return (  
        <SignUpContainer>
            <SignUpForm>
                { error && <p>{error.message}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="input-field">
                        <input type="text" name="firstName" id="firstName" />
                        <label>First Name</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="lastName" id="lastName" />
                        <label>Last Name</label>
                    </div>
                    <div className="input-field">
                        <input type="email" name="email" id="email" onChange={handleChange}/>
                        <label>Email</label>
                    </div>
                    <div className="input-field">
                        <input type="password" name="password" id="password" onChange={handleChange} />
                        <label>Password</label>
                    </div>
                    <div 
                        className="btn btn-large center black white-text waves-effect waves-light" onClick={handleSubmit}>
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