import { useEffect, useState } from 'react';
import {motion} from 'motion/react'

import { WORK, EDUCATION, ABOUTMEHETO, ABOUTMEFREETIME } from '../constants/index';
import LanguageComponent from '../components/elements/LanguageComponent';
import Button from '../components/elements/Button';
import usePasswordProtectedDownload from '../hooks/usePasswordProtectedDownload';
import PasswordDialog from '../components/elements/PasswordDialog';
import LoadingSpinner from '../components/elements/LoadingSpinner';
import useImageLoader from '../hooks/useImageLoader';

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
    const downloadHook = usePasswordProtectedDownload('0203');
    const heroImageLoader = useImageLoader(aboutme_1);
    const dogImageLoader = useImageLoader(withJackie);

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
    }, [hiMsg.length]);

  return (
    <div className='flex flex-col gap-[220px]'>
        <motion.section
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
                ease: "easeInOut",
                duration: 0.6,
            }}
            viewport={{ once: true, amount: 0.5 }}
        >
            <div className="flex flex-col lg:flex-row gap-[125px]">
              <div className='flex flex-col justify-end'>
                <div className='mb-[24px]' style={{ height: '70px', position: 'relative', overflow: 'hidden' }}>
                    <div
                      style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-start'
                      }}
                    >
                      <h1 className="mb-[12px] text-[44px] lg:text-[72px] font-bold">
                        {hiMsg[currentIndex]}<span className='text-primary'>!</span>
                      </h1>
                    </div>
                  {/*</AnimatePresence>*/}
                </div>

                <p className="mb-[64px] text-[18px]">
                    {ABOUTMEHETO}
                </p>
                <div className="flex flex-col lg:flex-row gap-[20px] w-full items-start">
                  <Button text={"Download my CV"} variant="primary" onClick={downloadHook.handleDownloadClick} />
                  <Button  text={"LinkedIn profile"} variant="secondary" onClick={() => window.open("https://www.linkedin.com/in/wiktoria-zasada-00a20b252/", "_blank")} />
                </div>
              </div>
              {heroImageLoader.loading ? (
                <div className="w-[515px] h-[515px] flex items-center justify-center">
                  <LoadingSpinner size="xl" variant="primary" />
                </div>
              ) : (
                <img src={aboutme_1} alt='me' width='515' className={heroImageLoader.error ? 'opacity-50' : ''} />
              )}
            </div>
        </motion.section>


        <motion.section
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
                ease: "easeInOut",
                duration: 0.5,
            }}
            viewport={{ once: true, amount: 0.3 }}
            className='flex flex-col sm:gap-2'
        >
        <h2 className='my-8 text-center text-[48px] font-bold'>Languages I speak</h2>
        <div className='flex flex-col lg:flex-row justify-center items-center gap-[96px] w-full mt-8'>
          <LanguageComponent iconSrc={polish} language='Polish' level='Native' />
          <LanguageComponent iconSrc={dutch} language='Dutch' level='Fluent' />
          <LanguageComponent iconSrc={english} language='English' level='Fluent' />
          <LanguageComponent iconSrc={german} language='German' level='Intermediate' />
        </div>
      </motion.section>




    <motion.section
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
            ease: "easeInOut",
            duration: 0.5,
        }}
        viewport={{ once: true, amount: 0.3 }}>
        <div className="flex flex-col lg:flex-row justify-center gap-[124px]">
          <div>
            <h2 className='my-8 text-[48px] font-bold'>
              When I’m <span className='text-primary'>not</span> working
            </h2>
            <p className="text text-[18px]">
                {ABOUTMEFREETIME}
            </p>
          </div>
          {dogImageLoader.loading ? (
            <div className="w-[443px] h-[443px] flex items-center justify-center">
              <LoadingSpinner size="xl" variant="primary" />
            </div>
          ) : (
            <motion.img
              src={withJackie}
              alt="me"
              width="443"
              className={`shadow-primary ${dogImageLoader.error ? 'opacity-50' : ''}`}
              initial={{ 
                x: 0,
                y: 0,
                boxShadow: 'var(--tw-shadow-color) -12px -12px 0px 0px'
              }}
              whileInView={{ 
                x: 14,
                y: 14,
                boxShadow: 'var(--tw-shadow-color) -30px -30px 0px 0px'
              }}
              transition={{ 
                duration: 0.7,
                ease: "easeInOut"
              }}
              viewport={{ 
                once: true, 
                amount: 0.5 
              }}
            />
          )}
        </div>
        <div id="about-3-right-border"/>
      {/*</motion.section>*/}
      </motion.section>



    <motion.section
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
            ease: "easeInOut",
            duration: 0.6,
        }}
        viewport={{ once: true, amount: 0.3 }}
        className='flex flex-col justify-center items-center w-full gap-12'>
          <h2 className='my-8 text-center text-[48px] font-bold'>Work Experience</h2>
          <Timeline data={WORK} />
      </motion.section>

        <motion.section
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
                ease: "easeInOut",
                duration: 0.6,
            }}
            viewport={{ once: true, amount: 0.3 }}
            className='flex flex-col justify-center items-center w-full gap-12'
        >
        <h2 className='my-8 text-center text-[48px] font-bold'>Education</h2>
        <Timeline data={EDUCATION} />

      </motion.section>
      
      <PasswordDialog {...downloadHook} />
    </div>
  )
}

export default Aboutme