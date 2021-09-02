import styled from "styled-components"
import img from "../../Images/ab.jpg"

export const Container = styled.div`
background-image: url(${img});
background-size: cover;
min-height:700px;
overflow: hidden;
/* background: linear-gradient(108deg, rgba(1, 147, 86, 1) 0%, */
/* rgba(10, 201, 122, 1)100%); */

@media screen and (max-width: 768px){
    position: sticky;
    background-position: center;
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
margin-top: 2rem;


@media screen and (max-width: 480px){
    padding: 10px;
    margin-top: 0
}
`;


export const Form = styled.form`
max-width: 600px;
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
    position:sticky;
}
}
`

export const FormH1= styled.h2`
display:flex;
justify-content: center;
padding-bottom: 10px;
color: #05386B;
`

export const FormAll1 = styled.div`
display: grid;
grid-template-columns: 1fr;
gap: 10px;
`

export const FormAll = styled.div`

`

export const FormLabel = styled.label`
margin-bottom: 5px;
font-size: 15px;
color: #05386B;
display: block;
`

export const FormInput = styled.input`
padding: 16px 16px;
width: 100%;
margin-bottom: 32px;
border-color:transparent;
border-radius: 10px;
outline: none;
box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2)
`

export const FormInputt = styled.input`
padding: 16px 16px;
/* width: 100%; */
margin-bottom: 32px;
border-color:transparent;
border-radius: 10px;
outline: none;
box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2)

`

export const FormBtn = styled.div`
display: flex;
justify-content: center;
margin-bottom: 2rem;

`

