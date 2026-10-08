

interface HeroCardProps {
  img: string;
  title: string;
  des: string;
}

const HeroCrad = ({ img, title, des }: HeroCardProps) => {
  return (
    <div className=" h-40! relative flex items-center gap-4   rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-300 shadow-xl overflow-hidden group select-none ">
      {/* Square image covering start of card */}
      <div className="w-40! h-40! aspect-square rounded-xl overflow-hidden shrink-0 bg-white/5 border border-white/10">
        {img ? (
          <img
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
      <div className="flex flex-col justify-center flex-1 min-w-0 pr-1">
        <h4 className="text-2xl  font-bold text-white tracking-wide group-hover:text-amber-300 transition-colors truncate">
          {title}
        </h4>
        <p className="text-lg text-neutral-300 line-clamp-2 leading-relaxed mt-1">
          {des}
        </p>
      </div>
    </div>
  );
};

export default HeroCrad;