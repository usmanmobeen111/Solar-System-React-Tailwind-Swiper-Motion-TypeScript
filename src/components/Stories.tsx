
import { motion, type Variants } from "framer-motion"
import { FaRegLightbulb } from "react-icons/fa"
import { FaHouse } from "react-icons/fa6"
import { PiSpeedometerBold } from "react-icons/pi"
import StoriesCard from "./StoriesCard"

const storiesData = [
  {
    img: "/stories1.jpg",
    title: "Energy independence",
    des: "Explore how solar can help you take greater control of your electricity supply.",
    icon: PiSpeedometerBold,
  },
  {
    img: "/stories2.jpg",
    title: "Everyday savings",
    des: "Understand the relationship between energy consumption, system size, and potential savings.",
    icon: FaRegLightbulb,
  },
  {
    img: "/stories3.jpg",
    title: "Ready for tomorrow",
    des: "Discover how modern energy technology can support your evolving needs.",
    icon: FaHouse,
  },
]

const cardsContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.15,
    },
  },
}

const Stories = () => {
  return (
    <section className="relative w-full py-24 sm:py-32 lg:py-36 px-4 sm:px-6 lg:px-8 bg-linear-to-b bg-gray-50 overflow-hidden  ">
      {/* Ambient background solar glow */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-160 h-80 bg-amber-400/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* Header Container */}
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center mb-16 sm:mb-20 lg:mb-24">
        {/* Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 shadow-[0_0_15px_rgba(245,158,11,0.12)] mb-5"
        >
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse shadow-[0_0_8px_#f59e0b]" />
          <h3 className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-amber-700">
            A CLEANER WAY FORWARD
          </h3>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 leading-[1.12]"
        >
          Discover a brighter{" "}
          <span className="bg-linear-to-r from-amber-500 via-amber-600 to-orange-500 bg-clip-text text-transparent">
            energy
          </span>{" "}
          future.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mt-5 text-sm sm:text-base md:text-lg text-neutral-500 font-poppins max-w-2xl leading-relaxed"
        >
          See how smart, modern solar technology empowers homeowners to take control of their power and build a sustainable tomorrow.
        </motion.p>
      </div>

      {/* Cards Deck with Stagger Animation and Cool Spacing */}
      <motion.div
        variants={cardsContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="w-full max-w-[85vw] xl:max-w-7xl mx-auto flex flex-col md:flex-row items-stretch justify-center gap-6 lg:gap-8 xl:gap-10"
      >
        {storiesData.map((item, idx) => (
          <StoriesCard
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

export default Stories