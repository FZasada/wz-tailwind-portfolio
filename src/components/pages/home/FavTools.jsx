import PropTypes from "prop-types";
import ToolContainer from "../../elements/ToolContainer";
import { motion } from "motion/react"

const FavTools = ({ tools }) => {
    return (
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
                ease: "easeInOut",
                duration: 0.6,
            }}
            viewport={{ once: true, amount: 0.5 }}
            className='flex flex-col pb-4 items-center gap-4'>
            <h2 className='my-8 text-center text-[48px] font-bold'>My favourite tools</h2>
    
            <div className="my-8 flex flex-wrap gap-[36px] justify-center">
                {tools.map((tool, index) => (
                    <ToolContainer key={index} tool={tool} />
                ))}
            </div>
        </motion.div>
    )
}

FavTools.propTypes = {
    tools: PropTypes.array,

};

export default FavTools;
