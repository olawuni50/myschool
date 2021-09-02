import React from 'react'
import {ServiceContainer, ServiceWrapper, ServiceContent, ServiceP,
ServiceImage, Image, ServiceHead} from "./ServiceElement" 
import img from "../../Images/s2.png"


const Service = () => {
    return (
        <ServiceContainer>
            <ServiceWrapper>
                <ServiceContent>
                    <ServiceP data-aos="fade-right"> 
                        <ServiceHead>We lay  good foundation for <span style={{color:"#05386B"}}> Greatness </span> for your<span style={{color:"#05386B"}}> Children</span></ServiceHead>
                    At Excel Standard Group of Schools, we provide quality education
                        that match with the world, we have conducive environment for your wards to learn
                        not that alone we have a computer lab that connect the student to the world.
                        Our aim is to give your ward quality education, and moral teachings. We have sound 
                         and qualify teachers thate help your ward to learn fast. Try us today
                    </ServiceP>

                    <ServiceImage data-aos="fade-left">
                         <Image src={img} alt="school"/>
                     </ServiceImage>
                </ServiceContent>

               
                

            </ServiceWrapper>
        </ServiceContainer>
    )
}

export default Service
