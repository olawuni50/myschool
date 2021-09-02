import React, {useState} from 'react'
import { Button } from "../ButtonElement"
import { Container, FormWrap, FormContent, FormLabel, FormInput, Form, 
FormBtn, FormH1, FormAll, FormAll1, FormInputt } from './PayFormElement'
// import {Link} from "react-router-dom"
import {PaystackButton} from 'react-paystack'


const amount= 25000000
const public_key = "pk_test_add8b94e537d2ef2dcd09abc4c017844a3c8a8a1"

const Sign = () => {    
    
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [mail, setMail] = useState("")

    
const componentProps ={
    mail, amount, metadata:{
        name, phone,
    },
    public_key, 
    text: "Pay Now",
    onSuccess: () => alert("Thanks for Paying your student fee"),
    onClose: () => alert("Are you sure you want to close?")
}

const handleSubmit = (e) =>{
    e.preventDefault();

}
    
    return (
        <Container>
            <FormWrap>
                <FormContent data-aos="fade-right">
                <Form onSubmit={handleSubmit}>
                    <FormH1> Check Out Page</FormH1>

                    <FormAll1>
                    <FormAll>
                <FormLabel>Full Name</FormLabel>
                <FormInput type="text" placeholder="Enter Full Name"
                value={name} onChange={(e) => setName(e.target.value)}/>
                </FormAll>
                             
                <FormAll>
                <FormLabel>Email</FormLabel>
                <FormInput type="text" id="mail" placeholder="Enter Email" required
               onChange={(e) =>setMail(e.target.value)}/>
                </FormAll>

                <FormAll>
                <FormLabel>Phone Number</FormLabel>
                <FormInput type="tel" placeholder="Enter Phone number" required
                value={phone} onChange={(e) =>setPhone(e.target.value)}/>
                </FormAll>
                <FormBtn>
               <Button primary >NGN {amount / 100}</Button>
               </FormBtn>
                
                </FormAll1>
                <FormBtn>
                    <PaystackButton {...componentProps}/>
                </FormBtn>
                
                </Form>
                </FormContent>
            </FormWrap>
        </Container>
    )
}

export default Sign
