import React from 'react'
import {HeroContainer, HeroWrapper, HeroText, HeroContent, HeroP} from "./HeroLoginElement"

const HeroLogin = () => {
    return (
        <HeroContainer>
            <HeroWrapper>
            <HeroContent>
                <HeroText>LOGIN</HeroText>                
                <HeroP>Login to access your profile</HeroP>
                </HeroContent>
            </HeroWrapper>
        </HeroContainer>
    )
}

export default HeroLogin

