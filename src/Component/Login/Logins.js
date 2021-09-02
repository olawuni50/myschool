import React from 'react'
import { Button } from '../ButtonElement'
import {useHistory} from "react-router-dom"
import {Container, FormWrap, FormContent, Form, FormLabel, FormInput,
FormBtn} from "./LoginElement"



const Logins = () => {
    const history = useHistory()
    
    const handleLogin = ()=>{
        history.push("/")
    }

    return (
        <Container>
            <FormWrap>
            <FormContent data-aos="fade-right">
                <Form onSubmit={handleLogin}>
                    <FormLabel>Email</FormLabel>
                    <FormInput type="email" placeholder="Enter Email" required/>

                    <FormLabel>Enter Password</FormLabel>
                    <FormInput type="password" placeholder="Enter Password" required/>
                    
                    <FormBtn>
                        <Button primary>Log In</Button>
                    </FormBtn>
                </Form>
            </FormContent>
            </FormWrap>
        </Container>
    )
}

export default Logins
