import { motion } from "motion/react"

const Projectfilter = ({selectedFilter, onFilter}) => {
  return (
    <motion.div 
        whileInView={{x: 0, opacity: 1}}
        initial={{x: -100, opacity: 0}}
        transition={{duration: 1}}
        className='flex gap-8'>
        <button 
            onClick={() => onFilter("")} 
            className={`text-lg ${selectedFilter === "" ? "text-primary border-b-2 decoration-primary font-bold" : "hover:text-primary transition-all duration-200 ease-in-out"}`}
        >
            All
        </button>
        <button 
            onClick={() => onFilter("Website Design")} 
            className={`text-lg ${selectedFilter === "Website Design" ? "text-primary border-b-2 decoration-primary font-bold" : "hover:text-primary transition-all duration-200 ease-in-out"}`}
        >
            Website Design
        </button>
        <button 
            onClick={() => onFilter("App Design")} 
            className={`text-lg ${selectedFilter === "App Design" ? "text-primary border-b-2 decoration-primary font-bold" : "hover:text-primary transition-all duration-200 ease-in-out"}`}
        >
            App Design
        </button>
        <button 
            onClick={() => onFilter("Graphic Design")} 
            className={`text-lg ${selectedFilter === "Graphic Design" ? "text-primary border-b-2 decoration-primary font-bold" : "hover:text-primary transition-all duration-200 ease-in-out"}`}
        >
            Graphic Design
        </button>
    </motion.div>
  )
}

export default Projectfilter
