import React, {useState, useEffect} from 'react'
import { InfoContainer, InfoWrapper, InfoText, InfoHead, InfoP } from './InfoElement'

const Info2 = ({number,duration}) => {
const [count, setCount] = useState("0")



useEffect(() =>{
    let start = 0
    
    const end = parseInt(number.substr(0, 2))
    if(start === end) return;

    let totalMilSecDur = parseInt(duration)
    let incrementTime = (totalMilSecDur / end) * 1000;

    let timer = setInterval(() =>{
        start += 1;
        setCount(String(start) + number.substring(2))
        if(start === end) clearInterval(timer)
    }, incrementTime)

}, [number, duration])



    return (
        <InfoContainer>
            <InfoWrapper>
                <InfoText>
                    <InfoHead>{count}</InfoHead>
                    <InfoP>Lorem ipsum dolor</InfoP>
                </InfoText>

                <InfoText>
                    <InfoHead>5000+</InfoHead>
                    <InfoP>Lorem ipsum dolor</InfoP>
                </InfoText>
                
                <InfoText>
                    <InfoHead>7000+</InfoHead>
                    <InfoP>Lorem ipsum dolor</InfoP>
                </InfoText>
            </InfoWrapper>
            
        </InfoContainer>
    )
}

export default Info2
