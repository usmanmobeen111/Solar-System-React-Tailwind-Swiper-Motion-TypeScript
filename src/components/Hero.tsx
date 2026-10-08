import { FaArrowRight, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"
import Navbar from "./Navbar"
import HeroCrad from "./HeroCrad"

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const heroCardData = [
  {
    img: "/cards/installation.jpg",
    title: "Solar Installation",
    des: "High-quality solar panel installation services",
  },
  {
    img: "/cards/repair.jpg",
    title: "Solar Repair",
    des: "Quick and reliable solar panel repair services",
  },
  {
    img: "/cards/maintenance.jpg",
    title: "Solar Maintenance",
    des: "Regular solar panel maintenance services",
  },
];

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between p-6 sm:p-10 md:px-16 md:py-8 text-white overflow-hidden">
      <img
        src="/hero.jpg"
        alt="Hero Image BG"
        className="absolute inset-0 h-full w-full object-cover -z-50 brightness-50"
      />
      <Navbar />

      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 my-auto py-8 w-full">
        {/* Left hero content */}
        <div className="flex flex-col items-start gap-4 sm:gap-6 max-w-3xl">
          <h3 className="text-xs sm:text-sm md:text-base font-medium tracking-[0.25em] uppercase text-amber-300 drop-shadow">
            Powering a brighter future.
          </h3>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] text-white drop-shadow-2xl">
            Power your future with solar energy.
          </h1>
          <p className="text-xs sm:text-sm md:text-base font-semibold tracking-[0.25em] text-neutral-300 uppercase drop-shadow">
            SMARTER ENERGY. BETTER LIVING.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <button className="px-7 py-3 bg-white text-gray-900 text-sm sm:text-base font-semibold rounded-full shadow-lg hover:bg-neutral-200 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer">
              Get Started
            </button>
            <FaArrowRight className="w-11 h-11 p-3 bg-white text-gray-900 rounded-full shadow-lg hover:bg-neutral-200 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer" />
          </div>
          <div className="flex items-center gap-3 pt-4 sm:pt-6">
            <FaTwitter className="w-10 h-10 p-2.5 text-white bg-white/10 hover:bg-white hover:text-black backdrop-blur-md border border-white/20 hover:border-white rounded-full transition-all duration-300 hover:scale-110 cursor-pointer shadow-md" />
            <FaInstagram className="w-10 h-10 p-2.5 text-white bg-white/10 hover:bg-white hover:text-black backdrop-blur-md border border-white/20 hover:border-white rounded-full transition-all duration-300 hover:scale-110 cursor-pointer shadow-md" />
            <FaLinkedin className="w-10 h-10 p-2.5 text-white bg-white/10 hover:bg-white hover:text-black backdrop-blur-md border border-white/20 hover:border-white rounded-full transition-all duration-300 hover:scale-110 cursor-pointer shadow-md" />
          </div>
        </div>

        {/* Right side Swiper card slider */}
        <div className="w-1/3">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1.2}
            centeredSlides={true}
            grabCursor={true}
            loop={heroCardData.length > 1}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
            }}
            className="w-full pb-8  py-10! px-4!"
          >
            {heroCardData.map(({ img, title, des }) => (
              <SwiperSlide key={title}>
                <HeroCrad img={img} title={title} des={des} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Hero