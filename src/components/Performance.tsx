import { PiSpeedometerBold } from "react-icons/pi"
import PerformanceCard from "./PerformanceCard"
import { FaRegLightbulb } from "react-icons/fa"
import { FaHouse } from "react-icons/fa6"
import { motion } from "framer-motion"

const performanceData = [
  {
    img: "/performance1.jpg",
    title: "Making Every Sunbeam Count",
    des: "Turn sunlight into useful energy with a solar system designed around your property's energy requirements.",
    icon: PiSpeedometerBold,
  },
  {
    img: "/performance2.jpg",
    title: "Smarter Solar. Smarter Living.",
    des: "Understand your energy usage and make more informed decisions about how your home uses electricity.",
    icon: FaRegLightbulb,
  },
  {
    img: "/performance3.jpg",
    title: "Building a Brighter Tomorrow",
    des: "Choose an energy solution that supports a more efficient home and a more sustainable future.",
    icon: FaHouse,
  },
]

const Performance = () => {
  return (
    <section className="relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-white via-neutral-50/70 to-neutral-100/60 overflow-hidden">
      {/* Ambient background solar blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-87.5 bg-amber-400/12 blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* Header Container */}
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center mb-14 sm:mb-20">
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 shadow-[0_0_15px_rgba(245,158,11,0.12)] mb-5"
        >
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse shadow-[0_0_8px_#f59e0b]" />
          <h3 className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-amber-700">
            More Energy. More Savings.
          </h3>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 leading-[1.12]"
        >
          Experience the future of{" "}
          <span className="bg-linear-to-r from-amber-500 via-amber-600 to-orange-500 bg-clip-text text-transparent">
            solar power.
          </span>
        </motion.h1>

        {/* Subtitle description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mt-5 text-sm sm:text-base md:text-lg text-neutral-500 font-poppins max-w-2xl leading-relaxed"
        >
          Engineered to capture every photon, optimize real-time consumption, and empower your home with clean, intelligent energy.
        </motion.p>
      </div>

      {/* Cards Deck */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
        className="w-full max-w-[85vw] xl:max-w-7xl mx-auto flex flex-col md:flex-row items-stretch justify-center gap-6 lg:gap-8"
      >
        {performanceData.map((item, idx) => (
          <PerformanceCard
            key={idx}
            index={idx + 1}
            img={item.img}
            title={item.title}
            des={item.des}
            icon={item.icon}
          />
        ))}
      </motion.div>
    </section>
  )
}

export default Performance