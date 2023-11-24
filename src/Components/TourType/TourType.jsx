// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';

// import './tourtype.css'

// // import required modules
// import { EffectCoverflow, Pagination } from 'swiper/modules';


// const TourType = () => {
//     return (
//         <div> 
//              <Swiper
//         effect={'coverflow'}
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView={'auto'}
//         initialSlide={2}
//         coverflowEffect={{
//           rotate: 50,
//           stretch: 0,
//           depth: 100,
//           modifier: 1,
//           slideShadows: true,
//         }}
//         pagination={true}
//         modules={[EffectCoverflow, Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide className='mySwiperSlide'>
//          <div className='relative'>
//          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
//          <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl '>Hiking</h1>
//          </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className='relative'>
//           <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
//           <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl '>Sports</h1>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className='relative'>
//           <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
//           <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl '>Walking</h1>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className='relative'>
//           <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
//           <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl '>AirRides</h1>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className='relative'>
//           <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
//           <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl '>Wildlife</h1>
//           </div>
//         </SwiperSlide>
//       </Swiper>
//         </div>
//     );
// };

// export default TourType;