import PropTypes from 'prop-types';

const ToolContainer = ({ tool }) => {
    return (
        <div className='flex flex-col items-center group hover:cursor-pointer'>
            <div className='rounded-full border-solid border-[30px] w-[180px] h-[180px] border-primary flex items-center justify-center'>
                <div className={`w-[${tool.width}px] h-[${tool.height}px] rounded-full bg-white flex items-center justify-center`}>
                    <img 
                        src={tool.icon} 
                        alt={tool.title} 
                        width={tool.width}
                        height={tool.height}
                    />
                </div>
            </div>
            <h3 className='mt-[32px] text-[24px] font-medium'>{tool.title}</h3>
        </div>
    )
};

ToolContainer.propTypes = {
    tool: PropTypes.shape({
        icon: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
    }).isRequired,
};

export default ToolContainer
