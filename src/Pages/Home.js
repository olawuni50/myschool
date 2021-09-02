import React from 'react'
import Hero from '../Component/HeroSection/Hero'
import Info from '../Component/InfoSection/Info'
import Cards from '../Component/Card/Cards'
import Contact from '../Component/Contacts/Contact'
// import Footers from '../Component/Footer/Footers'
import Payments from '../Component/PaymentCard/Payments'
import ImageSlider from '../Component/Slider/ImageSlider'
import { SliderData } from '../Component/Slider/SliderData'
// import Info2 from '../Component/InfoReading/Info2'




const Home = () => {
    return (
        <>
        <Hero/>
        <Info/>
        {/* <Info2/> */}
        <Cards/>
        <Payments/>
        <ImageSlider slides={SliderData}/>
        <Contact/>
        
        </>
        
    )
}

export default Home
