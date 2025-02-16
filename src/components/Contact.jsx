
import { EMAIL } from '../constants'
import ContactButton from './elements/ContactButton'

import { motion } from 'motion/react'

const Contact = () => {
  return (
    <div className='mt-20 lg:mt-64 border-b-2 border-b-primary pb-8'>
      <h3 className='font-normal text-[16px]'>👋 Get in touch at</h3>
      <motion.h1 
        whileInView={{y: 0, opacity: 1}}
        initial={{y: 40, opacity: 0}}
        transition={{duration: 0.3}}
        className='text-[24px] lg:text-[48px] font-bold mb-[48px]'>{EMAIL}</motion.h1>
      <ContactButton />
    </div>
  )
}

export default Contact
