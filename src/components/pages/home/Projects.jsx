import PropTypes from "prop-types";

import ProjectCard from "../../elements/ProjectCard"

import { motion } from "motion/react";

const Projects = ({ title, projects, filter=null }) => {
    return (
        <div className='flex flex-col pb-4 items-center gap-4'>
            {title && <motion.h2
                whileInView={{y: 0, opacity: 1}}
                initial={{y: -100, opacity: 0}}
                transition={{duration: 1}}
                className='my-8 text-center text-5xl font-bold'>{ title }</motion.h2>
            }
                {filter}
            <div className="my-8 lg:flex flex-wrap gap-8">
            {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        whileInView={{opacity: 1}}
                        initial={{ opacity: 0 }}
                        transition={{
                            delay: index * 0.5,
                            duration: 0.5,
                        }}
                    >
                        <ProjectCard project={project} />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

Projects.propTypes = {
    title: PropTypes.string,
    projects: PropTypes.array,
    filter: PropTypes.any
};

export default Projects;
