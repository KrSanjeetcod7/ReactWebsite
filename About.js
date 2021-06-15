import React from 'react';
import about from './images/about.jpg';
import Common from './Common';

const About = () => {
    return (
        <>
         <Common 
         name="Welcome To About Us Page"
         imgsrc={about} 
         visit='/contact' 
         btname="Contact Now"     
         />
        </>
    )
}

export default About;
