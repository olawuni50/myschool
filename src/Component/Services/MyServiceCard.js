import React from 'react'
import { ServiceCards, ServiceCard, ServiceCardHead, ServiceCardP,
 } from './MyServiceCardElement'
 import {GiSchoolBag} from "react-icons/gi"
import {AiFillSkin} from "react-icons/ai"
import {MdChildCare, MdSchool} from "react-icons/md"
import {GiOfficeChair} from "react-icons/gi"
import {SiJameson} from "react-icons/si"

const MyServiceCard = () => {
    return (
        <ServiceCards>

                <ServiceCard data-aos="flip-right">
                        <ServiceCardHead> <span style={{fontSize:"25px", padding:"5px"}}> <MdChildCare /></span> KindaGarten Section</ServiceCardHead>
                        <ServiceCardP>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Aliquam enim iure alias nulla mollitia soluta hic distinctio
                 corporis aspernatur possimus?</ServiceCardP>
                    </ServiceCard>


                    <ServiceCard data-aos="flip-right">
                        <ServiceCardHead> <span style={{fontSize:"25px", padding:"5px"}}><MdSchool /></span> Primary Section</ServiceCardHead>
                        <ServiceCardP>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Aliquam enim iure alias nulla mollitia soluta hic distinctio
                 corporis aspernatur possimus?</ServiceCardP>
                    </ServiceCard>

                    <ServiceCard data-aos="flip-right">
                        <ServiceCardHead> <span style={{fontSize:"25px", padding:"5px"}}><GiSchoolBag /></span> Secondary Section</ServiceCardHead>
                        <ServiceCardP>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Aliquam enim iure alias nulla mollitia soluta hic distinctio
                 corporis aspernatur possimus?</ServiceCardP>
                    </ServiceCard>

                    <ServiceCard data-aos="flip-right">
                        <ServiceCardHead> <span style={{fontSize:"25px", padding:"5px"}}><AiFillSkin /></span> WAEC/NECO</ServiceCardHead>
                        <ServiceCardP>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Aliquam enim iure alias nulla mollitia soluta hic distinctio
                 corporis aspernatur possimus?</ServiceCardP>
                    </ServiceCard>


                    <ServiceCard data-aos="flip-right">
                        <ServiceCardHead> <span style={{fontSize:"25px", padding:"5px"}}><SiJameson /></span> JAMB Registration</ServiceCardHead>
                        <ServiceCardP>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Aliquam enim iure alias nulla mollitia soluta hic distinctio
                 corporis aspernatur possimus?</ServiceCardP>
                    </ServiceCard>

                    <ServiceCard data-aos="flip-right">
                        <ServiceCardHead> <span style={{fontSize:"25px", padding:"5px"}}><GiOfficeChair /></span> Counselling and Guidance</ServiceCardHead>
                        <ServiceCardP>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Aliquam enim iure alias nulla mollitia soluta hic distinctio
                 corporis aspernatur possimus?</ServiceCardP>
                    </ServiceCard>

                </ServiceCards>
    )
}

export default MyServiceCard
