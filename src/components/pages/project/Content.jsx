import { motion } from 'motion/react'
import PropTypes from 'prop-types'
import LoadingSpinner from '../../elements/LoadingSpinner'
import useImageLoader from '../../../hooks/useImageLoader'

const Content = ({ project }) => {
  const bannerLoader = useImageLoader(project?.banner2);

  return (
    <div className='flex flex-col gap-8 lg:gap-32 mt-4 lg:mt-20'>
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
                ease: "easeInOut",
                duration: 0.6,
            }}
            viewport={{ once: true, amount: 0.5 }}
        >
            <h2 className='text-3xl font-bold py-6'>Introduction</h2>
            <p>{project.introduction}</p>
        </motion.div>
        {project.problemOverview && (<motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
                ease: "easeInOut",
                duration: 0.6,
            }}
            viewport={{ once: true, amount: 0.5 }}
        >
            <h2 className='text-3xl font-bold py-6'>Problem overview</h2>
            <p>{project.problemOverview}</p>
        </motion.div>)}
        {project.designProcess && (<motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
                ease: "easeInOut",
                duration: 0.6,
            }}
            viewport={{ once: true, amount: 0.5 }}
        >
            <h2 className='text-3xl font-bold py-6'>Design process</h2>
            <p>{project.designProcess}</p>
        </motion.div>)}
        <div className="w-full relative min-h-[400px] flex items-center justify-center">
            {bannerLoader.loading ? (
              <LoadingSpinner size="xl" variant="primary" />
            ) : (
              <img
                src={project.banner2} 
                alt="Banner"
                className={bannerLoader.error ? 'opacity-50' : ''}
              />
            )}
        </div>
        {project.result && (<motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
                ease: "easeInOut",
                duration: 0.6,
            }}
            viewport={{ once: true, amount: 0.5 }}
        >
            <h2 className='text-3xl font-bold py-6'>Result</h2>
            <p>{project.result}</p>
        </motion.div>)}
        <div>
            <h2 className='text-2xl font-bold text-center'>See more of my work</h2>
        </div>
    </div>
  )
}

Content.propTypes = {
    project: PropTypes.object
}


export default Content