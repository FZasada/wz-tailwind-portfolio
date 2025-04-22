import { useEffect, useState } from 'react';
import {AnimatePresence, motion, useScroll} from 'motion/react'

import { WORK, EDUCATION, ABOUTMEHETO, ABOUTMEFREETIME } from '../constants/index';
import LanguageComponent from '../components/elements/LanguageComponent';
import Button from '../components/elements/Button';

import aboutme_1 from '../assets/about_me/images/hero.png'
import withJackie from '../assets/about_me/images/dog_pic.png'

import english from '../assets/about_me/icons/cookie.png'
import german from '../assets/about_me/icons/pretzel.png'
import polish from '../assets/about_me/icons/pierogi.png'
import dutch from '../assets/about_me/icons/kaas.png'
import Timeline from "../components/elements/Timeline.jsx";

function Aboutme() {
    const hiMsg = ["Cześć", "Hoi", "Hello", "Moin"]
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            });
        }, []);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % hiMsg.length);
      }, 3000);
  
      return () => clearInterval(interval);
    }, []);
  

  return (
    <div className='flex flex-col gap-[220px]'>
      {/*<motion.section*/}
      {/*    whileInView={{y: 0, opacity: 1}}*/}
      {/*    initial={{y: 40, opacity: 0}}*/}
      {/*    transition={{duration: 0.3}}*/}
      {/*>*/}
        <section>
        <div className="flex flex-col lg:flex-row gap-[125px]">
          <div className='flex flex-col justify-end'>
            <div className='mb-[24px]' style={{ height: '70px', position: 'relative', overflow: 'hidden' }}>
              {/*<AnimatePresence initial={false}>*/}
                <div
                  // key={hiMsg[currentIndex]}
                  // initial={{ y: '-100%' }}
                  // animate={{ y: '0%' }}
                  // exit={{ y: '100%' }}
                  // transition={{
                  //   y: { type: "tween", duration: 0.5, ease: "easeInOut" }
                  // }}
                  style={{ 
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start'
                  }}
                >
                  <h1 className="mb-[12px] text-[72px] font-bold">
                    {hiMsg[currentIndex]}<span className='text-primary'>!</span>
                  </h1>
                </div>
              {/*</AnimatePresence>*/}
            </div>

            <p className="mb-[64px] text-[18px]">
                {ABOUTMEHETO}
            </p>
            <div className="flex flex-col lg:flex-row gap-[20px] w-full items-start">
              <Button text={"Download my CV"} variant="primary" disabled={true} title="Currently not available" />
              <Button  text={"LinkedIn profile"} variant="secondary" onClick={() => window.open("https://www.linkedin.com/in/wiktoria-zemla-00a20b252/", "_blank")} />
            </div>
          </div>
          <img src={aboutme_1} alt='me' width='515'/>
        </div>
      {/*</motion.section>*/}
        </section>


      {/*<motion.section */}
      {/*  whileInView={{y: 0, opacity: 1}}*/}
      {/*  initial={{y: 40, opacity: 0}}*/}
      {/*  transition={{duration: 0.3}}*/}
      {/*  className="flex flex-col gap-[72px]">*/}
        <section>
        <h2 className='my-8 text-center text-[48px] font-bold'>Languages I speak</h2>
        <div className='flex flex-col lg:flex-row justify-center items-center gap-[96px] w-full'>
            <LanguageComponent iconSrc={polish} language='Polish' level='Native' />
            <LanguageComponent iconSrc={dutch} language='Dutch' level='Fluent' />
            <LanguageComponent iconSrc={english} language='English' level='Fluent' />
            <LanguageComponent iconSrc={german} language='German' level='Intermediate' />
        </div>
      </section>




      <section
        // whileInView={{y: 0, opacity: 1}}
        // initial={{y: 40, opacity: 0}}
        // transition={{duration: 0.3}}
        // style={{ shadow: scrollYProgress }}
        >
        <div className="flex flex-col lg:flex-row justify-center gap-[124px]">
          <div>
            <h2 className='my-8 text-[48px] font-bold'>
              When I’m <span className='text-primary'>not</span> working
            </h2>
            <p className="text text-[18px]">
                {ABOUTMEFREETIME}
            </p>
          </div>
          <img
            src={withJackie}
            alt="me"
            width= "443"
            className='shadow-primary shadow-[-16px_-16px_0px_0px]' // 42 when scroll
          />
        </div>
        <div id="about-3-right-border"/>
      {/*</motion.section>*/}
      </section>



      <section className='flex flex-col justify-center items-center w-full gap-12'>
          <h2 className='my-8 text-center text-[48px] font-bold'>Work Experience</h2>
          <Timeline data={WORK} />
      </section>

    <section className='flex flex-col justify-center items-center w-full gap-12'>
        <h2 className='my-8 text-center text-[48px] font-bold'>Education</h2>
        <Timeline data={EDUCATION} />

      </section>   
      
    </div>
  )
}

export default Aboutme