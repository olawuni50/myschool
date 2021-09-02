import styled, {keyframes} from "styled-components"


const Spinner = keyframes`
from{
    -moz-transform: rotateY(0deg);
    -ms-transform: rotateY(0deg);
    transform:rotateY(0deg);
}
to {
    -moz-transform: rotateY(-180deg);
    -ms-transform: rotateY(-180deg);
    transform: rotateY(-180deg);
}
`

export const HistoryContainer= styled.section`
height: auto;
/* background-color: #dddddd; */

`

export const HistoryWrapper = styled.div`
display:grid;
grid-template-columns: 1fr 1fr;
grid-gap: 40px;
max-width: 900px;
margin: 0 auto;

@media screen and (max-width: 768px){
    display: grid;
    grid-template-columns: 1fr;
    max-width: 300px;
    grid-gap: 10px;
}
`

export const HistoryText = styled.div`
line-height: 2;
text-align: justify;
color: #333;

`

export const HistoryHeading = styled.h1`
border-bottom: 2px solid red;
color: #05386B;
`

export const HistoryP = styled.p`
font-size: 1.2rem;

`

export const HistorySocial = styled.div`
display: flex;
justify-content: space-evenly;
font-size: 1.8rem;
cursor: pointer;
margin-top: 1rem;
`

export const HistoryImage = styled.div`

`

export const Image = styled.img`
width: 100%;
animation-name: ${Spinner};
animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
animation-iteration-count: infinite;
animation-duration: 30s;

:hover{
    animation-play-state: paused;
}

`