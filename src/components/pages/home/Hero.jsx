import hero from '../../../assets/hero.png';
import Button from '../../elements/Button';
import { motion } from 'framer-motion'; // Corrected import
import ContactButton from '../../elements/ContactButton';
import usePasswordProtectedDownload from '../../../hooks/usePasswordProtectedDownload';
import PasswordDialog from '../../elements/PasswordDialog';
import LoadingSpinner from '../../elements/LoadingSpinner';
import useImageLoader from '../../../hooks/useImageLoader';

const Hero = () => {
  const downloadHook = usePasswordProtectedDownload('0203');
  const heroImageLoader = useImageLoader(hero);

  const myAnimation = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <motion.div
          variants={myAnimation}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex pb-4 lg:mb-35">
        <div className="flex flex-wrap items-center gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col lg:items-start">
              <h4 className="text-sm lg:text-[18px] mb-2 lg:mb-[6px]">
                Hi there,
              </h4>
              <h1 className="mb-3 lg:mb-[12px] text-3xl lg:text-[72px] font-bold leading-tight">
                I&apos;m Wiktoria
              </h1>
              <span className="pb-8 lg:pb-16 text-base lg:text-[24px] font-medium block">
                I&apos;m a passionate <span className="text-primary">UX/UI Designer</span> who crafts engaging and intuitive digital experiences.
              </span>
              {/* No need for extra motion.div wrapper here */}
              <div className="flex flex-col lg:flex-row gap-4 lg:gap-[20px] w-full items-start">
                <ContactButton />
                <Button text={"Download my CV"} variant="secondary" onClick={downloadHook.handleDownloadClick} />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-auto flex justify-center lg:justify-start">
            <div className="relative flex items-center justify-center w-full max-w-[300px] lg:max-w-none" style={{ maxWidth: '477px' }}>
              {heroImageLoader.loading ? (
                <LoadingSpinner size="xl" variant="primary" />
              ) : (
                <img
                  src={hero}
                  alt="Wiktoria Zasada"
                  className={`w-full h-auto ${heroImageLoader.error ? 'opacity-50' : ''}`}
                />
              )}
            </div>
          </div>
        </div>
      </motion.div>

      <PasswordDialog {...downloadHook} />
    </>
  );
};

export default Hero;
