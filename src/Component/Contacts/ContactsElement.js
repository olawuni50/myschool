import styled, {keyframes} from "styled-components"
// import img from "../../Images/bs6.jpg"

// const slideInFromTop = keyframes`
//     0%{
//         transform: translateY(-100%);
//     }

//     100%{
//         transform: translateX(0);
//     }
//     `
    


const slideInFromBottom = keyframes`
    0%{
        transform: translateY(100%);
    }

    100%{
        transform: translateX(0);
    }
    
`


export const ContactContainer = styled.div`
background-size: cover;

height: 500px;


@media screen and (max-width: 768px){
    background-size: auto 100%;
}
`

export const ContactWrapper = styled.div`
max-width: 700px;
margin: 0 auto;
margin-left: auto;

@media screen and (max-width: 768px){
    margin-left: 5rem;
}
`

export const ContactItem = styled.div`
/* margin-top:2rem; */
/* animation: ${slideInFromBottom} 10s ease-in; */
`

export const ContactLabel = styled.h3`
position:absolute;
color: #05386B;
margin-top: 3rem;
`

export const ContactLabel1 = styled.h3`
position:absolute;
color: #05386B;
margin-top:1rem;
`

export const ContactInput = styled.input.attrs({type:"text", placeholder: "Enter your name"})`
max-width: 600px;
font-size: 15px;
margin-bottom: 10px;
padding-left: 10px;
width: 80%;
border-radius: 10px;
height: 50px;
border-color: transparent;
box-shadow: 10px;
outline: none;
transition: 0.15s;
margin-top: 5rem;
/* margin-left: 3rem; */
box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2)
`

export const ContactInputEmail = styled.input.attrs({type:"email", placeholder: "Enter your email"})`
max-width: 600px;
font-size: 15px;
margin-bottom: 10px;
padding-left: 10px;
width: 80%;
border-radius: 10px;
height: 50px;
border-color: transparent;
box-shadow: 10px;
outline: none;
transition: 0.15s;
margin-top: 3rem;
/* margin-left: 3rem; */
box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2)
`

export const ContactInputArea = styled.textarea.attrs({ placeholder: "Enter text here"})`
border-color: transparent;
box-shadow: 10px;
outline: none;
transition: 0.15s;
margin-top: 1rem;
/* margin-left: 3rem; */
box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
width: 80%;
border-radius: 10px;
height: 100px;
padding-left: 10px;
padding-top: 5px;
margin-top: 3rem;
font-size: 15px;
`

export const ContactBtn = styled.div`
margin-top: 1rem;

`

export const Button = styled.button`
border-radius: 50px;
/* background: rgb(54, 206, 54); */
background: #C3073F;
white-space: nowrap;
padding: 8px 10px;
color: #fff;
font-size: 14px;
outline: none;  
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;
/* animation: ${slideInFromBottom} 10s  ease-in; */

&:hover{
    transform: scale(0.98);
    
}
`