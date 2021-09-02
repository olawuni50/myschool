import styled from "styled-components"

export const ServiceCards = styled.div`
max-width: 1100px;
margin: 0 auto;
display:grid;
grid-template-columns: 1fr 1fr 1fr;
margin-top: 4rem;

@media screen and (max-width: 768px){
    grid-template-columns: 1fr;
    max-width: 300px;

}
`

export const ServiceCard = styled.div`
background-color: #dedede;
padding: 15px;
margin-bottom: 2rem;
margin-right: 2rem;
border-radius: 10px;
box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);

`

export const ServiceCardHead = styled.h3`
color: #05386B;
padding-bottom: 10px;
box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
`

export const ServiceCardP = styled.p`
color: #333;
line-height: 1.7;
text-align: justify;

`