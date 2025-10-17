import { motion } from "motion/react";
import PropTypes from 'prop-types';

const Hero = ({ project }) => {
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
            ease: "easeInOut",
            duration: 0.6,
        }}
        viewport={{ once: true }}
        className='flex flex-col items-center text-center'
    >
      <div className="flex flex-col w-full lg:w-1/2 mb-6">
        <span className='text-primary font-semibold my-4'>
            {project.tags.join(", ")}
        </span>
        <h1 className='pb-4 text-4xl font-semibold lg:text-7xl'>{project.title}
        </h1>
        <p>{project.shortDescription}</p>
      </div>
      <div className="w-full mt-16">
        <img src={project.img}
          alt="Banner"
        />
      </div>
    </motion.div>
  );
}

Hero.propTypes = {
  project: PropTypes.shape({
    tags: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string,
    shortDescription: PropTypes.string,
    img: PropTypes.string
  })
};

export default Hero;
