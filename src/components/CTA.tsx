import { FaArrowRight } from "react-icons/fa";
import { motion, type Variants } from "framer-motion";
import CTACard from "./CTACard";

const CTACardData = [
  {
    img: "/ctaCard1.jpg",
    title: "Solar, Simplified",
    des: "Understand the basics of turning sunlight into usable electricity.",
  },
  {
    img: "/ctaCard2.jpg",
    title: "From Plan to Power",
    des: "A look at the planning and installation process.",
  },
  {
    img: "/ctaCard3.jpg",
    title: "Energy for Tomorrow",
    des: "Explore the possibilities of modern energy technology.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 25, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const headlineContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.2,
    },
  },
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const cardsContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.35,
    },
  },
};

const headlineWords = [
  { word: "A", highlight: false },
  { word: "smarter", highlight: false },
  { word: "home", highlight: false },
  { word: "starts", highlight: false },
  { word: "with", highlight: false },
  { word: "smarter", highlight: true },
  { word: "energy.", highlight: true },
];

const CTA = () => {
  return (
    <section className="relative min-h-[85vh] w-full flex flex-col justify-center py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 text-white overflow-hidden">
      {/* Background Image with subtle cinematic zoom reveal */}
      <motion.img
        initial={{ opacity: 0, scale: 1.08 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        src="/CTA.jpg"
        alt="CTA Background"
        className="absolute inset-0 h-full w-full object-cover -z-50 brightness-[0.38]"
      />

      {/* Dark gradient overlay for deep contrast and glassmorphism pop */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/60 -z-40 pointer-events-none" />

      {/* Atmospheric ambient solar glows */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.35, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-160 h-160 bg-amber-500/20 rounded-full blur-[150px] pointer-events-none -z-30"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.25 }}
        viewport={{ once: true }}
        transition={{ duration: 2.2, delay: 0.3 }}
        className="absolute bottom-10 right-1/4 w-120 h-120 bg-orange-400/15 rounded-full blur-[140px] pointer-events-none -z-30"
      />

      <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center my-auto">
        {/* Centered CTA Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center text-center max-w-4xl mx-auto mb-14 sm:mb-18 lg:mb-20"
        >
          {/* Eyebrow badge */}
          <motion.div
            variants={fadeUpVariants}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 backdrop-blur-md shadow-[0_0_15px_rgba(251,191,36,0.15)] mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shadow-[0_0_8px_#fbbf24]" />
            <h3 className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-amber-300">
              POWERING WHAT'S NEXT
            </h3>
          </motion.div>

          {/* Staggered word-by-word headline - fully centered */}
          <motion.h1
            variants={headlineContainerVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] text-white drop-shadow-2xl flex flex-wrap justify-center gap-x-3 sm:gap-x-4.5 gap-y-2 text-center"
          >
            {headlineWords.map((item, idx) => (
              <motion.span
                key={idx}
                variants={wordVariants}
                className={
                  item.highlight
                    ? "bg-linear-to-r from-amber-400 via-amber-300 to-orange-400 bg-clip-text text-transparent"
                    : "text-white"
                }
              >
                {item.word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Centered CTA Buttons */}
          <motion.div
            variants={fadeUpVariants}
            className="flex items-center justify-center gap-3 pt-8"
          >
            <motion.button
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="px-9 py-3.5 bg-white text-neutral-900 text-sm sm:text-base font-semibold rounded-full shadow-[0_10px_25px_rgba(255,255,255,0.25)] hover:bg-neutral-100 hover:shadow-[0_15px_35px_rgba(255,255,255,0.35)] transition-all duration-300 cursor-pointer"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ x: 3, scale: 1.04 }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              aria-label="Continue to get started"
              className="w-12 h-12 flex items-center justify-center bg-white text-neutral-900 rounded-full shadow-[0_10px_25px_rgba(255,255,255,0.25)] hover:bg-neutral-100 hover:shadow-[0_15px_35px_rgba(255,255,255,0.35)] transition-all duration-300 cursor-pointer group"
            >
              <FaArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Bottom Cards Section with glassmorphism */}
        <motion.div
          variants={cardsContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="w-full max-w-[85vw] xl:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {CTACardData.map((cta) => (
            <CTACard
              key={cta.title}
              img={cta.img}
              title={cta.title}
              des={cta.des}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;