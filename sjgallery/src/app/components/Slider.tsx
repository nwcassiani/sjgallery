'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import { images } from '../../../lib/images';
import Image from "next/image";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Slider = () => {
  return (
    <Swiper
      navigation
      pagination={{ type: 'fraction'}}
      modules={[Navigation, Pagination]}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="home-image" >
            <Image
              src={image.src}
              width={0}
              height={0}
              sizes="100vw"
              alt={image.alt}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;