import { motion } from "framer-motion";

interface HeroCardProps {
  img: string;
  title: string;
  des: string;
}

const HeroCrad = ({ img, title, des }: HeroCardProps) => {
  return (
    <div
      className="h-40! relative flex items-center gap-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden select-none cursor-grab p-2"
    >
      {/* Square image covering start of card */}
      <div className="w-36! h-36! aspect-square rounded-xl overflow-hidden shrink-0 bg-white/5 border border-white/10 relative">
        {img ? (
          <motion.img
            initial={{ opacity: 0, scale: 1.15 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            src={img}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-xs text-neutral-300 font-medium">
            Solar
          </div>
        )}
      </div>

      {/* Right side text: title and description */}
      <div className="flex flex-col justify-center flex-1 min-w-0 pr-4">
        <h4 className="text-xl sm:text-2xl font-bold text-white tracking-wide truncate">
          {title}
        </h4>
        <p className="text-sm sm:text-base text-neutral-300 line-clamp-2 leading-relaxed mt-1">
          {des}
        </p>
      </div>
    </div>
  );
};

export default HeroCrad;