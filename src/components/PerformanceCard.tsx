import type { IconType } from "react-icons"

interface PerformanceCardProps {
  img: string
  title: string
  des: string
  icon: IconType
  index?: number
}

const PerformanceCard = ({ img, title, des, icon: Icon, index }: PerformanceCardProps) => {
  return (
    <div className="relative flex-1 min-w-0 w-full hover:grow-[1.25] h-80 sm:h-88 md:h-96 lg:h-100 rounded-3xl border border-neutral-200/90 bg-neutral-50 shadow-[0_4px_24px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.28)] flex flex-col justify-between p-6 sm:p-7 group overflow-hidden transition-all duration-500 ease-out cursor-pointer select-none">
      {/* Background Image on Hover */}
      <img
        src={img}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover rounded-3xl opacity-0 group-hover:opacity-100 scale-100 group-hover:scale-105 transition-all duration-700 ease-out pointer-events-none"
      />

      {/* Dark Gradient Overlay for Contrast on Hover */}
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" />

      {/* Giant Bottom-Right Watermark Icon (Appears only on Hover) */}
      <div className="absolute bottom-10 right-10 pointer-events-none text-white opacity-0 scale-75  group-hover:opacity-20 group-hover:scale-150 transition-all duration-500 ease-out z-10">
        <Icon size={140} />
      </div>

      {/* Top Section: Icon badge & Title */}
      <div className="relative z-10">
        <div className="flex items-center justify-between">
          {/* Top Badge: Visible by default, smoothly fades and shrinks away on hover */}
          <div className="w-14 h-14 rounded-2xl bg-white border border-neutral-200/70 shadow-sm flex items-center justify-center text-neutral-800 transition-all duration-400 ease-out origin-top-left group-hover:opacity-0 group-hover:scale-75 group-hover:-translate-y-3 pointer-events-none">
            <Icon size={26} className="text-neutral-800" />
          </div>

          {/* Index Counter Pill */}
          {index !== undefined && (
            <span className="text-xs font-semibold tracking-widest text-neutral-400/80 group-hover:text-amber-400/90 transition-colors duration-500 uppercase">
              0{index}
            </span>
          )}
        </div>

        {/* Title: Glides upward into top position when top icon disappears, changes to white */}
        <h1 className="text-xl md:text-2xl font-bold mt-4 text-neutral-900 group-hover:text-white group-hover:-translate-y-12 transition-all duration-500 ease-out leading-snug drop-shadow-sm group-hover:drop-shadow-md">
          {title}
        </h1>
      </div>

      {/* Bottom Section: Description (Smoothly fades and slides away on hover) */}
      <div className="relative z-10">
        <p className="text-neutral-500 font-poppins text-sm md:text-base leading-relaxed transition-all duration-400 ease-out group-hover:opacity-0 group-hover:translate-y-3 group-hover:pointer-events-none">
          {des}
        </p>
      </div>
    </div>
  )
}

export default PerformanceCard

