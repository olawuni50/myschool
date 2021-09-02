import React,{useState, useEffect} from 'react'
import { Nav, NavContainer, NavImage, NavMenu,
NavItem, NavLinks, MobileIcon, NavBtn, Button, NavBtn2, Button2,NavBtn3, Image } from './NavBarElement'
import { FiAlignRight} from "react-icons/fi"
import {CgProfile} from "react-icons/cg"
import {Link} from "react-router-dom"
import img from "../../Images/logo.png"


const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = ()=> {
        if(window.scrollY >=80){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll", changeNav)
    }, [])
    return (
       <Nav scrollNav={scrollNav}>
           <NavContainer>
               <NavImage to="/" scrollNav={scrollNav}>
                   <Image src={img} alt="logo"/>
               </NavImage>
               <MobileIcon>
                    <FiAlignRight onClick={toggle}/>
                </MobileIcon>
               <NavMenu>
                   <NavItem>
                       <NavLinks to="/" scrollNav={scrollNav}>Home</NavLinks>
                   </NavItem>
                   
                   <NavItem>
                       <NavLinks to="/services" scrollNav={scrollNav}>Services</NavLinks>
                   </NavItem>

                   <NavItem>
                       <NavLinks to="/about" scrollNav={scrollNav}>About Us</NavLinks>
                   </NavItem>
                   <NavItem>
                       <NavLinks to="/contacts" scrollNav={scrollNav}>Contacts</NavLinks>
                   </NavItem>

                   {/* <NavItem>
                       <NavLinks to="/blog" scrollNav={scrollNav}>Blog</NavLinks>
                   </NavItem> */}

                   {/* <NavItem>
                       <NavLinks to="contact">Contact</NavLinks>
                   </NavItem> */}
                   <NavBtn3 scrollNav={scrollNav}>
                       <Link to="/login" scrollNav={scrollNav}>
                   <span style={{ color: "#C3073F", fontSize:"2rem", marginLeft:"1rem"}} ><CgProfile/></span>
                   </Link>
                   </NavBtn3>
                   <NavBtn>
                       <Button to="/sign-up">SIGN UP</Button>
                       {/* <Button to="/register">SIGN UP</Button> */}
                   </NavBtn>
                   
               </NavMenu>
               <NavBtn2 scrollNav={scrollNav}>
                       <Button2 to="/sign-up">Sign Up</Button2>
                       <Link to ="/login">
                       <span style={{color: "#C3073F", fontSize:"2rem", marginLeft:"1rem"}}><CgProfile/></span>
                       </Link>
                   </NavBtn2>
                   {/* <NavBtn2>
                       <Button2 to="/sign-up">LOGIN</Button2>
                   </NavBtn2> */}
                   
           </NavContainer>
       </Nav>
    )
}

export default Navbar
