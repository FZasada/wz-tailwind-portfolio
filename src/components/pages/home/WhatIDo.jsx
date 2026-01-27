import { WHATDOIDO } from "../../../constants"

import { motion } from "motion/react"

import iconWebDesign from '../../../assets/icons/web_design.png'
import iconAppDesign from '../../../assets/icons/app_design.png'
import iconGraphicDesign from '../../../assets/icons/graphic_design.png'


const WhatIDo = () => {
    return (
    <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
            ease: "easeInOut",
            duration: 0.6,
        }}
        viewport={{ once: true, amount: 0.5 }}
        className="lg:px-28">
        <div className='flex flex-row flex-wrap-reverse gap-12 lg:gap-0'>
            <div className="w-full lg:w-1/2 lg:px-8">
                <div className="flex flex-col gap-20 text-center">
                    <div className="flex items-center gap-4">
                        <div className="flex w-auto justify-center">
                            <img 
                                className="w-20 h-auto object-contain"
                                src={iconWebDesign} alt="Web design" />
                        </div>
                        <div className="bg-gray-300 p-6 lg:text-start text-xl font-medium">Website Design</div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                        <div className="flex w-auto justify-center">
                            <img 
                                className="w-20 h-20 object-contain"
                                src={iconAppDesign} alt="Web design" />
                        </div>
                        <div className="bg-gray-500 p-6 lg:text-start text-xl font-medium">App Design</div>
                    </div>
                   
                    <div className="flex items-center gap-4">
                        <div className="flex w-auto justify-center">
                            <img 
                                className="w-20 h-auto object-contain"
                                src={iconGraphicDesign} alt="Web design" />
                        </div>
                        <div className="bg-gray-700 p-6 lg:text-start text-xl font-medium">Graphic Design</div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-12 w-full lg:w-1/2">
                <h2 className="text-4xl lg:text-5xl font-bold"><span className="text-primary">What</span> do I do?</h2>
                <p className="text-lg/9">{WHATDOIDO}</p>
            </div>
        </div>
    </motion.div>
  )
}

export default WhatIDo
