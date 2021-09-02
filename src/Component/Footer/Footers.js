import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, 
FooterLinkItems, FooterLinkTitle, FooterLink, SocialIconLink, SocialIcons,
SocialLogo, SocialMedia, WebsiteRights, SocialMediaWrap, FooterLinks, FooterP, FooterHead, FooterText,
FooterLinkWrapper, FooterItem, Footer} from "./FooterElement"
import {animateScroll as scroll} from "react-scroll";

const Footers = () => {
        const toggleHome =()=>{
            scroll.scrollToTop()
        }
        return (
            <FooterContainer>
                <FooterWrap>
                    <FooterLinksContainer>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>ESGS</FooterLinkTitle>
                                    <FooterLink>Ile Funfun Opa, Ile-Ife</FooterLink>
                                    <FooterLink>Opening Times</FooterLink>
                                    <FooterLink>Monday- Friday: 8am-4pm</FooterLink>
                                    <FooterLink>Saturday-Sunday:Closed</FooterLink>
                            
                            </FooterLinkItems>
                            
                        </FooterLinksWrapper>
    
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>Quick Link</FooterLinkTitle>
                                    <FooterLink to="/">Home</FooterLink>
                                    <FooterLink to="/services">Services</FooterLink>
                                    <FooterLink to="/blog">Blog</FooterLink>
                            </FooterLinkItems>
                            </FooterLinksWrapper>
                            <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                    <FooterLinks to="contact">Contact</FooterLinks>
                                    <FooterLinks to="info">School Info</FooterLinks>
                                    <FooterLinks to="/">Destinations</FooterLinks>
                                    <FooterLinks to="/">SponsorShip</FooterLinks>
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                    </FooterLinksContainer>
                {/* <Footer>
                    <FooterText>
                        <FooterHead>ESGS</FooterHead>
                        <FooterP>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Aliquam enim iure alias nulla mollitia soluta hic distinctio
                 corporis aspernatur possimus?a mollitia soluta hic distinctio
                </FooterP>
                    </FooterText>

                  
                        <FooterItem>
                            <FooterLinkTitle>Quick Link</FooterLinkTitle>
                            <FooterLink to="/">Home</FooterLink>
                                    <FooterLink to="/services">Services</FooterLink>
                                    <FooterLink to="/about">About</FooterLink>
                        </FooterItem>

                        <FooterItem>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                    <FooterLinks to="contact">Email: olawuni50@gmail.com</FooterLinks>
                                    <FooterLinks to="info">Phone: 08118320256</FooterLinks>
                                    <FooterLinks to="/">Location: London</FooterLinks>
                                    <FooterLinks to="/">Opening Hours: 8:00am - 5:00pm</FooterLinks>
                                    </FooterItem>
                        
             
                    </Footer> */}
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to="/" onClick={toggleHome}>
                                ESGS
                            </SocialLogo>
                            
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
                            <WebsiteRights>ESGS {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrap>
            </FooterContainer>
    )
}

export default Footers
