const Timeline = ({ data }) => {
    return (
        <div className="relative max-w-6xl mx-auto pb-20 px-4">
            {/* Center vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary z-0" />

            <div className="flex flex-col gap-20 relative z-10">
                {data.map((event, index) => {
                    const isLeft = index % 2 === 0;

                    return (
                        <div key={index} className="flex w-full items-start justify-between relative">
                            {/* Left side */}
                            <div className={`w-1/2 pr-8 pl-8 ${isLeft ? "flex justify-end" : "flex justify-start items-start"}`}>
                                {isLeft ? (
                                    // Date badge
                                    <div className="relative bottom-4">
                                        <div className="bg-primary text-white px-4 py-3 rounded-2xl font-semibold relative z-10 text-[24px]">
                                            {event.date}
                                        </div>
                                        <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-white border-t-8 border-b-8 border-l-8 border-l-primary" />

                                    </div>
                                ) : (
                                    // Card
                                    <div className="px-6 w-full">
                                        <h3 className="text-[32px] font-bold text-right">{event.title}</h3>
                                        <h4 className="text-[18px] text-gray-600 text-right">{event.company}</h4>
                                        <p className="mt-3 text-[18px] text-gray-800 text-right">{event.description}</p>
                                    </div>
                                )}
                            </div>

                            {/* Center dot */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-2 border-primary rounded-full z-10" />

                            {/* Right side */}
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
                    );
                })}
            </div>
        </div>
    );
};

export default Timeline;
