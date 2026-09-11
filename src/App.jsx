import React from 'react'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Edcucation from './components/Education/Edcucation'
import Experience from './components/Experience/Experience'
import Fooder from './components/Fooder/Fooder'
import Skills from './components/Skills/Skills'
import Work from './components/Work/Work'
import Contact from './components/Contact/Contact'
import BlurBlob from './BlurBlob'
import './App.css'

function App() {
  return (
    <div className='bg-[#050414] min-h-screen text-white relative w-full overflow-x-hidden selection:bg-purple-600 selection:text-white'>
      {/* Background ambient lighting blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <BlurBlob position={{ top: '25%', left: '15%' }} size={{ width: '40vw', height: '40vw' }} />
        <BlurBlob position={{ top: '65%', left: '85%' }} size={{ width: '35vw', height: '35vw' }} />
        <BlurBlob position={{ top: '90%', left: '30%' }} size={{ width: '30vw', height: '30vw' }} />
        <div className='absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f18_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f18_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_70%,transparent_100%)] opacity-80'></div>
      </div>

      {/* Main Content */}
      <div className='relative z-10 w-full'>
        <Navbar />
        <main className="w-full">
          <About />
          <Skills />
          <Experience />
          <Edcucation />
          <Work />
          <Contact />
        </main>
        <Fooder />
      </div>
    </div>
  )
}

export default App

