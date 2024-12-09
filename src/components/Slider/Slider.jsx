import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import "./slider.css";

const Slider = () => {
  return (
    <div className=" border p-10">
      <Swiper 
      slidesPerView={1}
      spaceBetween={10}
      className="h-96  "
      navigation={true} 
      modules={[Navigation,Autoplay,Pagination]} 
      loop={true}
      autoplay={
          {delay:1800}
        }
      pagination={{clickable: true}}
      >
        <SwiperSlide className="w-full">
          <div className="slide slide1 ">
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide2">
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide3">
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide4">
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
