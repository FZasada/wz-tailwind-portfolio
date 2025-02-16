import PropTypes from "prop-types";

import ProjectCard from "../../elements/ProjectCard"


const Projects = ({ title, projects }) => {
    return (
        <div className='flex flex-col pb-4 items-center'>
            {title && <h2
                // whileInView={{y: 0, opacity: 1}}
                // initial={{y: -100, opacity: 0}}
                // transition={{duration: 1}}
                className='my-8 text-center text-[48px] font-bold'>{ title }</h2>
            }
            <div className="flex lg:flex-row flex-col gap-[48px]">
                {projects.map((project, index) => (
                    <div key={index}>
                        <ProjectCard project={project} />
                    </div>
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
