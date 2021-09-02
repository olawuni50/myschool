import React from 'react'
import HeroService from '../Component/Services/HeroService'
import MyServiceCard from '../Component/Services/MyServiceCard'
import Service from '../Component/Services/Service'
import ServiceFeature from '../Component/Services/ServiceFeature'

const MyService = () => {
    return (
        <>
        <HeroService/>
        <Service/>
        <ServiceFeature/>
        <MyServiceCard/>
       
        </>
    )
}

export default MyService
