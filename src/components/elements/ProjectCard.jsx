import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import LoadingSpinner from './LoadingSpinner';
import useImageLoader from '../../hooks/useImageLoader';

const ProjectCard = ({ project }) => {
    const imageLoader = useImageLoader(project.logo);
    return (
        <Link to={`/project/${project.id}`} className='flex flex-col gap-[24px]'>
            <div className='rounded-xl w-[344px] h-[350px] px-[32px] group hover:cursor-pointer content-center relative' style={{backgroundColor: project.color}}>
                {imageLoader.loading ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <LoadingSpinner size="lg" variant="white" />
                    </div>
                ) : (
                    <img 
                        className={`transition-transform duration-300 ease-in-out group-hover:scale-[105%] ${imageLoader.error ? 'opacity-50' : ''}`}
                        src={project.logo} 
                        alt="project" 
                        id="project-img" 
                    />
                )}
            </div>
            <div className='flex flex-col gap-[4px]'>
                <h5 className='m-0 p-0 text-primary font-semibold text-[18px]'>{project.tags.join(' / ')}</h5>
                <h4 className='m-0 p-0 font-normal text-[20px]'>{project.title}</h4>
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
