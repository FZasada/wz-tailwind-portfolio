import PropTypes from "prop-types";
import { motion } from "motion/react"
import ProjectCard from "../../elements/ProjectCard"


const Projects = ({ title, projects }) => {
    return (
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
                ease: "easeInOut",
                duration: 0.6,
            }}
            viewport={{ once: true, amount: 0.2 }}
            className='flex flex-col pb-4 items-center'>
            {title && <h2
                className='my-8 text-center text-4xl lg:text-[48px] font-bold'>{ title }</h2>
            }
            <div className="flex lg:flex-row flex-col gap-[48px] mt-12">
                {projects.map((project, index) => (
                    <div key={index}>
                        <ProjectCard project={project} />
                    </div>
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
