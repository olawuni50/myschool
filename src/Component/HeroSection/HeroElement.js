import styled, {keyframes} from "styled-components"
import {Link} from "react-router-dom"


const SlidefromLeft = keyframes`
 0%{
        transform: translateX(-100%);
    }

    100%{
        transform: translateX(0);
    }
`

const SlidefromRight = keyframes`
   0%{
        transform: translateX( 100%);
    }

    100%{
        transform: translateX(0);
    }
    
`

const Spinner = keyframes`
from{
    -moz-transform: rotateY(0deg);
    -ms-transform: rotateY(0deg);
    transform:rotateY(0deg);
}
to {
    -moz-transform: rotateY(-360deg);
    -ms-transform: rotateY(-360deg);
    transform: rotateY(-360deg);
}
`

export const HeroContainer = styled.section`
height: 600px;
position:relative;
background: #05386B;

/* background-image: linear-gradient(to right top, #05386b, #4c2f5d, #622c46, #663332, #5d3e27); */
/* background-image: linear-gradient(to right top, #4440b3, #3141a7, #20409b, #0f3e8d, #033c7f, #213874, #2c3469, #32305e, #3e2b53, #452747, #46253c, #452433); */
/* background-image: linear-gradient(to right top, #5d3e27, #65352e, #662e3b, #5f2b4c, #4c2f5d, #413466, #313a6f, #133f75, #1c447d, #244985, #2b4f8d, #335495); */


@media screen and (max-width: 768px){
    height: auto;
}

&::before,
&::after{
    content: '';
    position:absolute;
    height: 100px;
    bottom: -70px;
    right: 0;
    left: 0;
    background: #fff;
    transform: skewY(30deg);
    -webkit-transform: skewY(-3deg);
    -moz-transform: skewY(-3deg);
    -ms-transform: skewY(-3deg);
}
`

export const HeroWrapper= styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 5px;
max-width: auto;
margin: 0 auto;


@media screen and (max-width: 768px){
     /* grid-template-columns:1fr */
     display:flex;
     flex-direction: column;
     justify-content: center;
     /* align-items: center; */   
}

`

export const HeroText = styled.div`
margin-top:8rem;
color: #fff;
margin-left: 5rem;
/* margin-right: 5rem;  */


animation: ${SlidefromLeft} 3s ease-in-out;


@media screen and (max-width: 768px){
    margin-left: 2rem;
    margin-right: 1rem;
    margin-top:7rem;
    
}
`

export const HeroHeading= styled.h2`
font-size:2rem;
margin-bottom: 2rem;
/* color: #05386B; */
color: #fff;
`

export const HeroP = styled.blockquote`
line-height: 1.4;
font-size: 1.3rem

`

export const HeroImage = styled.div`
margin-top: 3rem;
margin-left: 2rem;
animation: ${SlidefromRight} 3s ease-in-out;


@media screen and (max-width: 768px){
    margin-top: 0;
}
`

export const Image = styled.img`
animation-name: ${Spinner};
animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
animation-iteration-count: infinite;
animation-duration: 30s;

:hover{
    animation-play-state: paused;
}

@media screen and (max-width: 768px){
    width: 100%
}
`

export const HeroBtn = styled.div`
display:flex;
justify-content: center;
margin-top: 1.5rem;
`

export const Button = styled(Link)`
background: #C3073F;
border-radius: 10px;
border: none;
color: #fff;
padding: 9px 12px;
text-decoration: none;

&:hover{
    transform:scale(0.98);
}

`

export const SocialIcons = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 240px;
font-size: 1.2rem;
`;

export const SocialIconLink = styled.a`
/* color: #05386B; */
color: #fff;
font-size: 24px;
margin-top: 2rem;
margin-left: 5rem;

@media screen and (max-width: 768px){
    margin-left: 1rem;
}

&:hover{
    color: #C3073F;
    transition: 0.3s ease-out
}
`

export const AddressContact= styled.div`
display:flex;
grid-template-columns: 1fr;
margin-top: 1.5rem;

@media screen and (max-width: 768px){
    display: grid;
}
`

export const Add = styled.div`
margin: 1rem;
font-size: 12.9px;
line-height: 2;
/* color: rgb(54, 206, 54); */
color: #fff;
 
 @media screen and (max-width: 768px){
     font-size: 15px;
     margin: 10px;
     line-height: 1.4;
 }
`

/* export const HeroAddress = styled.div`
display: grid;
justify-content: center;
align-items: center;
width: 300px;
font-size: 1.2rem;
`

export const HeroContact = styled.div`
color: #fff;
font-size: 12px;
margin-top: 2rem;
margin-left: 5rem;

@media screen and (max-width: 768px){
    margin-left: 1rem;
}

&:hover{
    color: #C3073F;
    transition: 0.3s ease-out
}
` */