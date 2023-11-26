import React from 'react';

const PackageGallery = ({image1, image2, image3}) => {
    return (
        <div className='mb-10'>
            <div className="carousel rounded-box">
  <div className="carousel-item">
    <img className='w-80 h-60' src={image1} alt="Burger" />
  </div> 
  <div className="carousel-item">
    <img className='w-80 h-60 ml-10' src={image2} alt="Burger" />
  </div> 
  <div className="carousel-item">
    <img className='w-80 h-60 ml-10' src={image3} alt="Burger" />
  </div> 
  
</div>
        </div>
    );
};

export default PackageGallery;