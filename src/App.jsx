import React, { useState } from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Clients from './sections/Clients'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Experience from './sections/Experience'
import Resume from './sections/Resume'

// Create a context to share the showResume state
export const ResumeContext = React.createContext();

const App = () => {
  const [showResume, setShowResume] = useState(false);

  const openResume = () => {
    setShowResume(true);
    window.scrollTo(0, 0);
  };

  const closeResume = () => {
    setShowResume(false);
  };

  return (
    <ResumeContext.Provider value={{ openResume, closeResume }}>
      <main className='max-w-7xl mx-auto'>
        {showResume ? (
          <Resume onClose={closeResume} />
        ) : (
          <>
            <Navbar />
            <div className='view'>
              <section id="home" >
                <Hero />
              </section>
              <section id="about" className='block'>
                <About />
              </section>
              <section id="project" className='block'>
                <Projects/>
              </section>
              <section  className='block'>
                <Experience/>
              </section>
              <section id="contact" className='block'>
                <Contact/>
              </section>
              <Footer/>
            </div>
          </>
        )}
      </main>
    </ResumeContext.Provider>
  )
}

export default App
