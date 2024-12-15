import { motion } from "motion/react";

const Hero = ({ project }) => {
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className='flex flex-col items-center text-center'>
      <div className="flex flex-col w-full lg:w-1/2 mb-6">
        <motion.span 
          initial={{x: -100, opacity: 0}}
          animate={{x: 0, opacity: 1}}
          transition={{duration: 0.5}}
          className='text-primary font-semibold my-4'>
            {project.tags.join(", ")}
        </motion.span>
        <motion.h1
          initial={{x: -100, opacity: 0}}
          animate={{x: 0, opacity: 1}}
          transition={{duration: 0.5, delay: 0.2}}
          className='pb-4 text-4xl font-semibold lg:text-7xl'>{project.title}
        </motion.h1>
        <motion.p
          initial={{x: -100, opacity: 0}}
          animate={{x: 0, opacity: 1}}
          transition={{duration: 0.5, delay: 0.4}}
        >{project.shortDescription}</motion.p>
      </div>
      <div className="w-full mt-16">
        <motion.img
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 0.5, delay: 0.6}}
          src={project.img} 
          alt="Banner"
        />
      </div>
    </div>
  );
}

export default Hero;
