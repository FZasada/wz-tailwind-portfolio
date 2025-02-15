import Projects from '../components/pages/home/Projects'
import WhatIDo from '../components/pages/home/WhatIDo'
import Hero from '../components/pages/home/Hero'

import { PROJECTS, TOOLS } from '../constants';

import FavTools from '../components/pages/home/FavTools';

const Home = () => {
  return (
    <div className='flex flex-col gap-28 lg:gap-64'>
      <Hero />
      <WhatIDo />
      <Projects title={"My latest work"} projects={PROJECTS} />
      <FavTools tools={TOOLS} />
    </div>
  )
}

export default Home
