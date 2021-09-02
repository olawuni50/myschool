import React from 'react'
import { CardContainer, CardWrapper, CardItem, CardImage,
CardHeading, CardP } from './CardElement'
import { FaChalkboardTeacher, FaDiscourse } from 'react-icons/fa'
import {ImBooks} from "react-icons/im"
import {BiCertification} from "react-icons/bi"

const Cards = () => {
    return (
        <CardContainer>
            <CardWrapper>

                <CardItem data-aos="fade-up">
                    <CardImage>
                        <FaChalkboardTeacher/>
                        </CardImage>
                    <CardHeading>Certified Teachers</CardHeading>
                    <CardP>We have qualified teachers with years of teaching experience</CardP>
                </CardItem>

                <CardItem data-aos="fade-up">
                <CardImage>
                        <FaDiscourse/>
                        </CardImage>
                    <CardHeading>Trending Courses</CardHeading>
                    <CardP>Courses we offer are up to date and top notch</CardP>
                </CardItem>

                
                <CardItem data-aos="fade-up">
                    <CardImage>
                        <ImBooks/>
                        </CardImage>
                    <CardHeading>Books & Library</CardHeading>
                    <CardP>We have state of the art Library with relevant Books that will help your children learn 
                        quickly
                    </CardP>
                </CardItem>

                <CardItem data-aos="fade-up">
                <CardImage>
                        <BiCertification/>
                        </CardImage>
                    <CardHeading>Certification</CardHeading>
                    <CardP>We offer certified courses in computer, art and music, vocational training</CardP>
                </CardItem>

            </CardWrapper>
        </CardContainer>
    )
}

export default Cards
