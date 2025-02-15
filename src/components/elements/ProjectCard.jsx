import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

const ProjectCard = ({ project }) => {
    return (
        <Link to={`/project/${project.id}`}>
            <div className='rounded-xl lg:h-72 group hover:cursor-pointer content-center' style={{backgroundColor: project.color}}>
                <img 
                    className='scale-75 transition-transform duration-600 ease-in-out group-hover:scale-90' 
                    src={project.logo} 
                    alt="project" 
                    width={project.imgSize[0]} 
                    height={project.imgSize[1]} 
                    id="project-img" 
                />
            </div>
            <div className='my-4'>
                <h5 className='text-primary font-bold'>{project.tags.join(' / ')}</h5>
                <h4>{project.title}</h4>
            </div>
        </Link>
    )
}

ProjectCard.propTypes = {
    project: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
        color: PropTypes.string.isRequired,
        logo: PropTypes.string.isRequired,
        imgSize: PropTypes.arrayOf(PropTypes.number).isRequired,
    }).isRequired,
};

export default ProjectCard
