import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '../../elements/Button';
import ContactButton from '../../elements/ContactButton';
import usePasswordProtectedDownload from '../../../hooks/usePasswordProtectedDownload';
import PasswordDialog from '../../elements/PasswordDialog';
import contentManager from '../../../utils/contentManager';

const Hero = () => {
  const [heroContent, setHeroContent] = useState(null);
  const [heroImage, setHeroImage] = useState(null);
  const downloadHook = usePasswordProtectedDownload();

  useEffect(() => {
    // Load content
    const content = contentManager.getHeroContent();
    setHeroContent(content);

    // Load hero image
    contentManager.getImageImport(content.image).then(setHeroImage);
  }, []);

  const myAnimation = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  if (!heroContent) {
    return <div>Loading...</div>; // You can add a proper loading component
  }

  return (
    <>
      <motion.div
          variants={myAnimation}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex pb-4 lg:mb-35">
        <div className="flex flex-wrap items-center gap-12 lg:gap-0">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col lg:items-start">
              <h4 className="text-[16px] lg:text-[18px] mb-[6px]">
                {heroContent.greeting}
              </h4>
              <h1 className="mb-[12px] text-[44px] lg:text-[72px] font-bold">
                {heroContent.name}
              </h1>
              <span className="pb-16 text-[24px] font-medium">
                <span dangerouslySetInnerHTML={{ __html: heroContent.tagline }} />
              </span>
              <div className="flex flex-col lg:flex-row gap-[20px] w-full items-start">
                <ContactButton />
                <Button text={"Download my CV"} variant="secondary" onClick={downloadHook.handleDownloadClick} />
              </div>
            </div>
          </div>
          {heroImage && (
            <img
              src={heroImage}
              alt={contentManager.getSiteInfo().name}
              className="max-w-full"
              style={{ width: '477px', height: 'auto' }}
            />
          )}
        </div>
      </motion.div>

      <PasswordDialog {...downloadHook} />
    </>
  );
};

export default Hero;