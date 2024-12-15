import hero from '../../../assets/hero.png';
import Button from '../../elements/Button';
import { motion } from 'framer-motion'; // Corrected import
import ContactButton from '../../elements/ContactButton';

// Container animation definition
const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="flex pb-4 lg:mb-35">
      <div className="flex flex-wrap items-center gap-12 lg:gap-0">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col lg:items-start">
            <motion.h4
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-2 text-lg"
            >
              Hi there,
            </motion.h4>
            <motion.h1
              variants={container(0.3)}
              initial="hidden"
              animate="visible"
              className="pb-4 text-6xl font-semibold lg:text-8xl"
            >
              I’m Wiktoria
            </motion.h1>
            <motion.span
              variants={container(0.8)}
              initial="hidden"
              animate="visible"
              className="pb-16 lg:pb-20 text-2xl lg:text-2xl font-semibold"
            >
              I’m a passionate <span className="text-primary">UX/UI Designer</span> who crafts engaging and intuitive digital experiences.
            </motion.span>
            {/* No need for extra motion.div wrapper here */}
            <div className="flex flex-col lg:flex-row gap-8 w-full items-start">
              <ContactButton />
              <Button text={"Download my CV"} variant="secondary" />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              src={hero}
              alt="Wiktoria Zemla"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
