// import Swiper core and required modules
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function SwipeSlide() {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={"auto"}
      coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5 }}
      width={"auto"}
      modules={[Pagination, Navigation]}
      pagination={{ el: "", clickable: true }}
      navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn", clickable: true }}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <button className="next-btn">next</button>
      <button className="prev-btn">prev</button>
    </Swiper>
  );
}
