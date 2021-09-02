import React from 'react'
import {SidebarContainer, CloseIcon, Icon,
SidebarWrapper, SidebarMenu, SidebarLink} from "./SidebarElement"

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} toggle={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                
                <SidebarMenu>
                <SidebarLink to="/" onClick={toggle}>Home</SidebarLink>
                    <SidebarLink to="/services" onClick={toggle}>Services</SidebarLink>
                    <SidebarLink to="/about" onClick={toggle}>About Us </SidebarLink>
                    <SidebarLink to="/contacts" onClick={toggle}>Contacts </SidebarLink>
                    {/* <SidebarLink to="/blog" onClick={toggle}>Blog</SidebarLink> */}
                </SidebarMenu>
                
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
