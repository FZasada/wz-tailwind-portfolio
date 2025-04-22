import React from 'react'

import { motion } from 'motion/react'
import PropTypes from 'prop-types'

const Content = ({ project }) => {
  return (
    <div className='flex flex-col gap-8 lg:gap-32 mt-4 lg:mt-20'>
        <div
            // whileInView={{x: 0, opacity: 1}}
            // initial={{x: -100, opacity: 0}}
            // transition={{duration: 0.8}}
        >
            <h2 className='text-3xl font-bold py-6'>Introduction</h2>
            <p>{project.introduction}</p>
        </div>
        {project.problemOverview && (<div
            // whileInView={{x: 0, opacity: 1}}
            // initial={{x: -100, opacity: 0}}
            // transition={{duration: 0.8}}
        >
            <h2 className='text-3xl font-bold py-6'>Problem overview</h2>
            <p>{project.problemOverview}</p>
        </div>)}
        {project.designProcess && (<div
            // whileInView={{x: 0, opacity: 1}}
            // initial={{x: -100, opacity: 0}}
            // transition={{duration: 0.8}}
        >
            <h2 className='text-3xl font-bold py-6'>Design process</h2>
            <p>{project.designProcess}</p>
        </div>)}
        <div
            // whileInView={{x: 0, opacity: 1}}
            // initial={{x: -100, opacity: 0}}
            // transition={{duration: 0.8}}
            className="w-full">
            <img
            src={project.banner2} 
            alt="Banner"
            />
        </div>
        {project.result && (<div
            // whileInView={{x: 0, opacity: 1}}
            // initial={{x: -100, opacity: 0}}
            // transition={{duration: 0.8}}
        >
            <h2 className='text-3xl font-bold py-6'>Result</h2>
            <p>{project.result}</p>
        </div>)}
        <div
            // whileInView={{x: 0, opacity: 1}}
            // initial={{x: -100, opacity: 0}}
            // transition={{duration: 0.8}}
        >
            <h2 className='text-2xl font-bold text-center'>See more of my work</h2>
        </div>
    </div>
  )
}

Content.propTypes = {
    project: PropTypes.object
}


export default Content