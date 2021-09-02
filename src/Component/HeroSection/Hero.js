import React from 'react'
import { HeroContainer, HeroWrapper, HeroText, HeroHeading,
HeroP, HeroImage, Image, HeroBtn, SocialIcons, SocialIconLink, AddressContact,
Add, Button} from './HeroElement'
import img from "../../Images/s6.png"
// import { Button } from '../ButtonElement'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa"
import {AiTwotoneHome, AiTwotoneMail, AiTwotonePhone} from "react-icons/ai";
// import {Link} from "react-router-dom"



const Hero = () => {
    return (
        <HeroContainer id="info">
            <HeroWrapper>
                <HeroText>
                    <HeroHeading>Welcome to Excel Standard Group of Schools</HeroHeading>
                    <HeroP>We train your children to be leaders of tomorrow,
                        we envision world's best learning experience            
                    </HeroP>
                    <HeroBtn>
                       <Button to="/sign-up">Get Started</Button>
                    </HeroBtn>

                    <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                                <FaTwitter/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                                <FaLinkedin/>
                            </SocialIconLink>
                        </SocialIcons>

                        <AddressContact>
                        <Add>
                <AiTwotoneMail/> Olawuni50@gmail.com</Add>
               
                            <Add>
                            <AiTwotonePhone/> +2348118320256
                            </Add>

                            <Add>
                            <AiTwotoneHome/> Ile funfun Opa Ile-Ife Osun State, Nigeria
                            </Add>
                                                   
                            </AddressContact>
                        
                        
                </HeroText>
                <HeroImage>
                    <Image src={img} alt="school"/>
                </HeroImage>
            </HeroWrapper>
        </HeroContainer>
    )
}

export default Hero
