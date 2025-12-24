import { Node, Reactjs } from '@react-symbols/icons';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import React, { Suspense, useEffect, useState } from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import HackerRoom from '../component/HackerRoom';
import CanvasLoader from '../component/CanvasLoader';
//import { Leva, useControls } from 'leva';
import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from '../constants/index.js';
import Target from '../component/Target.jsx';
import ReactLogo from '../component/ReactLogo.jsx';
import Cube from '../component/Cube.jsx';
import Rings from '../component/Rings.jsx';
import HeroCamera from '../component/HeroCamera.jsx';
import Button from '../component/Button.jsx';



const Hero = () => {
    const [text] = useTypewriter({
        words: [
            'Krishna Gunupudi',
            'a Full-Stack AI Developer 🖥️',
            'a Frontend Developer',
            'a Backend Developer'
        ],
        loop: true,
        typeSpeed: 130,
    });

    // Delay Canvas loading to ensure text renders first
    const [showCanvas, setShowCanvas] = useState(false);

    useEffect(() => {
        // Wait 1 second after component mounts to show Canvas
        const timer = setTimeout(() => {
            setShowCanvas(true);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    const isSmall = useMediaQuery({ maxWidth: 450 });
    const isMobile = useMediaQuery({ maxWidth: 769 });
    const isTablet = useMediaQuery({ maxWidth: 1025 });
    const isMedium = useMediaQuery({ maxWidth: 830 });
    const isVerySmall = useMediaQuery({ maxWidth: 380 })

    return (
        <section className='min-h-screen w-full flex flex-col relative' style={{ backgroundColor: '#010103', overflow: 'visible' }}>
            {/* Text container - must be above Canvas */}
            <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 relative' style={{ position: 'relative', zIndex: 1000, pointerEvents: 'auto', minHeight: '200px' }}>
                <p style={{ 
                    color: '#FFFFFF', 
                    fontSize: '24px', 
                    fontWeight: 'bold',
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    gap: '8px',
                    zIndex: 1001
                }}>
                    <span style={{ color: '#FFFFFF' }}>Hi, I am</span>
                    <span style={{ color: '#10B981', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        {text}
                        {text === 'Krishna Gunupudi' && <span style={{ fontSize: '24px' }}>👋</span>}
                        {text === 'a Frontend Developer' && <Reactjs width={35} height={35} className="ml-1 animate-spin-slow" />}
                        {text === 'a Backend Developer' && <Node width={35} height={35} className="ml-1" />}
                    </span>
                    <Cursor cursorColor='blue' cursorStyle='_' />
                </p>
                <p style={{ 
                    color: '#D5D8EA',
                    fontSize: '20px',
                    textAlign: 'center',
                    marginTop: '16px',
                    zIndex: 1001
                }}>
                    Transforming ideas into innovative products, one line at a time.
                </p>
            </div>
            {/* Canvas container - DISABLED due to covering content issue */}
            {/* TODO: Fix Canvas transparency and positioning */}
            {false && (
            <div 
                className={`hi absolute pointer-events-none ${isVerySmall ? 'h-48' : isSmall ? 'h-56' : 'h-60'}`} 
                style={{ 
                    background: 'transparent', 
                    top: '50%', 
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '100%',
                    height: isVerySmall ? '12rem' : isSmall ? '14rem' : '15rem',
                    maxWidth: '100%',
                    maxHeight: isVerySmall ? '12rem' : isSmall ? '14rem' : '15rem',
                    overflow: 'hidden',
                    zIndex: 1,
                    position: 'absolute',
                    isolation: 'isolate',
                    contain: 'layout style paint'
                }}
            >
                <Canvas 
                    gl={{ 
                        alpha: true, 
                        antialias: true, 
                        preserveDrawingBuffer: true,
                        powerPreference: "high-performance"
                    }}
                    style={{ 
                        background: 'transparent !important',
                        width: '100% !important',
                        height: '100% !important',
                        maxWidth: '100% !important',
                        maxHeight: isVerySmall ? '12rem !important' : isSmall ? '14rem !important' : '15rem !important',
                        display: 'block',
                        position: 'relative',
                        zIndex: 1,
                        overflow: 'hidden',
                        contain: 'strict'
                    }}
                    camera={{ position: [0, 0, 30], fov: 75 }}
                    onCreated={({ scene, gl }) => {
                        scene.background = null;
                        gl.setClearColor(0x000000, 0);
                        // Force transparency repeatedly
                        const forceTransparent = () => {
                            scene.background = null;
                            gl.setClearColor(0x000000, 0);
                        };
                        forceTransparent();
                        setTimeout(forceTransparent, 100);
                        setTimeout(forceTransparent, 500);
                        setTimeout(forceTransparent, 1000);
                        setTimeout(forceTransparent, 2000);
                    }}
                >
                    <SceneBackground />
                    <Suspense fallback={<CanvasLoader />}>
                        <ControlledHackerRoom />
                        <ambientLight intensity={1} />
                        <directionalLight position={[10, 10, 10]} intensity={0.5} />
                    </Suspense>
                </Canvas>
            </div>
            )}
            <div className='absolute  bottom-10 left-0 right-0 w-full z-10 c-space'>
                <a
                    href="#about"
                    className='w-fit'
                    onClick={(e) => {
                        e.preventDefault();
                        const aboutSection = document.getElementById('about');
                        const offset = 100; // Custom offset value
                        const y = aboutSection.getBoundingClientRect().top + window.pageYOffset - offset;
                        window.scrollTo({ top: y, behavior: 'smooth' });
                    }}
                >
                    <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
                </a>
            </div>
        </section>
    );
};

// Component to ensure scene background stays transparent
const SceneBackground = () => {
    const { scene, gl } = useThree();
    
    // Use useFrame to ensure background stays transparent on every frame
    useFrame(() => {
        // Force transparent background every frame
        scene.background = null;
        gl.setClearColor(0x000000, 0);
        
        // Also check the canvas element itself
        const canvas = gl.domElement;
        if (canvas) {
            canvas.style.background = 'transparent';
            canvas.style.backgroundColor = 'transparent';
        }
    });
    
    useEffect(() => {
        // Set transparent background immediately
        scene.background = null;
        gl.setClearColor(0x000000, 0);
        
        // Also set canvas element background
        const canvas = gl.domElement;
        if (canvas) {
            canvas.style.background = 'transparent';
            canvas.style.backgroundColor = 'transparent';
        }
    }, [scene, gl]);
    
    return null;
};

// Create a separate component to control HackerRoom
const ControlledHackerRoom = () => {
    /*const x = useControls('HackerRoom', {
        positionX: { value: 0.7, min: -10, max: 10 },
        positionY: { value: -8.1, min: -10, max: 10 },
        positionZ: { value: 4.7, min: -10, max: 10 },
        rotationX: { value: 0, min: -10, max: 10 },
        rotationY: { value: -3.4, min: -10, max: 10 },
        rotationZ: { value: 0, min: -10, max: 10 },
        scale:{value: 0.12, min: 0.1, max: 10}
    }); */


    /*const isMobile = useMediaQuery({maxWidth : 450})
    const isSmallScreen = useMediaQuery({maxWidth : 400})
    const isVerySmallScreen = useMediaQuery({maxWidth : 350})
    const isMediumScreen = useMediaQuery({maxWidth : 1030}) */

    const isSmall = useMediaQuery({ maxWidth: 450 });
    const isMobile = useMediaQuery({ maxWidth: 769 });
    const isTablet = useMediaQuery({ maxWidth: 1025 });
    const isMedium = useMediaQuery({ maxWidth: 830 });
    const isVerySmall = useMediaQuery({ maxWidth: 380 })
    const sizes = calculateSizes(isVerySmall, isSmall, isMobile, isTablet, isMedium)

    return (
        <>
            {/*<OrbitControls  /> */}
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <HeroCamera isSmall={isSmall} isMedium={isMedium} isMobile={isMobile} isTablet={isTablet} isVerySmall={isVerySmall}>
                <HackerRoom position={sizes.deskPosition} rotation={[0, -Math.PI, 0]} scale={sizes.deskScale} /> // Ensure small screens are checked first
            </HeroCamera>
            <group>

                <Target position={sizes.targetPosition} scale={isTablet ? 1 : 1.5} />
                <ReactLogo position={sizes.reactLogoPosition} scale={isVerySmall || isSmall ? 0.14 : isMobile || isTablet ? 0.2 : 0.32} />
                <Cube position={sizes.cubePosition} scale={isVerySmall || isSmall ? 0.5 : isMobile || isMedium ? 0.7 : isTablet ? 0.75 : 1} />
                <Rings position={sizes.ringPosition} scale={1} />

            </group>
        </>
    );
};

export default Hero;
