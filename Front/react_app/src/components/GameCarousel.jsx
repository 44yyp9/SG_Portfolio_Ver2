import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Swiper の CSS
import "swiper/css";
import "swiper/css/pagination";

export default function GameCarousel({ images }) {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 3000 }}
      loop={true}
      pagination={{ clickable: true }}
      spaceBetween={30}
      slidesPerView={1}
      style={{ width: "80%", margin: "0 auto", borderRadius: 10 }}
    >
      {images.map((img, i) => (
        <SwiperSlide key={i}>
          <img
            src={process.env.PUBLIC_URL + img}
            alt={`Game screenshot ${i + 1}`}
            style={{
              width: "100%",
              height: "350px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}