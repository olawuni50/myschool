import styled from "styled-components"
import imgs from "../../Images/aa.jpg";


export const InfoContainer = styled.section`
background-image: url(${imgs});
background-size: contain;
background: #fff;
height: 700px;

@media screen and (max-width: 768px){
    height: auto;
}
`

export const InfoWrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
/* grid-gap: -3px; */
max-width: 1100px;
margin: 0 auto;

@media screen and (max-width: 768px){
    grid-template-columns: 1fr;
}

`

export const InfoText = styled.div`
margin-top: 8rem;
max-width: 500px;

@media screen and (max-width: 768px){
    max-width: 300px;
    text-align: center;
    /* margin-left: 3rem; */
    margin-top: 5rem;
    justify-self: center;
}
`

export const InfoHeading = styled.h1`
margin-bottom: 1.5rem;
font-size: 2rem;
color: #333;

`

export const InfoP = styled.p`
line-height: 2;
text-align:justify;
color: #333;
margin-bottom: 1.5rem;

`

export const InfoImage = styled.div`

`

export const Image = styled.img`
width: 100%;

`
export const InfoQuote = styled.div`
background:  #05386B;
color: #fff;
box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
padding: 15px;
border-radius: 10px
`

export const InfoQuoteA = styled.div`
margin-top: 1.5rem;
background: #05386B;
color: #fff;
box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
padding:15px;
border-radius: 10px;
`

export const InfoQuote1 = styled.q`
font-weight: normal;
/* background:  #EEE2DC; */
line-height:2;
font-style:italic;
text-align:justify;

`
