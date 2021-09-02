import styled from "styled-components"
import {Link} from "react-router-dom"

export const PaymentContainer = styled.section`
height: 500px;
background-color: #dedede;

@media screen and (max-width: 768px){
    height: auto;
    background-size: auto 100%;
}
`

export const PaymentWrapper = styled.div`
max-width: 1100px;
margin:0 auto;
/* margin-top: 5rem; */
display: flex;
justify-content: center;
align-items: center;


@media screen and (max-width: 768px){
    flex-direction:column;
    /* margin-left: 2rem; */
}
`


export const PaymentCards = styled.div`
border: 2px solid transparent;
background: #05386B;
margin-right: 2rem;
margin-top: 5rem;
border-radius: 10px;
padding:1rem;
height: 330px;
box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.2);

@media screen and (max-width: 768px){
    margin-top: 10px;
    margin-bottom: 1.5rem;
    width:auto;
    margin-left: 1.9rem;
}
`

export const PaymentHead = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
padding: 5px 15px;
border: 3px solid transparent;

box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.2);
`

export const PaymentHeading = styled.h3`
color: #fff;
margin-right: 1rem;

`
export const Pay = styled.div`
color: #fff;
background: #C3073F;
padding:5px 15px;
border-radius: 10px;
`

export const PaymentAmount = styled.h4`

`

export const PaymentP = styled.h6`

`

export const PaymentLists = styled.div`
color:#fff;
margin-top: 1rem;
line-height: 2;
margin-bottom: 1rem;

/* margin-left: 3rem; */
`

export const PaymentList = styled.div`
font-size:1.1rem;
border-bottom: 2px solid #dedede;
`

export const PaymentBtn = styled.div`
margin-top:2rem;

`

export const Button = styled(Link)`
background: #C3073F;
color: #fff;
border: none;
padding: 10px 4rem;
border-radius:10px;
font-size: 1rem;
cursor: pointer;
margin-left: 1.5rem;
box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.2);
text-decoration: none;

&:hover{
    transform:scale(0.98)
}
`