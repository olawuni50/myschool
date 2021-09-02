import styled from "styled-components"

export const StaffContainer  = styled.section`
height: 500px;
background: rgb(245, 239, 239);
`

export const StaffWrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
gap: 10px;
max-width: 1200px;
margin: 0 auto;
display: flex;
`

export const StaffContent = styled.div`
margin-left: 1rem;
margin-top: 8rem;
`

export const StaffImage = styled.div`

`

export const Image = styled.img`
/* display:block;
margin-left: auto;
margin-right: auto;
width: 30%;
border-radius: 50%; */
padding:0 6px;
float: left;
width:50%;
margin-top: 3rem;
border-radius: 30%;
`

export const StaffP = styled.h1`
margin-bottom: 1rem;
color: #05386B;

`

export const StaffNote = styled.p`
line-height: 1.4;
color: #333;
border: 2px solid #fff;
border-radius: 10px;
padding: 10px;
box-shadow: 0 1px 3px rgba(0,0,0, 0.9);
`