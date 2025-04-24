import React from 'react';
import Banner from '../../Components/banner';
import TravelTab from '../../Components/TravelTab';
import TourType from '../../Components/TourType/TourType';
import Stories from '../../Components/Stories/Stories';
import { Helmet } from 'react-helmet-async';
// import TourType from '../../Components/TourType/TourType';
// motion 
import {motion} from 'framer-motion'
// variants
import {fadeIn} from '../../Components/Animation/variants'



const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Smart Campus | HOME</title>
            </Helmet>
            <section>
                <Banner></Banner>
            </section>
            <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false,amount: 0.7}}
            >
            <h1 className='mt-20 mb-10 font-Ephesis text-5xl text-center'>More About Us</h1>
                <TravelTab></TravelTab>
            </motion.div>
            <motion.div
            variants={fadeIn("", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false,amount: 0.7}}
            >
                <h1 className='mt-20 mb-10 font-Ephesis text-5xl text-center'>Courses We Offer</h1>
                <TourType></TourType>
            </motion.div>
            <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false,amount: 0.7}}
            >
            <h1 className='mt-20 mb-10 font-Ephesis text-5xl text-center'>Success Stories</h1>
            <Stories></Stories>
            </motion.div>
        </div>
    );
};

export default Home;