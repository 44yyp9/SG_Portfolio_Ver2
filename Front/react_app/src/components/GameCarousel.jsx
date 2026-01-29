import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Swiper の CSS
import "swiper/css";
import "swiper/css/pagination";

function resolvePublicUrlSrc(src) {
  if (!src) return src;
  // 外部URLはそのまま
  if (/^https?:\/\//i.test(src)) return src;

  const publicUrl = process.env.PUBLIC_URL || "";
  // 既に PUBLIC_URL が付いている場合は二重付与しない
  if (publicUrl && src.startsWith(publicUrl)) return src;
  return publicUrl + src;
}

export default function GameCarousel({
  images,
  height = 350,
  autoplay = true,
  onSlideChange,
}) {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={autoplay ? { delay: 3000, disableOnInteraction: false } : false}
      loop={images.length > 1}
      pagination={{ clickable: true }}
      spaceBetween={30}
      slidesPerView={1}
      style={{ width: "80%", margin: "0 auto", borderRadius: 10 }}
      onSlideChange={(swiper) => onSlideChange?.(swiper.realIndex)}
    >
      {images.map((img, i) => (
        <SwiperSlide key={i}>
          <img
            src={resolvePublicUrlSrc(img)}
            alt={`Game screenshot ${i + 1}`}
            style={{
              width: "100%",
              height: `${height}px`,
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}