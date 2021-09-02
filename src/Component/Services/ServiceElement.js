// import styled from "styled-components"
// import {Link as LinkR} from 'react-router-dom'



// export const ServiceContainer = styled.section`
// background-color: #dedede;
// -o-object-fit:cover;
// /* background: #fff; */
// height: auto;
// margin-bottom: 3rem;

// @media screen and (max-width: 768px){
//     height: auto;
// }
// `

// export const ServiceWrapper = styled.div`
// display: grid;
// grid-template-columns: 70% 30%;
// grid-gap: 15px;
// max-width: 1100px;
// margin: 0 auto;
// /* margin-top: 5rem; */

// @media screen and (max-width: 768px){
//     grid-template-columns: 1fr
// }
// `

// export const ServiceContent = styled.div`
// margin-top: 5rem;
// /* width:auto; */
// justify-self: center;
// display: grid;
// grid-template-columns: 1fr 1fr;

// @media screen and (max-width: 768px){
//     max-width: 350px;
//     text-align: center;
//     margin-right: 1.5rem;
//     grid-template-columns: 1fr;
// }
// `

// export const ServiceHeading = styled.h2`
// display:flex;
// justify-content:center;
// margin-bottom: 1.5rem;
// font-size: 2rem;
// color: #05386B;

// @media screen and (max-width: 768px){
//     font-size:1.5rem;
// }
// `

// export const ServiceP = styled.p`

// @media screen and (max-width: 768px){
//     font-size: 1rem;
//     margin-left: 2rem;
// }
// `

// export const ServiceImage = styled.div`

// `

// export const Image = styled.img`
// width: 50%;

// `

// export const ServiceMark = styled.div`
// display: grid;
// grid-template-columns: 1fr 1fr;
// grid-gap: 5px;
// margin-top: 2rem;
// margin-left: 7rem;
// background:#EEE2DC;
// padding:20px;
// border-radius: 15px;
// box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.2);
// line-height: 2;

// @media screen and (max-width: 768px){
//     margin-left:2rem;
// }


// `

// export const ServiceCheck = styled.div`
// font-size: 18px;
// color: #05386B;

// @media screen and (max-width: 768px){
//     font-size: 1rem;
//     width:auto;
// }
// `

// export const ServiceWidget = styled.div`
// margin-top: 9.5rem;
// border-radius: 10px;
// box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);

// @media screen and (max-width: 768px){
//     max-width: 350px;
//     text-align: center;
//     justify-self: center;
//     margin-top: 2rem;
//     margin-bottom: 2rem;
// }
// `

// export const ServiceContent2 = styled.div`
// margin-top: 1.5rem;
// display:grid;
// text-align: center;
// line-height: 2;
// `

// export const ServiceHeading2 = styled.h2`
// color:#C3073F;
// border-bottom: 2px solid rgb(209, 203, 203);
// `

// export const ServiceItem = styled.div`
// border-bottom: 2px solid rgb(209, 203, 203);
// padding: 10px;

// `

// export const ServiceLink = styled(LinkR)`
// text-decoration: none;
// `
// export const SocialIcons = styled.div`
// display: flex;
// justify-content: space-between;
// align-items: center;
// width: 240px;
// font-size: 1.2rem;
// margin-left: 3rem;
// margin-top: 3rem;

// @media screen and (max-width: 768px){
//     margin-right: 2rem;
// }
// `;

// export const SocialIconLink = styled.a`
// color: #05386B;
// font-size: 24px;

// &:hover{
//     color: #C3073F;
//     transition: 0.3s ease-out
// }
// `

import styled from "styled-components"

export const ServiceContainer = styled.section`
height: auto;
margin-bottom: 2rem;`

export const ServiceWrapper = styled.div`
max-width: 1100px;
margin: 0 auto;

@media screen and (max-width: 768px){
    max-width: 320px;
}
`

export const ServiceContent = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 25px;

@media screen and (max-width: 768px){
    grid-template-columns: 1fr;
}
`

export const ServiceHead = styled.h1`
max-width: 400px;
line-height: 1.5;
margin-bottom: 1rem;
text-align: start;

@media screen and (max-width: 768px){
    margin-top: 2rem;
}
`

export const ServiceP = styled.p`
color: #333;
line-height: 1.8;
text-align: justify;
font-size: 18px;
display: grid;
align-self: center;

`

export const ServiceImage = styled.div`

`

export const Image = styled.img`
width: 90%;
`

