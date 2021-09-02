import styled from "styled-components"

export const ContactContainer = styled.section`
height: 400px;
/* background: #dedede; */

@media screen and (max-width: 768px){
    height: auto;
}
`
export const ContactHead = styled.h3`
text-align: center;
margin-top: 2rem;
color:#333;
font-size: 2rem;
`

export const ContactP = styled.p`
text-align:center;
padding: 5px;
color: #333;
border-top: 3px solid #047aed;
border-bottom: 3px solid #047aed;
max-width: 600px;
margin: 0 auto;
`

export const ContactWrapper = styled.div`
max-width: 1100px;
margin:0 auto;
display:grid;
grid-template-columns: 1fr 1fr;
/* margin-top: rem; */


@media screen and (max-width: 768px){
    grid-template-columns: 1fr;
    max-width: 280px;
}

`
export const MyContact = styled.div`
margin-top: 2rem;

`

export const ContactAll = styled.div`
margin-bottom: 2rem;

`

export const ContactHeading = styled.h3`
padding-bottom: 10px;

`

export const ContactText = styled.h4`

`

export const ContactImage = styled.div`
margin-top: 2rem;

`

export const Image = styled.img`
width: 80%;
`

