import { motion, type Variants } from "framer-motion";

interface CTACardProps {
  img: string;
  title: string;
  des: string;
}

export const ctaCardVariants: Variants = {
  hidden: { opacity: 0, y: 35, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const CTACard = ({ img, title, des }: CTACardProps) => {
  return (
    <motion.div
      variants={ctaCardVariants}
      className="group relative flex items-center gap-4.5 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.25)] hover:bg-white/15 hover:border-white/30 transition-all duration-300 select-none p-3.5 sm:p-4"
    >
      {/* Square image on the left */}
      <div className="w-24 h-24 sm:w-28 sm:h-28 aspect-square rounded-2xl overflow-hidden shrink-0 bg-white/5 border border-white/15 relative shadow-inner">
        {img ? (
          <img
            src={img}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-xs text-neutral-300 font-medium">
            Solar
          </div>
        )}
      </div>

      {/* Right side text: title and description */}
      <div className="flex flex-col justify-center flex-1 min-w-0 pr-2">
        <h4 className="text-lg sm:text-xl font-bold text-white tracking-wide leading-snug truncate drop-shadow-sm group-hover:text-amber-300 transition-colors">
          {title}
        </h4>
        <p className="text-xs sm:text-sm text-neutral-200/90 font-poppins line-clamp-2 leading-relaxed mt-1.5">
          {des}
        </p>
      </div>
    </motion.div>
  );
};

export default CTACard;