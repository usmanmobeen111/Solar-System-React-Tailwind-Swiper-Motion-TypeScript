import type { IconType } from "react-icons"
import { motion, type Variants } from "framer-motion"

interface StoriesCardProps {
  img: string
  title: string
  des: string
  icon: IconType
  index?: number
}

export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 45, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
}

const StoriesCard = ({ img, title, des, icon: Icon, index }: StoriesCardProps) => {
  return (
    <motion.div
      variants={cardVariants}
      className="relative flex-1 min-w-0 w-full aspect-3/4 min-h-120 sm:min-h-130 lg:min-h-140 rounded-3xl border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.08)] flex flex-col justify-end p-6 sm:p-7 md:p-8 overflow-hidden select-none"
    >
      {/* Background Image */}
      <img
        src={img}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover rounded-3xl pointer-events-none"
      />

      {/* Dark Gradient Overlay for Contrast */}
      <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/60 to-black/20 pointer-events-none rounded-3xl opacity-75" />

      {/* Bottom Content Section */}
      <div className="relative z-10 flex flex-col items-start w-full">
        {/* Icon & Index Badge */}
        <div className="flex items-center justify-between w-full mb-4">
          <div className="w-12 h-12 rounded-2xl bg-white/12 backdrop-blur-md border border-white/20 shadow-sm flex items-center justify-center text-amber-400">
            <Icon size={24} />
          </div>
          {index !== undefined && (
            <span className="text-xs font-semibold tracking-widest text-white/60 uppercase">
              0{index}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug drop-shadow-sm">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-2.5 text-sm sm:text-base text-neutral-200/90 font-poppins leading-relaxed">
          {des}
        </p>
      </div>
    </motion.div>
  )
}

export default StoriesCard

