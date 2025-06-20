import { useState } from 'react'
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Hero from './Components/Hero';
import AboutMe from './Components/About';
import Skill from './Components/Skill';
import Projects from './Components/Projects';
import CreativeShowcase from './Components/CreativeShowcase';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-[#252526] bottom-0'>
      <div className='flex'>
        <Header />
      </div>
      <div className='bg-[#1e1e1e]'>
        <Sidebar />
      </div>
      <div className='flex flex-col ml-15 mt-15  justify-items-center items-center p-5'>
          <Hero />
          <div className='flex flex-col m-6 md:m-10 p-6 gap-8 lg:flex-row'>
            <AboutMe />
            <Skill />
          </div>
          <Projects />
          <CreativeShowcase />
      </div>
    </div>
  )
}

export default App
