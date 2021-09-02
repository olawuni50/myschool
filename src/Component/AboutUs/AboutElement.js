import styled from "styled-components"



export const AboutContainer = styled.section`
height:auto;

@media screen and (max-width: 768px){
    height: auto;
}
`

export const AboutWrapper = styled.div`
display: grid;
max-width: 900px;
margin: 0 auto;

@media screen and (max-width: 768px){    
    max-width: 290px;
}
`

export const AboutContent = styled.div`
text-align: justify;
margin-right: 2rem;
margin-top: 4rem;
width: auto;


@media screen and (max-width: 768px){
    margin-top: 2rem;
    max-width: 350px;
margin: 1rem auto;
}
`

export const AboutHeading = styled.h1`
margin-bottom: 1rem;
border-bottom: 2px solid red;
color:#333;
`

export const Aboutp = styled.p`
font-size:1.2rem;
line-height: 2;
color:#333;
/* 
@media screen and (max-width: 768px){
    font-size: 1rem;
    line-height: 2;
} */

`