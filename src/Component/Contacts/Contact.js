import React from 'react'
import { ContactContainer, ContactWrapper, ContactItem,
    ContactLabel, ContactInput, ContactInputEmail, ContactBtn, Button, ContactLabel1, ContactInputArea } from './ContactsElement'
    

const Contact = () => {
    return (
        <ContactContainer id="contact" >
            <ContactWrapper data-aos="fade-right">
                
                <ContactItem>
                <ContactLabel>Name</ContactLabel>
                <ContactInput/>
                </ContactItem>

                <ContactItem>
                <ContactLabel1>Email</ContactLabel1>
                <ContactInputEmail/>
                </ContactItem>

                <ContactItem>
                <ContactLabel1>Message</ContactLabel1>
                <ContactInputArea/>
                </ContactItem>

                <ContactBtn>
                    <Button>Contact Us</Button>
                </ContactBtn>
            </ContactWrapper>
        </ContactContainer>
    )
}

export default Contact
