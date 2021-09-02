import styled from "styled-components"

export const ServiceFeatured = styled.section`
background: #05386B;
height: auto;
/* margin-bottom: 3rem; */
max-width: 1100px;
margin: 0 auto;
box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
border-radius: 10px;
`

export const ServiceWrapper = styled.div`
max-width: 800px;
margin: 0 auto;
display:grid;
grid-template-columns: 1fr 1fr;
grid-gap: 30px;

@media screen and (max-width: 768px){
grid-template-columns: 1fr;
    max-width: 300px;
}

`

export const ServiceContent = styled.div`
margin-top: 4rem;
color:#fff;

`

export const ServiceHead = styled.h1`
margin-bottom: 1rem;
line-height: 1.5;

`

export const ServiceP = styled.p`
line-height: 1.5;
text-align: justify;
`
export const Button = styled.button`
padding: 10px;
border-radius: 10px;
outline:none;
border:none;
background: #C3073F;
color: #fff;
text-align:center;
cursor: pointer;
margin-top: 2rem;
margin-left: 4rem;
box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);

`

export const ServiceImage = styled.div`

`

export const Image = styled.img`
width: 100%;

`

