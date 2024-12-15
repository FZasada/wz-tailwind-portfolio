import { WHATDOIDO } from "../constants"

const WhatIDo = () => {
  return (
    <div className="lg:px-28">
        <div className='flex flex-row flex-wrap-reverse gap-12 lg:gap-0'>
            <div className="w-full lg:w-1/2 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] grid-rows-3 gap-12 text-center">
                    <div className="flex w-auto justify-center">
                        <img 
                            className="w-20 h-auto object-contain"
                            src="src/assets/icons/web_design.png" alt="Web design" />
                    </div>
                    <div className="bg-gray-300 p-6 lg:text-start text-xl font-bold">Website Design</div>
                    <div className="flex w-auto justify-center">
                        <img 
                            className="w-20 h-20 object-contain"
                            src="src/assets/icons/app_design.png" alt="Web design" />
                    </div>
                    <div className="bg-gray-500 p-6 lg:text-start text-xl font-bold">App Design</div>
                    <div className="flex w-auto justify-center">
                        <img 
                            className="w-20 h-auto object-contain"
                            src="src/assets/icons/graphic_design.png" alt="Web design" />
                    </div>
                    <div className="bg-gray-700 p-6 lg:text-start text-xl font-bold">Graphic Design</div>
                </div>
            </div>
            <div className="flex flex-col gap-12 w-full lg:w-1/2">
                <h2 className="text-5xl font-bold">What do <span className="text-primary">I</span> do?</h2>
                <p className="leading-6">{WHATDOIDO}</p>
            </div>
        </div>
    </div>
  )
}

export default WhatIDo
