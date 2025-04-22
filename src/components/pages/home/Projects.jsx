import PropTypes from "prop-types";
import { motion } from "motion/react"
import ProjectCard from "../../elements/ProjectCard"


const Projects = ({ title, projects }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
                ease: "easeInOut",
                duration: 0.6,
            }}
            viewport={{ once: true, amount: 0.3 }}
            className='flex flex-col pb-4 items-center'>
            {title && <h2
                className='my-8 text-center text-[48px] font-bold'>{ title }</h2>
            }
            <div className="flex lg:flex-row flex-col gap-[48px]">
                {projects.map((project, index) => (
                    <motion.div
                        initial={{ y: 0, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{
                            ease: "easeInOut",
                            duration: 0.6,
                            delay: index * 0.1
                        }}
                        viewport={{ once: true }}
                        key={index}>
                        <ProjectCard project={project} />
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}

Projects.propTypes = {
    title: PropTypes.string,
    projects: PropTypes.array,
    filter: PropTypes.any
};

export default Projects;
