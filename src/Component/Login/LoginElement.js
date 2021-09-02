import styled from "styled-components"
import img from "../../Images/s3.png"

export const Container = styled.div`
background-image: url(${img});
/* object-fit: cover; */
background-size: cover;
top:0;
right:0;
left:0;
bottom:0;
height: 500px;
z-index: 0;
overflow: hidden;

@media screen and (max-width: 768px){
    /* position: sticky; */
    background-size: auto 100%
}
`

export const FormWrap = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;

@media screen and (max-width: 400px){
    height: 80%;
}
`

export const FormContent = styled.div`
height: 70%;
display: flex;
flex-direction: column;
justify-content: center;

@media screen and (max-width: 480px){
    padding: 10px
}
`

export const Form = styled.form`
/* background:lightgreen; */
max-width: 400px;
height: auto;
width: 100%;
z-index: 1;
display: grid;
margin: 0 auto;
padding: 30px 20px;
border-radius: 4px;
box-shadow: 0 1px 3px rgba(0,0,0, 0.9);

@media screen and (max-width:400px){
    padding: 20px 32px;

@media screen and (max-width: 768px){
    margin-top: 5rem;
    /* position:sticky; */
}
}
`

export const FormLabel= styled.h2`
margin-bottom: 5px;
font-size: 18px;
color: #05386B;
`

export const FormInput = styled.input`
padding: 16px 16px;
margin-bottom: 32px;
font-size: 18px;
border-color:transparent;
border-radius: 10px;
outline: none;
box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2)
`

export const FormBtn = styled.div`
display: flex;
justify-content: center
`