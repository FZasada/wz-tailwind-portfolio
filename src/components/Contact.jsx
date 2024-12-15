import React from 'react'
import { EMAIL } from '../constants'
import Button from './elements/Button'

const Contact = () => {
  return (
    <div className='mt-20 lg:mt-64 border-b-2 border-b-primary pb-8'>
      <h3 className='font-semibold'>👋 Get in touch at</h3>
      <h1 className='text-2xl lg:text-5xl font-bold mb-8'>{EMAIL}</h1>
      <Button text="Contact me" icon={'src/assets/icons/envelope_w.png'}/>
    </div>
  )
}

export default Contact
