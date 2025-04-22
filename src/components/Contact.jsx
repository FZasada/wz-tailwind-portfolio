
import { EMAIL } from '../constants'
import ContactButton from './elements/ContactButton'

import { motion } from 'motion/react'

const Contact = () => {
  return (
    <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
            ease: "easeInOut",
            duration: 0.6,
        }}
        viewport={{ once: true, amount: 0.5 }}
        className='mt-20 lg:mt-64 border-b-2 border-b-primary pb-8'>
      <h3 className='font-normal text-[16px]'>👋 Get in touch at</h3>
      <h1
        className='text-[24px] lg:text-[48px] font-bold mb-[48px]'>{EMAIL}</h1>
      <ContactButton />
    </motion.div>
  )
}

export default Contact
