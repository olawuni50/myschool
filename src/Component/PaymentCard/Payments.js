import React from 'react'
import { PaymentContainer, PaymentWrapper, PaymentCards, PaymentHead,
PaymentHeading, PaymentAmount, PaymentLists, PaymentList, PaymentBtn, Button,
Pay, PaymentP} from './PaymentElement'
import {GiCheckMark} from 'react-icons/gi'

const Payments = () => {   

    return (
        <PaymentContainer>
            <PaymentWrapper>
                <PaymentCards data-aos="flip-right">
                    <PaymentHead>
                    <PaymentHeading>Secondary Section</PaymentHeading>
                    <Pay>
                    <PaymentAmount>$25000</PaymentAmount>
                    <PaymentP>Per term</PaymentP>
                    </Pay>
                    </PaymentHead>
                    <PaymentLists>
                        <PaymentList> <span style={{color:"#C3073F"}}> <GiCheckMark/> </span> Tuition Fee </PaymentList>
                        <PaymentList> <span style={{color:"#C3073F"}}>  <GiCheckMark/> </span> Examination Fee</PaymentList>
                        <PaymentList> <span style={{color:"#C3073F"}}> <GiCheckMark/> </span> Cultural Day</PaymentList>
                        <PaymentList> <span style={{color:"#C3073F"}}> <GiCheckMark/> </span> Lesson Fee</PaymentList>
                    </PaymentLists>
                    <PaymentBtn>
                        <Button to="/payment-form">Pay Now</Button>
                    </PaymentBtn>
                </PaymentCards>

                <PaymentCards data-aos="flip-right">
                    <PaymentHead>
                    <PaymentHeading>Junior Section</PaymentHeading>
                    <Pay>
                    <PaymentAmount>$28000</PaymentAmount>
                    <PaymentP>Per term</PaymentP>
                    </Pay>
                    
                    </PaymentHead>
                    <PaymentLists>
                    <PaymentList> <span style={{color:"#C3073F"}}> <GiCheckMark/> </span> Tuition Fee </PaymentList>
                        <PaymentList> <span style={{color:"#C3073F"}}>  <GiCheckMark/> </span> Examination Fee</PaymentList>
                        <PaymentList> <span style={{color:"#C3073F"}}> <GiCheckMark/> </span> Cultural Day</PaymentList>
                        <PaymentList> <span style={{color:"#C3073F"}}> <GiCheckMark/> </span> Lesson Fee</PaymentList>
                    </PaymentLists>
                    <PaymentBtn>
                        <Button to="payment-form">Pay Now</Button>
                    </PaymentBtn>
                </PaymentCards>

                <PaymentCards data-aos="flip-right">
                    <PaymentHead>
                    <PaymentHeading>Primary Section</PaymentHeading>
                    <Pay>
                    <PaymentAmount>$10000</PaymentAmount>
                    <PaymentP>Per term</PaymentP>
                    </Pay>

                    </PaymentHead>
                    <PaymentLists>
                    <PaymentList> <span style={{color:"#C3073F"}}> <GiCheckMark/> </span> Tuition Fee </PaymentList>
                        <PaymentList> <span style={{color:"#C3073F"}}>  <GiCheckMark/> </span> Examination Fee</PaymentList>
                        <PaymentList> <span style={{color:"#C3073F"}}> <GiCheckMark/> </span> Cultural Day</PaymentList>
                        <PaymentList> <span style={{color:"#C3073F"}}> <GiCheckMark/> </span> Lesson Fee</PaymentList>
                    </PaymentLists>
                    <PaymentBtn>
                        <Button to="payment-form">Pay Now</Button>
                    </PaymentBtn>
                </PaymentCards>
            
            </PaymentWrapper>
        </PaymentContainer>
    )
}

export default Payments
