import PropTypes from "prop-types";
import ToolContainer from "../../elements/ToolContainer";


const FavTools = ({ tools }) => {
    return (
        <div className='flex flex-col pb-4 items-center gap-4'>
            <h2 className='my-8 text-center text-[48px] font-bold'>My favourite tools</h2>
    
            <div className="my-8 flex flex-wrap gap-[36px] justify-center">
                {tools.map((tool, index) => (
                    <div key={index}>
                        <ToolContainer tool={tool} />
                    </div>
                ))}
            </div>
        </div>
    )
}

FavTools.propTypes = {
    tools: PropTypes.array,

};

export default FavTools;
