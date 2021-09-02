import styled from "styled-components";

export const Button = styled.button`
background:${({primary}) =>(primary ? "#C3073F" : "#F13C20")};
border-radius: 5px;
white-space: nowrap;
padding: ${({big})=>(big ? '10px 15px': '12px 30px')};
color: ${({dark})=> (dark ? '#010606': '#fff')};
font-size: ${({fontBig})=>(fontBig ? '20px': '16px')};
outline: none;  
margin-top: 1rem;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;
text-decoration:none;

&:hover{
    transform: scale(0.98)
}
`