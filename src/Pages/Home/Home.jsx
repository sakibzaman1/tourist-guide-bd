import React from 'react';
import Banner from '../../Components/banner';
import TravelTab from '../../Components/TravelTab';
import TourType from '../../Components/TourType/TourType';
import Stories from '../../Components/Stories/Stories';
import { Helmet } from 'react-helmet-async';
// import TourType from '../../Components/TourType/TourType';



const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Tourist Guide BD | HOME</title>
            </Helmet>
            <section>
                <Banner></Banner>
            </section>
            <section>
            <h1 className='mt-20 mb-10 font-Ephesis text-5xl text-center'>Tourism & Travel</h1>
                <TravelTab></TravelTab>
            </section>
            <section>
                <h1 className='mt-20 mb-10 font-Ephesis text-5xl text-center'>Tour Types</h1>
                <TourType></TourType>
            </section>
            <section>
            <h1 className='mt-20 mb-10 font-Ephesis text-5xl text-center'>Travelers Story</h1>
            <Stories></Stories>
            </section>
        </div>
    );
};

export default Home;