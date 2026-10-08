import { useState } from "react";
import { FaSun } from "react-icons/fa";
import { motion, type Variants } from "framer-motion";

const navLinks = [
  { name: "Solar", href: "#" },
  { name: "Security", href: "#" },
  { name: "Projects", href: "#" },
  { name: "About", href: "#" },
  { name: "Contact", href: "#" },
];

const navContainerVariants: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const logoVariants: Variants = {
  hidden: { opacity: 0, x: -25, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const navPillVariants: Variants = {
  hidden: { opacity: 0, y: -15, scale: 0.95, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.06,
      delayChildren: 0.2,
    },
  },
};

const navItemVariants: Variants = {
  hidden: { opacity: 0, y: -8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const Navbar = () => {
  const [active, setActive] = useState("Solar");

  return (
    <motion.header
      variants={navContainerVariants}
      initial="hidden"
      animate="visible"
      className="flex items-center justify-between w-full relative z-20"
    >
      {/* Brand Logo */}
      <motion.div
        variants={logoVariants}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="flex items-center gap-2.5 cursor-pointer group"
      >
        <motion.div
          animate={{ rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="p-2 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.25)] group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(251,191,36,0.55)] group-hover:border-amber-400/60 transition-all duration-300"
        >
          <FaSun size={18} className="transition-transform duration-700 group-hover:rotate-180 hover:animate-pulse" />
        </motion.div>
        <h1 className="text-lg md:text-xl font-bold tracking-tight text-white transition-colors">
          Solar <span className="text-amber-400 font-semibold drop-shadow-[0_0_12px_rgba(251,191,36,0.4)]">System</span>
        </h1>
      </motion.div>

      {/* Nav Links */}
      <motion.ul
        variants={navPillVariants}
        className="hidden md:flex items-center gap-1.5 bg-neutral-950/70 p-1.5 rounded-full border border-white/10 backdrop-blur-xl shadow-2xl shadow-black/40 ring-1 ring-white/5"
      >
        {navLinks.map((l) => (
          <motion.li
            variants={navItemVariants}
            className="relative"
            key={l.name}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <a
              href={l.href}
              onClick={(e) => {
                e.preventDefault();
                setActive(l.name);
              }}
              className={`relative z-10 px-5 py-2 text-xs font-semibold tracking-wider uppercase transition-colors duration-300 block rounded-full select-none ${
                active === l.name
                  ? "text-neutral-950 font-bold"
                  : "text-neutral-300 hover:text-white"
              }`}
            >
              {l.name}
            </a>

            {active === l.name && (
              <motion.div
                layoutId="activePill"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                className="absolute inset-0 bg-white rounded-full z-0 shadow-[0_0_20px_rgba(255,255,255,0.4)]"
              />
            )}
          </motion.li>
        ))}
      </motion.ul>
    </motion.header>
  );
};

export default Navbar;