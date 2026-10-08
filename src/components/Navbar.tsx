import { useState } from "react"
import { motion } from "framer-motion"
import { FaSun } from "react-icons/fa"

const navLinks = [
    { name: "Solar", href: "#"},
    { name: "Security", href: "#"},
    { name: "Projects", href: "#"},
    { name: "About", href: "#"},
    { name: "Contact", href: "#"},
]

const Navbar = () => {
    const [active, setActive]     = useState('Solar')
  return (
    <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2.5 cursor-pointer group">
            <div className="p-2 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.25)] group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(251,191,36,0.45)] transition-all duration-300">
                <FaSun size={18} className="transition-transform duration-700 group-hover:rotate-90" />
            </div>
            <h1 className="text-lg md:text-xl font-bold tracking-tight text-white transition-colors">
                Solar <span className="text-amber-400 font-semibold">System</span>
            </h1>
        </div>
        
        <ul className="hidden md:flex items-center gap-1.5 bg-neutral-950/70 p-1.5 rounded-full border border-white/10 backdrop-blur-xl shadow-2xl shadow-black/40">
        {navLinks.map((l, h)=>(
            <li className="relative" key={h}>
                <a 
                    href={l.href} 
                    onClick={(e) => {
                        e.preventDefault();
                        setActive(l.name);
                    }} 
                    className={`relative z-10 px-5 py-2 text-xs font-semibold tracking-wider uppercase transition-colors duration-300 block rounded-full select-none ${
                        active === l.name ? 'text-neutral-950 font-bold' : 'text-neutral-400 hover:text-white'
                    }`}
                >
                    {l.name}
                </a>

                {active === l.name && (
                    <motion.div 
                        layoutId="activePill" 
                        transition={{type:"spring", stiffness:380, damping:30}} 
                        className="absolute inset-0 bg-white rounded-full z-0 shadow-lg"
                    />
                )}
            </li>
        ))}
        </ul>
    </div>
  )
}

export default Navbar