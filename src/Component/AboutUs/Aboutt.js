import React from 'react'
import { AboutContainer,AboutWrapper, AboutContent, AboutHeading, Aboutp } from './AboutElement'

const Aboutt = () => {
    return (
        <AboutContainer>
            <AboutWrapper>
                <AboutContent data-aos="fade-left">
                    <AboutHeading>WHY CHOOSE <span style={{color:"#05386B"}}> US </span>.</AboutHeading>
                    <Aboutp>We create a good and enabling environment for your wards and also, 
                        provide them with quality education that will make them to stand out from there mates
                        in other schools. We provide financial support for best student and also teach them morals.
                    </Aboutp>
                </AboutContent>
                <AboutContent data-aos="fade-right">
                <AboutHeading>OUR <span style={{color:"#05386B"}}> MISSION </span>.</AboutHeading>
                    <Aboutp>We create a good and enabling environment for your wards and also, 
                        provide them with quality education that will make them to stand out from there mates
                        in other schools. We provide financial support for best student and also teach them morals.
                    </Aboutp>
                </AboutContent>

                <AboutContent data-aos="fade-left">
                <AboutHeading>WHAT WE <span style={{color:"#05386B"}}> DO </span>.</AboutHeading>
                    <Aboutp>We create a good and enabling environment for your wards and also, 
                        provide them with quality education that will make them to stand out from there mates
                        in other schools. We provide financial support for best student and also teach them morals.
                    </Aboutp>
                </AboutContent>
            </AboutWrapper>
        </AboutContainer>
    )
}

export default Aboutt
