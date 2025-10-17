import {motion} from 'motion/react'
import PropTypes from 'prop-types'

const Timeline = ({ data }) => {
    return (
        <div className="relative max-w-6xl mx-auto pb-20">
            {/* Vertical line: on left for mobile, center for desktop */}
            <div className="absolute left-2 sm:left-1/2 transform sm:-translate-x-1/2 w-0.5 h-full bg-primary z-0" />

            <div className="flex flex-col gap-28 relative z-10">
                {data.map((event, index) => {
                    const isLeft = index % 2 === 0;

                    return (
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{
                                ease: "easeInOut",
                                duration: 0.6,
                            }}
                            viewport={{ once: true, amount: 0.5 }}
                            key={index} className="flex flex-col w-full relative">
                            {/* === MOBILE VERSION === */}
                            <div className="sm:hidden w-full flex flex-col items-start gap-1 relative">
                                {/* Date */}
                                <div className="relative ml-10">
                                    <div className="bg-primary text-white px-6 py-3 rounded-2xl font-semibold text-[18px] relative z-10">
                                        {event.date}
                                    </div>
                                    {/* Left-pointing triangle */}
                                    <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full w-0 h-0 border-white border-t-8 border-b-8 border-r-8 border-r-primary" />
                                </div>

                                {/* Dot */}
                                <div className="w-4 h-4 -translate-y-11 bg-white border-2 border-primary rounded-full" />

                                {/* Content */}
                                <div className="flex flex-col gap-2 mx-6">
                                    <h3 className="text-[24px] font-bold">{event.title}</h3>
                                    <h4 className="text-[16px] text-gray-600">{event.company}</h4>
                                    <p className="mt-2 text-[16px] text-gray-800">{event.description}</p>
                                </div>
                            </div>

                            {/* === DESKTOP VERSION === */}
                            <div className="hidden sm:flex w-full items-start justify-between relative">
                                {/* Left Side */}
                                <div className={`w-1/2 pr-8 pl-8 ${isLeft ? "flex justify-end" : "flex justify-start items-start"}`}>
                                    {isLeft ? (
                                        // Date badge
                                        <div className="relative bottom-4">
                                            <div className="bg-primary text-white px-4 py-3 rounded-2xl font-semibold text-[24px] relative z-10">
                                                {event.date}
                                            </div>
                                            <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-white border-t-8 border-b-8 border-l-8 border-l-primary" />
                                        </div>
                                    ) : (
                                        // Card
                                        <div className="px-6 w-full text-right">
                                            <h3 className="text-[32px] font-bold">{event.title}</h3>
                                            <h4 className="text-[18px] text-gray-600">{event.company}</h4>
                                            <p className="mt-3 text-[18px] text-gray-800">{event.description}</p>
                                        </div>
                                    )}
                                </div>

                                {/* Dot */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-2 border-primary rounded-full z-10" />

                                {/* Right Side */}
                                <div className="w-1/2 pr-8 pl-8 flex justify-start items-start">
                                    {isLeft ? (
                                        // Card
                                        <div className="px-6 w-full">
                                            <h3 className="text-[32px] font-bold">{event.title}</h3>
                                            <h4 className="text-[18px] text-gray-600">{event.company}</h4>
                                            <p className="mt-3 text-[18px] text-gray-800">{event.description}</p>
                                        </div>
                                    ) : (
                                        // Date badge
                                        <div className="relative bottom-4">
                                            <div className="bg-primary text-white text-[24px] px-4 py-3 rounded-2xl font-semibold relative z-10">
                                                {event.date}
                                            </div>
                                            <div className="absolute right-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-white border-t-8 border-b-8 border-r-8 border-r-primary" />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

Timeline.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        date: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        company: PropTypes.string.isRequired,
        description: PropTypes.string
    })).isRequired
};

export default Timeline;
