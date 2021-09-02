import React from 'react'
import { InfoContainer, InfoWrapper, InfoText, InfoHeading,
InfoP, InfoImage, Image, InfoQuote1, InfoQuote, InfoQuoteA} from './InfoElement'
import img from "../../Images/s8.png"

const Info = () => {
    return (
        <InfoContainer >
            <InfoWrapper>
                <InfoText data-aos="fade-up">
                    <InfoHeading> <span style={{color:"#05386B"}}> Welcome </span> To Our <span style={{color:"#05386B"}}>School</span></InfoHeading>
                    <InfoP>At <span style={{color:"#05386B", fontSize:"1.2rem"}}>Excel Standard Group of Schools</span>, Education is light, we produce the leaders of tomorrow
                        we make hay while the sunshine, education is the bedrock of wisdom, and is the most powerful weapon
                         which you can use to change the world.  Give a man a fish and you feed him for a day; teach a man
                     to fish and you feed him for a lifetime. 
                    </InfoP>
                    <InfoQuote data-aos="fade-left">
                    <InfoQuote1>
                    Education is the passport to the future, for tomorrow belongs to those who prepare for it today; 
                    <span style={{fontStyle:"normal"}}> ...Malcolm X</span>                                         
                    </InfoQuote1>
                    </InfoQuote>

                    <InfoQuoteA data-aos="fade-left">
                    <InfoQuote1>
                    The secret of getting ahead is getting started. The secret of 
                    getting started is breaking your complex overwhelming tasks into small manageable
                    tasks, and then starting on the first one;
                    <span style={{fontStyle:"normal"}}> ...Mark Twain</span>                                         
                    </InfoQuote1>
                    </InfoQuoteA>
                </InfoText>
                <InfoImage data-aos="fade-left">
                    <Image src={img} alt="student"/>
                </InfoImage>
            </InfoWrapper>
        </InfoContainer>
    )
}

export default Info
