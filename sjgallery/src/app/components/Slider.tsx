'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import { images } from '../../../lib/images';
import Image from "next/image";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Slider = () => {
  return (
    <Swiper
      navigation
      // pagination={{ type: 'fraction'}}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Navigation]}
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
          <div style={{ display: 'flex', justifyContent: 'end'}}>
            <p><i>{image.title}</i>, {image.artist}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;