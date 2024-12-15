import PropTypes from "prop-types";

import { motion } from "motion/react";

const Topbutton = ({ showTopUp, scrollUp }) => {
    return (
        <motion.button
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: showTopUp ? 0.3 : 0, y: showTopUp ? 0 : -10 }}
            transition={{ duration: 0.1, y: {type: "spring", visualDuration: 0.1, bounce: 0.1} }}

            className={`${showTopUp ? 'block' : 'hidden'} fixed right-8 bottom-8 w-12 h-12 bg-gray opacity-30 rounded-full flex justify-center items-center hover:opacity-70 transition-all z-50 animate-jumpUp`}
            onClick={scrollUp}
        >
            <img
                className="w-4"
                src={`/src/assets/icons/arrow_up.png`}
                alt="arrow"
            />
        </motion.button>
    )
}

Topbutton.propTypes = {
    showTopUp: PropTypes.bool,
    scrollUp: PropTypes.func
};

export default Topbutton
