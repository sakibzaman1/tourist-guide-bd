import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import coxs_bazar from '../assets/Banner/coxs_bazar.jpg'
import sundarban from '../assets/Banner/sundarban.jpg'
import sunamganj from '../assets/Banner/sunamganj.jpg'
import sajek from '../assets/Banner/sajek.jpg'
import rangamati from '../assets/Banner/rangamati.jpg'
import kuakata from '../assets/Banner/kuakata.jpg'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';



const Banner = () => {
    return (
        <div className=''>
          <Swiper
            spaceBetween={30}
            effect={'fade'}
            navigation={true}
            autoplay={true}
            pagination={{
              clickable: true,
            }}
            modules={[EffectFade, Navigation, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img className='lg:min-h-screen w-full' src={sundarban} />
            </SwiperSlide>
            <SwiperSlide>
              <img className='lg:min-h-screen w-full' src={sajek} />
            </SwiperSlide>
            <SwiperSlide>
              <img className='lg:min-h-screen w-full' src={sunamganj} />
            </SwiperSlide>
            <SwiperSlide>
              <img className='lg:min-h-screen w-full' src={kuakata} />
            </SwiperSlide>
            <SwiperSlide>
              <img className='lg:min-h-screen w-full' src={coxs_bazar} />
            </SwiperSlide>
            {/* <SwiperSlide>
              <img className='min-h-screen w-full' src={rangamati} />
            </SwiperSlide> */}
          </Swiper>
          {/* <div>
            <h1 className=''>Tourist Guide</h1>
          </div> */}
        </div>
      );
};

export default Banner;