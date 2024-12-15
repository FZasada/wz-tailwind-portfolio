import Projects from '../components/pages/home/Projects'
import WhatIDo from '../components/pages/home/WhatIDo'
import Hero from '../components/pages/home/Hero'
import Projectfilter from '../components/Projectfilter';
import { PROJECTS } from '../constants';
import { useState } from 'react';

const Home = () => {
  const [selectedFilter, setSelectedFilter] = useState("");

  const filter = (filterTag) => {
      setSelectedFilter(filterTag);
  };

  const filteredProjects = selectedFilter
          ? PROJECTS.filter((project) => project.tags.includes(selectedFilter)) 
          : PROJECTS;

  return (
    <div className='flex flex-col gap-28 lg:gap-64'>
      <Hero />
      <WhatIDo />
      <Projects title={"My projects"} projects={filteredProjects} filter={<Projectfilter selectedFilter={selectedFilter} onFilter={filter} />} />
    </div>
  )
}

export default Home
