import React from 'react'
import { ServiceFeatured,ServiceWrapper, ServiceContent, ServiceHead,
ServiceP, ServiceImage, Image, Button } from './ServiceFeatureElement'
import {Link} from "react-router-dom"
import img from "../../Images/7.1.png"

const ServiceFeature = () => {
    return (
        <ServiceFeatured>
            <ServiceWrapper>
                <ServiceContent data-aos="fade-right">
                    <ServiceHead>Don't wast time in COVID-19 pandemic, Develop your skills</ServiceHead>
                    <ServiceP>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Aliquam enim iure alias nulla mollitia soluta hic distinctio
                 corporis aspernatur possimus?</ServiceP>
                 <Link to="/sign-up">
                 <Button>Get Started</Button>
                 </Link>
                </ServiceContent>

                <ServiceImage data-aos="fade-left">
                    <Image src={img} alt="image"/>
                </ServiceImage>
            </ServiceWrapper>
        </ServiceFeatured>
    )
}

export default ServiceFeature
