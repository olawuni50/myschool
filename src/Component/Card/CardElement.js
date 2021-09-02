import styled from "styled-components"

export const CardContainer = styled.section`
height: 400px;
background: #05386B;
/* background-image: linear-gradient(to right top, #5d3e27, #65352e, #662e3b, #5f2b4c, #4c2f5d, #413466, #313a6f, #133f75, #1c447d, #244985, #2b4f8d, #335495); */
position: relative;

/* ::after{
    content: " ";
    position:absolute;
    left:0;
    right: 0;
    bottom:0px;
    width: 0px;
    height: 200px;
    border-bottom: 13px solid white;
    border-left: 55px solid transparent;
    border-right: 55px solid transparent;
} */

@media screen and (max-width: 768px){
    height: auto
}

`

export const CardWrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-gap: 5px;
max-width: 1100px;
margin: 0 auto;
/* margin-top: 15rem; */

@media screen and (max-width: 768px){
    grid-template-columns: 1fr;
    

}
`

export const CardItem = styled.div`
border: 2px solid #05386B;
border-radius: 10px;
/* background:#05386B; */
background:#EEE2DC;
height: 15rem;
color: #05386B;
margin-top: 5rem;
box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);

@media screen and (max-width: 768px){
    width: 70%;
    justify-self:center;
    margin-top:0.5rem;
    margin-bottom: 1rem;
    
}

`

export const CardImage = styled.div`
font-size: 5rem;
color: #C3073F;
display: flex;
justify-content: center;
margin-bottom: 1rem;

`

export const CardHeading = styled.h2`
display:flex;
justify-content: center;
margin-bottom: 1rem;

@media screen and (max-width: 768px){
    font-size: 1.3rem;
}
`

export const CardP = styled.p`
display: flex;
justify-content: center;
line-height: 1.3;
margin-left:1rem;

`