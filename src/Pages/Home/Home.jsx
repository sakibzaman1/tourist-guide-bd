import React from 'react';
import Banner from '../../Components/banner';
import TravelTab from '../../Components/TravelTab';
// import TourType from '../../Components/TourType/TourType';



const Home = () => {
    return (
        <div>
            <section>
                <Banner></Banner>
            </section>
            <section>
                <TravelTab></TravelTab>
            </section>
            <section>
                <h1 className='mt-20 mb-10 font-Ephesis text-5xl text-center'>Tour Types</h1>
                {/* <TourType></TourType> */}
            </section>
        </div>
    );
};

export default Home;