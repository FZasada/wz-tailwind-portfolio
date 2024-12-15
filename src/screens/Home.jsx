import Contact from '../components/Contact'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import WhatIDo from '../components/WhatIDo'

const Home = () => {
  return (
    <div className='flex flex-col gap-20 lg:gap-64'>
      <Hero />
      <WhatIDo />
      <Projects />
    </div>
  )
}

export default Home
