import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import coxs_bazar from '../assets/Banner/uni-1.jpg';
import sundarban from '../assets/Banner/uni-2.jpg';
import sunamganj from '../assets/Banner/uni-3.jpg';
import sajek from '../assets/Banner/uni-4.jpg';
import kuakata from '../assets/Banner/uni-5.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

// Custom CSS for text animations
const textStyles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: '#fff',
  fontSize: '4rem',
  fontWeight: 'bold',
  textShadow: '2px 2px 10px rgba(0, 0, 0, 0.7)',
  zIndex: 10,
};

// Keyframes for the text animation
const keyframes = `
@keyframes bounceIn {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.8);
  }
  50% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.1);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}

@keyframes fadeZoomIn {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.5);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}

@keyframes textPop {
  0%, 100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.8);
  }
  50% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.2);
  }
  75% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(0.9);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}
`;

const Banner = () => {
  return (
    <div className='relative'>
      <style>{keyframes}</style> {/* Injecting keyframes */}
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
          <img className='lg:min-h-screen w-full ' src={sundarban} alt="Sundarban" />
          <div style={{ ...textStyles, animation: 'bounceIn 1.5s ease-out' }} className='font-Ephesis'></div>
        </SwiperSlide>
        <SwiperSlide>
          <img className='lg:min-h-screen w-full' src={sajek} alt="Sajek" />
          <div style={{ ...textStyles, animation: 'fadeZoomIn 1.5s ease-out' }} className='font-Ephesis'>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className='lg:min-h-screen w-full' src={sunamganj} alt="Sunamganj" />
          <div style={{ ...textStyles, animation: 'textPop 1.5s ease-in-out' }} className='font-Ephesis'>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className='lg:min-h-screen w-full' src={kuakata} alt="Kuakata" />
          <div style={{ ...textStyles, animation: 'bounceIn 1.5s ease-out' }} className='font-Ephesis'>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className='lg:min-h-screen w-full' src={coxs_bazar} alt="Cox's Bazar" />
          <div style={{ ...textStyles, animation: 'fadeZoomIn 1.5s ease-out' }}></div>
        </SwiperSlide>
        {/* Uncomment the following slide if needed */}
        {/* <SwiperSlide>
          <img className='lg:min-h-screen w-full' src={rangamati} alt="Rangamati" />
          <div style={{ ...textStyles, animation: 'textPop 1.5s ease-in-out' }}>Rangamati</div>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Banner;
