import PropTypes from 'prop-types';

const ToolContainer = ({ tool }) => {
    return (
        <div className='flex flex-col items-center gap-[24px] justify-center text-center group hover:cursor-pointer'>
            <div className='rounded-full border-solid border-[26px] lg:border-[30px] w-[124px] lg:w-[180px] h-[124px] lg:h-[180px] border-primary flex items-center justify-center'>
                <div className={`w-[${tool.sm_width}px] lg:w-[${tool.width}px] h-[${tool.sm_height}px] lg:h-[${tool.height}px] rounded-full bg-white flex items-center justify-center`}>
                    <img 
                        src={tool.icon} 
                        alt={tool.title} 
                        height={tool.sm_height}
                        width={tool.sm_width}
                    />
                </div>
            </div>
            <h3 className='w-[124px] lg:w-[180px] text-[18px] lg:text-[24px] font-medium'>{tool.title}</h3>
        </div>
    )
};

ToolContainer.propTypes = {
    tool: PropTypes.shape({
        icon: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        sm_width: PropTypes.number.isRequired,
        sm_height: PropTypes.number.isRequired,
    }).isRequired,
};

export default ToolContainer
