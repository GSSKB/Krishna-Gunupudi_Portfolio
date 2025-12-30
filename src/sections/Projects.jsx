import React, { Suspense, useState } from 'react'
import { myProjects } from '../constants'
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';
import CanvasLoader from '../component/CanvasLoader';
import DemoComputer from '../component/DemoComputer';


const projectCount = myProjects.length;

const Projects = () => {

  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0)

  const currentProject = myProjects[selectedProjectIndex];
  
  // Remove favicon when IntelliCare AI project is active
  React.useEffect(() => {
    // Find all favicon links (including apple-touch-icon, etc.)
    const faviconLinks = document.querySelectorAll("link[rel*='icon'], link[rel*='apple-touch-icon']");
    const isIntelliCare = currentProject?.title.includes('IntelliCare AI');
    
    if (isIntelliCare) {
      // Remove or hide favicon for IntelliCare project
      faviconLinks.forEach(link => {
        // Use blank data URI to completely remove the icon
        link.setAttribute('href', 'data:,');
        link.setAttribute('type', 'image/svg+xml');
      });
      
      // Also try to remove any existing favicon by setting to blank
      let mainFavicon = document.querySelector("link[rel='icon']");
      if (!mainFavicon) {
        mainFavicon = document.createElement('link');
        mainFavicon.rel = 'icon';
        document.head.appendChild(mainFavicon);
      }
      mainFavicon.setAttribute('href', 'data:,');
      mainFavicon.setAttribute('type', 'image/svg+xml');
    } else {
      // Restore favicon for other projects
      faviconLinks.forEach(link => {
        if (link.getAttribute('rel') === 'icon' || link.getAttribute('rel') === 'shortcut icon') {
          link.setAttribute('href', '/vite.svg');
          link.setAttribute('type', 'image/svg+xml');
        }
      });
      
      // Ensure main favicon exists
      let mainFavicon = document.querySelector("link[rel='icon']");
      if (!mainFavicon) {
        mainFavicon = document.createElement('link');
        mainFavicon.rel = 'icon';
        mainFavicon.type = 'image/svg+xml';
        mainFavicon.href = '/vite.svg';
        document.head.appendChild(mainFavicon);
      } else {
        mainFavicon.setAttribute('href', '/vite.svg');
        mainFavicon.setAttribute('type', 'image/svg+xml');
      }
    }
  }, [selectedProjectIndex, currentProject]);
  
  // Debug: Log current project - FORCE RELOAD
  React.useEffect(() => {
    console.log('=== PROJECTS DEBUG ===');
    console.log('Current project index:', selectedProjectIndex);
    console.log('Current project title:', currentProject?.title);
    console.log('Total projects:', myProjects.length);
    console.log('All project titles:', myProjects.map((p, i) => `${i}: ${p.title}`));
    console.log('Project at index 4:', myProjects[4]?.title);
    console.log('====================');
  }, [selectedProjectIndex, currentProject]);

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    })
  }
  return (
    <section className='c-space my-20'>
      <p className='head-text '>My Projects</p>
      {/* Force reload - v2 */}
      <div className='grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full'>
        <div className='flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200'>
          {!currentProject.title.includes('IntelliCare AI') && (
            <div className='absolute top-0 right-0'>
              <img src={currentProject.spotlight} alt='spotlight' className='w-full h-96 object-cover rounded-xl' />
            </div>
          )}
          <div className='p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg' style={currentProject.logoStyle}>
            <img src={currentProject.logo} alt="logo" className='w-10 h-10 shadow-sm  ' />
          </div>
          <div className='flex flex-col gap-5 text-white-600 my-5'>
            <p className='text-white text-2xl font-semibold animatedText'>{currentProject.title}</p>
            <p className='animatedText'>{currentProject.desc}</p>
            <p className='animatedText'>{currentProject.subdesc}</p>
          </div>
          <div className='flex items-center justify-between flex-wrap gap-5'>
            <div className='flex items-center gap-2'>
              {currentProject.tags.map((tag, index) => (
                <div key={index} className='tech-logo'>
                  <img 
                    src={tag.path} 
                    alt={tag.name} 
                    className='w-full h-full object-contain' 
                  />
                </div>
              ))}
            </div>
            <a href={currentProject.href} target="_blank" rel='noreferrer' className='flex items-center gap-2 cursor-pointer text-white-600'>
              <p>Check Live Site</p>
              <img src='/assets/arrow-up.png' className='w-3 h-3' alt='arrow' />
            </a>
          </div>
          <div className='flex justify-between items-center mt-7'>
            <button className='arrow-btn' onClick={() => handleNavigation('previous')}>
              <img src='/assets/left-arrow.png' alt='left arrow' className='w-4 h-4' />
            </button>
            <button className='arrow-btn' onClick={() => handleNavigation('next')}>
              <img src='/assets/right-arrow.png' alt='right arrow' className='w-4 h-4' />
            </button>
          </div>
        </div>
        <div className='border border-black-300 bg-black-200 rounded-lg h-96 md:h-full'>
          <Canvas>
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[10, 10, 5]} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group scale={1.9} position={[0, -2.5, 0]} rotation={[0, -0.1, 0]}>
                  <DemoComputer texture={currentProject.texture} />
                </group>
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
          </Canvas>
        </div>

      </div>
    </section>
  )
}

export default Projects
