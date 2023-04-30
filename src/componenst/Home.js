import React from 'react'
import HeroSection from './HeroSection';
import Certificate from './Certificates';
import Team from './Team';
import CustomerReview from './CustomerReview';
// import Search from './Search';



const Home=()=>{
    return <>
        <HeroSection />
        <Team />
        <CustomerReview />
        <Certificate />
        {/* <Search /> */}
    </>
}


export default Home;