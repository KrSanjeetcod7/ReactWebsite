import React from 'react';
import animate from '../src/images/animate.jpg';
import Common from './Common';

const Home = () => {
    return (
        <>
            <Common
            name="Grow Your Business With Us" 
            imgsrc={animate} 
            visit='/service' 
            btname="Get Started"
             />
        </>
    )
}

export default Home;
