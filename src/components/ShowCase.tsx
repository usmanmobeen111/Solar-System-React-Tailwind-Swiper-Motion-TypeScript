import { motion } from 'framer-motion'
import { FaCheck } from 'react-icons/fa'

const showCaseData = {
  eybrow: "MORE ENERGY. MORE SAVINGS.",
  heading: "Make Every Ray of Sunlight Work Harder.",
  description:
    "Your home receives hours of sunlight every day. A well-designed solar system can turn that resource into electricity for your everyday needs. We help you explore solutions that fit your property, energy consumption, and long-term goals.",
  points: [
    "Solutions tailored to your property.",
    "System planning focused on performance and reliability."
  ]
}

const ShowCase = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden flex flex-col lg:flex-row items-stretch">
      {/* Left Column (w-1/2): Spaced Text & Beautiful Feature Points */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center py-16 sm:py-20 lg:py-28 px-6 sm:px-12 md:px-16 lg:pl-16 xl:pl-28 lg:pr-10 xl:pr-16">
        <div className="w-full max-w-xl mx-auto lg:mx-0">
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
              {showCaseData.eybrow}
            </h3>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.15]"
          >
            {showCaseData.heading}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg text-neutral-600 font-poppins leading-relaxed"
          >
            {showCaseData.description}
          </motion.p>

          {/* Points list styled as premium feature cards */}
          <div className="w-full flex flex-col gap-3.5 sm:gap-4 mt-8 sm:mt-10">
            {showCaseData.points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                className="group flex items-center gap-4 p-3.5 sm:p-4 rounded-2xl bg-neutral-50/80 hover:bg-amber-50/40 border border-neutral-200/80 hover:border-amber-400/40 shadow-xs hover:shadow-md hover:shadow-amber-500/5 transition-all duration-300"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-linear-to-br from-amber-400 to-amber-500 text-white flex items-center justify-center shrink-0 shadow-sm shadow-amber-500/25 transition-transform duration-300">
                  <FaCheck className="text-xs sm:text-sm" />
                </div>
                <p className="text-sm sm:text-base font-medium text-neutral-800 group-hover:text-neutral-900 transition-colors">
                  {point}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column (w-1/2): Full-size Edge-to-Edge Image with No Margin, No Roundness, No Spacing, No Hover Scaling */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className="w-full lg:w-1/2 relative min-h-95 sm:min-h-115 lg:min-h-auto"
      >
        <img
          src="/showcase.jpg"
          alt="Solar System Showcase"
          className="lg:absolute lg:inset-0 w-full h-full object-cover object-center block"
        />
      </motion.div>
    </section>
  )
}

export default ShowCase