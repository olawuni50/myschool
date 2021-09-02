import styled from "styled-components"
import img from "../../Images/stu.jpg"

export const HeroContainer = styled.section`
display: relative;
/* background-color: #EEE2DC; */
background-image: url(${img});
background-size: cover;
height: 400px;

@media screen and (max-width: 768px){
    background-size: auto 100%;
}
`

export const HeroWrapper = styled.div`
max-width: 1100px;
margin: 0 auto;

@media screen and (max-width: 768px){
    display: grid;
    grid-template-columns: 1fr;
}
`

export const HeroText = styled.h1`
color: #333;
font-size: 4rem;
align-self: center;
/* margin-left: 10rem; */
color: #05386B;
justify-self: center;
margin-top: 10rem;


@media screen and (max-width: 768px){
        font-size: 3rem;    
}
`

export const HeroContent = styled.div`
display:grid;
justify-content: center;
`

export const HeroP = styled.p`
margin-top: 1rem;
font-size: 1.5rem;
text-align: center;
color: #fff;
`

// export const Image = styled.img`
// width: 100%
// `