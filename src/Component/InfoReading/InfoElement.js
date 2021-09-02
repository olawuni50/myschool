import styled from "styled-components"

export const InfoContainer = styled.section`
height: 150px;
margin-bottom: 3rem
`

export const InfoWrapper = styled.div`
max-width: 1100px;
margin: 0 auto;
margin-top: 3rem;
display:flex;
justify-content: space-evenly;
align-items: center;

@media screen and (max-width: 768px){
    flex-direction: column;
}

`

export const InfoText = styled.div`

`

export const InfoHead = styled.h1`
padding-bottom: 5px;
text-align: center;
color: #05386B
`

export const InfoP = styled.p`

`