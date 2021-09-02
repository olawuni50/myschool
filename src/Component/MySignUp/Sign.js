import React, {useState} from 'react'
import {useHistory} from "react-router-dom"
import { Button } from "../ButtonElement"
import { Container, FormWrap, FormContent, FormLabel, FormInput, Form, 
FormBtn, FormH1, FormAll, FormAll1, FormInputt } from './SignElement'
import {Link} from "react-router-dom"

const Sign = () => {
    
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    const history = useHistory();
    

    const handleSubmit = (e)=>{
        e.preventDefault();
        

        if(password !== confirmPassword){
            alert("Password do to match")
            return
        }
       
        history.push("/login")
    }

    return (
        <Container>
            <FormWrap>
                <FormContent data-aos="fade-right">
                <Form onSubmit={handleSubmit}>
                    <FormH1> Register to get started</FormH1>

                    <FormAll1>
                    <FormAll>
                <FormLabel>First Name</FormLabel>
                <FormInput type="text" placeholder="Enter First Name"/>
                </FormAll>


                <FormAll>
                <FormLabel>Last Name</FormLabel>
                <FormInput type="text" placeholder="Enter Last Name" required
                />
                </FormAll>
                
                <FormAll>
                <FormLabel>Email</FormLabel>
                <FormInput type="email" placeholder="Enter Email" required
               />
                </FormAll>

                <FormAll>
                <FormLabel>Class</FormLabel>
                <FormInput type="text" placeholder="Enter Class" required
                />
                </FormAll>

                <FormAll>
                <FormLabel>Password</FormLabel>
                <FormInput type="password" placeholder="Enter Password" required
               />
                </FormAll>


                <FormAll>
                <FormLabel>Retype Password</FormLabel>
                <FormInput type="password" placeholder="Retype Password" required
                />
                </FormAll>


                <FormAll>
             <FormLabel><FormInputt type="checkbox" required 
                /> <span style={{fontSize:14}}>I agree to the Terms and Conditions</span></FormLabel>
                <FormLabel>Already have an account? <Link to="/login"><span style={{textDecoration:"none"}}>Login</span></Link></FormLabel>
                </FormAll>
                </FormAll1>
                <FormBtn>
                    <Button primary>Sign Up</Button>
                </FormBtn>
                
                </Form>
                </FormContent>
            </FormWrap>
        </Container>
    )
}

export default Sign
