import React from 'react'
import { ContactContainer,ContactWrapper, ContactAll, ContactHeading,
    ContactText, MyContact, ContactImage, Image, ContactHead, ContactP} from './ContactInfoElement'
    import {MdEmail, MdLocalPhone, MdLocationOn} from "react-icons/md";
    import img from "../../Images/c4.svg"

const ContactInfo = () => {
    return (
        <ContactContainer id="contact">
            <ContactHead data-aos="zoom-in">Let's Talk</ContactHead>
            <ContactP data-aos="zoom-in">Here I have listed my contact informations</ContactP>
            <ContactWrapper>
                <MyContact data-aos="fade-right">
                <ContactAll>
                <ContactHeading> <MdEmail color="#047aed" fontSize="24px"/> Email</ContactHeading>
                <ContactText>  Olawuni50@gmail.com</ContactText>
                </ContactAll>

                <ContactAll>
                <ContactHeading> <MdLocalPhone color="#047aed" fontSize="24px"/> Contact Me</ContactHeading>
                <ContactText> +2348118320256, +2348161882454</ContactText>
                </ContactAll>

                <ContactAll>
                <ContactHeading> <MdLocationOn color="#047aed" fontSize="24px"/>Location</ContactHeading>
                <ContactText>  Lekki Phase 1 Nigeria</ContactText>
                </ContactAll>
                </MyContact>

                <ContactImage data-aos="fade-left">
                    <Image src={img} alt="contact"/>
                </ContactImage>
                
            </ContactWrapper>
        </ContactContainer>
    )
}

export default ContactInfo
