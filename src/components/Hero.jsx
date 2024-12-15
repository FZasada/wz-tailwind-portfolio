import hero from '../assets/hero.png'
import { HERO_CONTENT } from '../constants'
import Button from './elements/Button'

const Hero = () => {
  return (
    <div className="flex pb-4 lg:mb-35">
        <div className="flex flex-wrap items-center gap-12 lg:gap-0">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <h4 className='pb-2 text-lg'>
                        Hi there,
                    </h4>
                    <h1 className="pb-4 text-4xl font-semibold lg:text-8xl">
                        I’m Wiktoria
                    </h1>
                    <span className="pb-8 lg:pb-20 text-xl text-center lg:text-start lg:text-2xl font-semibold">
                        I’m a passionate <span className='text-primary'>UX/UI Designer</span> who crafts engaging and intuitive digital experiences.
                    </span>
                    <div className='flex flex-col lg:flex-row gap-8'>
                        <Button text="Contact me" icon={'src/assets/icons/envelope_w.png'}/>
                        <Button text={"Download my CV"} variant='secondary' />
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <img src={hero} alt="Florian Zasada" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
