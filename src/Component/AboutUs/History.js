import React from 'react'
import { HistoryContainer, HistoryWrapper, HistoryHeading, HistoryText, HistoryP,
HistorySocial, HistoryImage, Image } from './HistoryElement'
import {FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa"
import img from "../../Images/book.png"

const History = () => {
    return (
        <HistoryContainer>
            <HistoryWrapper>
                <HistoryText data-aos="fade-left">
                    <HistoryHeading>About Us</HistoryHeading>
                    <HistoryP>We create a good and enabling environment for your wards and also, 
                        provide them with quality education that will make them to stand out from there mates
                        in other schools. We provide financial support for best student and also teach them morals.</HistoryP>
                        <HistorySocial>
                            <FaFacebook/>
                            <FaInstagram/>
                            <FaLinkedin/>
                        </HistorySocial>
                </HistoryText>
                <HistoryImage data-aos="fade-right">
                    <Image src={img} alt="book"/>
                </HistoryImage>
            </HistoryWrapper>
        </HistoryContainer>
    )
}

export default History
