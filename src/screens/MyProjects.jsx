import Projects from '../components/pages/home/Projects'

import { PROJECTS } from '../constants';

const MyProjects = () => {
  return (
    <div className='flex flex-col gap-28 lg:gap-64'>
      <Projects title={"My projects"} projects={PROJECTS} />
    </div>
  )
}

export default MyProjects
