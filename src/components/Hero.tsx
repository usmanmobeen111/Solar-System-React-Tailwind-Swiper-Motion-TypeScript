import { FaArrowRight, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Navbar from "./Navbar";
import HeroCrad from "./HeroCrad";
import { motion, type Variants } from "framer-motion";

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

const headlineWords = ["Power", "your", "future", "with", "solar", "energy."];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const headlineContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.28,
    },
  },
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 35, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const socialContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.7,
    },
  },
};

const socialItemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.6, y: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 360,
      damping: 22,
    },
  },
};

const swiperContainerVariants: Variants = {
  hidden: { opacity: 0, x: 55, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.0,
      delay: 0.45,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between p-6 sm:p-10 md:px-16 md:py-8 text-white overflow-hidden">
      {/* Background Image with subtle cinematic reveal zoom */}
      <motion.img
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        src="/hero.jpg"
        alt="Hero Image BG"
        className="absolute inset-0 h-full w-full object-cover -z-50 brightness-50"
      />

      {/* Atmospheric ambient solar glows */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-130 h-130 bg-amber-500/20 rounded-full blur-[140px] pointer-events-none -z-40"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2.2, delay: 0.4 }}
        className="absolute bottom-12 right-1/4 w-105 h-105 bg-amber-400/15 rounded-full blur-[130px] pointer-events-none -z-40"
      />

      <Navbar />

      <div className="flex flex-col justify-between gap-10 my-auto py-8 w-full">
        {/* Left hero content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start gap-4 sm:gap-6 max-w-3xl"
        >
          {/* Eyebrow badge */}
          <motion.div
            variants={fadeUpVariants}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 backdrop-blur-md shadow-[0_0_15px_rgba(251,191,36,0.15)]"
          >
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shadow-[0_0_8px_#fbbf24]" />
            <h3 className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-amber-300">
              Powering a brighter future.
            </h3>
          </motion.div>

          {/* Staggered word-by-word headline */}
          <motion.h1
            variants={headlineContainerVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-white drop-shadow-2xl flex flex-wrap gap-x-3 sm:gap-x-4.5 gap-y-1"
          >
            {headlineWords.map((word, i) => (
              <motion.span
                key={i}
                variants={wordVariants}
                className={
                  word.toLowerCase().includes("solar")
                    ? "text-amber-400 drop-shadow-[0_0_25px_rgba(251,191,36,0.45)] inline-block"
                    : "inline-block"
                }
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subheading with accent line */}
          <motion.p
            variants={fadeUpVariants}
            className="text-xs sm:text-sm md:text-base font-semibold tracking-[0.25em] text-neutral-300 uppercase drop-shadow flex items-center gap-3"
          >
            <span className="h-px w-8 bg-amber-400/60 inline-block" />
            SMARTER ENERGY. BETTER LIVING.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={fadeUpVariants} className="flex items-center gap-3 pt-2">
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="px-8 py-3.5 bg-white text-gray-900 text-sm sm:text-base font-semibold rounded-full shadow-[0_10px_25px_rgba(255,255,255,0.2)] hover:bg-neutral-100 hover:shadow-[0_15px_30px_rgba(255,255,255,0.3)] transition-shadow duration-300 cursor-pointer"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{  x: 3 }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              aria-label="Continue to get started"
              className="w-12 h-12 flex items-center justify-center bg-white text-gray-900 rounded-full shadow-[0_10px_25px_rgba(255,255,255,0.2)] hover:bg-neutral-100 hover:shadow-[0_15px_30px_rgba(255,255,255,0.3)] transition-shadow duration-300 cursor-pointer group"
            >
              <FaArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </motion.button>
          </motion.div>

          {/* Social Icons with Spring Cascade */}
          <motion.div variants={socialContainerVariants} className="flex items-center gap-3 pt-4 sm:pt-6">
            {[
              { Icon: FaTwitter, label: "Twitter", href: "#" },
              { Icon: FaInstagram, label: "Instagram", href: "#" },
              { Icon: FaLinkedin, label: "LinkedIn", href: "#" },
            ].map(({ Icon, label, href }) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                variants={socialItemVariants}
                whileHover={{  y: -3 }}
                whileTap={{ scale: 0.92 }}
                className="w-10 h-10 flex items-center justify-center text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 hover:border-white/60 rounded-full transition-colors duration-300 shadow-md cursor-pointer"
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right side Swiper card slider with smooth reveal */}
        <motion.div
          variants={swiperContainerVariants}
          initial="hidden"
          animate="visible"
          className="w-1/3 self-end"
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1.15}
            centeredSlides={true}
            grabCursor={true}
            loop={true}
            loopPreventsSliding={false}
            loopAdditionalSlides={2}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            pagination={{
              clickable: true,
            }}
            className="w-full pb-8 py-10! px-4!"
          >
            {[...heroCardData, ...heroCardData].map(({ img, title, des }, index) => (
              <SwiperSlide key={`${title}-${index}`}>
                <HeroCrad img={img} title={title} des={des} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;