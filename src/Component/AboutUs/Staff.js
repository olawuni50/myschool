import React from 'react'
import { StaffContainer, StaffWrapper, StaffContent, StaffImage, Image,
StaffP, StaffNote } from './StaffElement'
import img1 from "../../Images/p3.jpg"
import img2 from "../../Images/p4.jpg"
import img3 from "../../Images/p2.jpg"

const Staff = () => {
    return (
        <StaffContainer>
            <StaffWrapper>
                <StaffContent>
                    <StaffImage>
                        <Image src={img1}/>
                        </StaffImage>
                        <StaffP>Founder/Proprietor</StaffP>
                        <StaffNote>Employment respond commiteed meaningful fight against oppression social
                            challenges rufal legal aid goernance. Meaningful work, impolementation, process cooperation,
                            campaign inspire. Advancement, promising development John Lennon, our ambitions involvement
                            underpriviledged billinaire philatropy.
                        </StaffNote>
                
                </StaffContent>

                <StaffContent>
                    <StaffImage>
                        <Image src={img2}/>
                        </StaffImage>
                        <StaffP>Proprietress</StaffP>
                        <StaffNote>Employment respond commiteed meaningful fight against oppression social
                            challenges rufal legal aid goernance. Meaningful work, impolementation, process cooperation,
                            campaign inspire. Advancement, promising development John Lennon, our ambitions involvement
                            underpriviledged billinaire philatropy.
                        </StaffNote>
                   
                </StaffContent>

                <StaffContent>
                    <StaffImage>
                        <Image src={img3}/>
                        </StaffImage>
                        <StaffP>Principal</StaffP>
                        <StaffNote>Employment respond commiteed meaningful fight against oppression social
                            challenges rufal legal aid goernance. Meaningful work, impolementation, process cooperation,
                            campaign inspire. Advancement, promising development John Lennon, our ambitions involvement
                            underpriviledged billinaire philatropy.
                        </StaffNote>
                    
                </StaffContent>

                <StaffContent>
                    {/* <StaffImage>
                        <Image src={img4}/>
                        </StaffImage> */}
                        <StaffP>Vice Principal</StaffP>
                        <StaffNote>Employment respond commiteed meaningful fight against oppression social
                            challenges rufal legal aid goernance. Meaningful work, impolementation, process cooperation,
                            campaign inspire. Advancement, promising development John Lennon, our ambitions involvement
                            underpriviledged billinaire philatropy.
                        </StaffNote>
                    
                </StaffContent>


            </StaffWrapper>
        </StaffContainer>

    )
}

export default Staff
