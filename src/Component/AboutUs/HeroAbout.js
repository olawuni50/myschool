import React from 'react'
import {HeroContainer, HeroWrapper, HeroText, HeroContent, HeroP} from "./HeroAboutElement"
// import img from "../../Images/s2.png"

const HeroAbout = () => {
    return (
        <HeroContainer>
            <HeroWrapper>
            <HeroContent>
                <HeroText>ABOUT US</HeroText>                
                <HeroP>Everything you need to know about our School</HeroP>
                </HeroContent>
            </HeroWrapper>
        </HeroContainer>
    )
}

export default HeroAbout

