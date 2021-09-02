import styled from "styled-components";
import {Link as LinkS} from "react-scroll";
import {Link as LinkR} from "react-router-dom"

export const FooterContainer = styled.div`
/* background-color: rgb(54, 206, 54); */
background:#05386B;
border-radius:20px; 
/* height: 200px; */
`

export const FooterWrap = styled.div`
padding: 48px 24px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 1100px;
margin: 0 auto;
`

export const FooterLinksContainer = styled.div`
display: flex;
justify-content: center;
/* min-height: 100px; */
/* padding-top: 10rem; */

@media screen and (max-width: 820px){
    padding-top: 32px;
}
`

export const FooterLinksWrapper = styled.div`
display: flex;

@media screen and (max-width: 820px){
    flex-direction: column;
}
`;

export const FooterLinkItems = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin: 16px;
text-align: left;
width: 160px;
box-sizing: border-box;
color: #fff;

@media screen and (max-width: 420px){
    margin:0;
    padding: 10px;
    width: 100%;
}
`
export const Footer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
`

export const FooterLinkTitle = styled.h1`
font-size: 1.4rem;
margin-bottom: 16px;
/* color: #05386B; */
color: #EEE2DC;
`

export const FooterLink = styled(LinkR)`
display: flex;
justify-content: center;
color: #fff;
text-decoration: none;
/* margin-bottom: 0.5rem; */
font-size: 16px;
cursor:pointer;

&:hover{
    color: #C3073F;
    transition: 0.3s ease-out
}
`

export const FooterLinks = styled(LinkS)`
display: flex;
justify-content: space-between;
color: #fff;
text-decoration: none;
margin-bottom: 0.5rem;
font-size: 16px;
cursor:pointer;

&:hover{
    color: #C3073F;
    transition: 0.3s ease-out
}
`

export const SocialMedia = styled.section`
max-width: 1000px;
width: 100%;
`;

export const SocialMediaWrap = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
max-width: 1100px;
margin: 40px auto 0 auto;

@media screen and (max-width:820px){
    flex-direction: column;
}
`;

export const SocialLogo = styled(LinkR)`
/* color: #05386B; */
color: #EEE2DC;
justify-self: start;
cursor: pointer;
text-decoration:none;
font-size: 1.5rem;
display: flex;
align-items: center;
margin-bottom: 16px;
font-weight: bold;

&:hover{
    color: #C3073F;
    transition: 0.3s ease-out
}
`;

export const WebsiteRights = styled.small`
/* color: #05386B; */
color: #EEE2DC;
margin-top: 25px;
margin-bottom: 16px;
font-size: 1rem;
`;

export const SocialIcons = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 240px;
font-size: 1.2rem;
`;

export const SocialIconLink = styled.a`
/* color: #05386B; */
color: #EEE2DC;
font-size: 24px;

&:hover{
    color: #C3073F;
    transition: 0.3s ease-out
}
`

// export const FooterTitle = styled.h2`
// color: #333;
// font-size: 2rem;
// margin-right: 4rem;
// margin-bottom: 1rem;
// display: flex;
// flex-direction: column;
// `

// export const FooterText = styled.div`

// `
// export const FooterHead = styled.h2`
// color: #C3073F;
// padding-bottom: 10px;
// width: 100%
// `

// export const FooterP = styled.p`
// color: #fff;
// width: 30%;
// text-align: justify;
// line-height: 1.3;
// `

// export const FooterLinkWrapper = styled.div`
// display: grid;
// grid-template-columns: 1fr 1fr;
// grid-gap: 10px;
// `

// export const FooterItem = styled.div`
// /* margin-right: 5rem; */

// `



