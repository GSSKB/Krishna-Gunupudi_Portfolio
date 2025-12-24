// Updated: IntelliCare AI project added - v2
export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Projects',
    href: '#project',

  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'Netflix-Home Page clone',
    desc: 'I created a Netflix homepage clone that adapts seamlessly to all screen sizes, ensuring a consistent user experience. The site features responsive navigation, carousel sliders, a grid layout, and custom styling to enhance the design. This project showcases my ability to build modern, user-friendly web interfaces.',
    subdesc:
      "Developed using HTML, CSS,Bootstrap, and Javascript this Netflix homepage clone ensures seamless responsiveness, modern UI design, and high performance across devices with a clean layout.",
    href: 'https://movie-homepage-clone.vercel.app',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.ico',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'Html',
        path: '/assets/technologies_logo/html.svg',
      },
      {
        id: 2,
        name: 'Css',
        path: 'assets/technologies_logo/css.png',
      },
      {
        id: 3,
        name: 'JavaScript',
        path: '/assets/technologies_logo/javascript.svg',
      },
      {
        id: 4,
        name: 'BootStrap',
        path: '/assets/technologies_logo/Bootstrap_logo.png',
      },

    ],
  },
  {
    title: 'Spotify - Music Playing Website',
    desc: 'I developed a Spotify-inspired music player website that dynamically fetches music tracks using JavaScript and integrates Firebase Authentication for user sign-up, login, and logout. With a responsive design that adapts smoothly across all devices, this project demonstrates my ability to create engaging, user-friendly web applications.',
    subdesc:
      'Developed using HTML, CSS, JavaScript, and Firebase, this Spotify-inspired music player dynamically fetches tracks, ensuring seamless responsiveness and an engaging user interface across all devices.',
    href: 'https://spotify-music-player-tau.vercel.app',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'Html',
        path: '/assets/technologies_logo/html.svg',
      },
      {
        id: 2,
        name: 'Css',
        path: 'assets/technologies_logo/css.png',
      },
      {
        id: 3,
        name: 'JavaScript',
        path: '/assets/technologies_logo/javascript.svg',
      },
      {
        id: 4,
        name: 'Fire Base',
        path: '/assets/technologies_logo/firebase.svg',
      },
    ],
  },
  {
    title: 'SwiftCart - Online E-commerce Website',
    desc: ' I developed SwiftCart, a personal e-commerce project that highlights my skills in web development. This dynamic and interactive website utilizes HTML, CSS, and JavaScript to create a responsive user interface that enhances the online shopping experience. Key features include product display, category filtering, and a search functionality, all designed to make navigation intuitive and engaging.',
    subdesc:
      'Built with HTML, CSS, and JavaScript, SwiftCart delivers a seamless and responsive e-commerce experience, integrating external APIs for dynamic product data and user-friendly interactions.',
    href: 'https://swift-cart.s3.us-east-2.amazonaws.com/public/index.html',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'Html',
        path: '/assets/technologies_logo/html.svg',
      },
      {
        id: 2,
        name: 'Css',
        path: '/assets/technologies_logo/css.png',
      },
      {
        id: 3,
        name: 'JavaScript',
        path: '/assets/technologies_logo/javascript.svg',
      },
      {
        id: 4,
        name: 'Api',
        path: '/assets/technologies_logo/restapi.png',
      },
      {
        id: 5,
        name: 'BootStrap',
        path: '/assets/technologies_logo/Bootstrap_logo.png',
      },

    ],
  },
  {
    title: 'Flight Booking System – Full-Stack Airline Reservation Application',
    desc: 'The Flight Booking System is a full-stack web application designed to streamline airline reservation workflows, from searching flights to booking, managing passengers, and handling administrative operations. This project highlights my expertise in building scalable, enterprise-grade applications using ASP.NET Core, Angular, and SQL Server, ensuring secure, efficient, and reliable user experiences across all modules.',
    subdesc:
      'Developed with ASP.NET Core 6, C#, Angular, TypeScript, and SQL Server, the system features a modular architecture with clear separation of concerns across Controllers, Services, and Repository layers. It includes secure authentication, real-time seat availability checks, structured booking flows, and efficient database operations. The backend exposes RESTful APIs consumed by an Angular frontend to deliver a seamless flight search and booking experience for users.',
    href: '#',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#1E3A8A',
      border: '0.2px solid #172554',
      boxShadow: '0px 0px 60px 0px #1E3A8A4D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'C#',
        path: '/assets/technologies_logo/csharp.png?v=2',
      },
      {
        id: 2,
        name: 'ASP.NET Core',
        path: '/assets/technologies_logo/aspnet.png?v=2',
      },
      {
        id: 3,
        name: 'Angular',
        path: '/assets/technologies_logo/angular.png?v=2',
      },
      {
        id: 5,
        name: 'SQL Server',
        path: '/assets/technologies_logo/sqlserver.png?v=2',
      },
      {
        id: 6,
        name: 'Entity Framework Core',
        path: '/assets/technologies_logo/efcore.png?v=2',
      },
      {
        id: 8,
        name: 'Visual Studio',
        path: '/assets/technologies_logo/visualstudio.png?v=2',
      },
    ],
  },
  {
    // IntelliCare AI Project
    title: 'IntelliCare AI – RAG-Powered Medical Guidance System',
    desc: 'IntelliCare AI is a full-stack healthcare assistant that delivers AI-powered medical consultations, symptom-based risk assessments, and doctor discovery using RAG, ML models, and LLMs. It integrates a React + FastAPI architecture with FAISS vector search and Google Gemini to provide accurate, knowledge-grounded healthcare responses.',
    subdesc:
      'The system validates all queries against a curated medical dataset and returns structured insights, recommendations, and similar case analysis. Built with React for the frontend, FastAPI for the backend, FAISS for vector search, and Google Gemini for LLM integration, IntelliCare AI ensures accurate, knowledge-grounded healthcare responses with real-time medical guidance.',
    href: '#',
    texture: '/textures/project/IntelliCare_AI.mp4?v=2.0',
    logo: '/assets/IntelliCare_logo.png',
    logoStyle: {
      backgroundColor: '#4A90E2',
      border: '0.2px solid #2E5C8A',
      boxShadow: '0px 0px 60px 0px #4A90E24D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/technologies_logo/react.svg',
      },
      {
        id: 2,
        name: 'Google Gemini',
        path: '/assets/Gemini.png',
      },
      {
        id: 3,
        name: 'FastAPI',
        path: '/assets/FastAPI.png',
      },
      {
        id: 4,
        name: 'Tailwind CSS',
        path: '/assets/Tailwind.png',
      },
      {
        id: 5,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 6,
        name: 'FAISS',
        path: '/assets/FAISS.png',
      },
    ],
  },
];
// Version: 1.0.5 - IntelliCare video file replaced, cache-busting added

// Debug: Log projects on load
console.log('Projects loaded:', myProjects.map(p => p.title));

export const calculateSizes = (isVerySmall, isSmall, isMobile, isTablet, isMedium) => {
  return {
    deskScale: isSmall ? 0.059 : isMobile ? 0.1 : isMedium ? 0.09 : isTablet ? 0.09 : 0.1,
    deskPosition: isVerySmall ? [0.5, -5, 0] : isSmall ? [0.5, -4.5, 0] : isMobile ? [0.7, -8, 0] : isMedium ? [0.7, -6, 0] : isTablet ? [1, -6, 0] : [0.24, -7.8, 0],
    cubePosition: isVerySmall ? [5.2, -6, 0] : isSmall ? [4.5, -5, 0] : isMobile ? [8, -7, 0] : isMedium ? [7.3, -5, 0] : isTablet ? [7.3, -5, 0] : [12, -9, 0], // Merge same mobile/tablet values
    reactLogoPosition: isVerySmall ? [4.7, 3, 0] : isSmall ? [4.2, 4, 0] : isMobile ? [7, 5, 0] : isMedium ? [6.8, 5, 0] : isTablet ? [6, 5.5, 0] : [11, 3.5, 0], // Merge same mobile/tablet values
    ringPosition: isVerySmall ? [-11, 8, 0] : isSmall ? [-9.6, 10, 0] : isMobile ? [-17, 13, 0] : isMedium ? [-15, 13, 0] : isTablet ? [-15, 15, 0] : [-30, 7, 0],
    targetPosition: isVerySmall ? [-1.5, -10, -10] : isSmall ? [-0.7, -9, -10] : isMobile ? [-5, -10, -10] : isTablet ? [-4, -9, -10] : [-12, -12, -10],
  };
};


export const workExperiences = [

  {
    id: 1,
    name: 'Morgan Stanley',
    pos: 'Full Stack Developer',
    duration: 'June 2025 – Present',
    title: [
      "Developed a scalable banking platform using React.js, Node.js, Spring Boot, and PostgreSQL/MongoDB, optimizing transaction processing and account management APIs to improve response times by 40% and support 1,000+ daily users.",
      "Implemented secure role-based authentication with Spring Security, JWT, and Firebase Auth, adding AI-driven anomaly detection to flag suspicious login and transaction patterns and strengthen fraud prevention efforts.",
      "Built an AI-driven analytics dashboard using the MERN stack, Flask microservices, and AWS, providing ML-based insights for credit risk, customer behavior, and real-time transaction monitoring to improve operational decisions by 35%.",
      "Automated deployments using Docker, Kubernetes, Terraform, and GitHub Actions; implemented Jest, Cypress, JUnit, and Mockito test suites to ensure platform reliability; and used Python/Selenium with LangChain automation to eliminate 25+ hours of manual reporting and compliance tasks per week."
    ],
    location: 'New York, NY',
    icon: '/assets/morgan-stanley.png',
    animation: 'clapping',
  },
  {
    id: 2,
    name: 'Indiana State University',
    pos: 'Graduate Assistant',
    duration: 'June 2023 – May 2025',
    title: [
      "Implemented authentication workflows and role-based access control using Node.js, Express.js, JWT, and MongoDB for a university portal, improving login reliability by 40% and supporting secure access for students, faculty, and staff.",
      "Built responsive and accessible front-end modules using React.js, TypeScript, HTML5, CSS3, and Material-UI, reducing page-load time by 25% and increasing student engagement on course dashboards and event management pages.",
      "Designed and optimized relational and NoSQL data models using PostgreSQL and MongoDB, building RESTful APIs in Node.js to streamline academic workflows such as course enrollment, attendance tracking, and resource reservations reducing query latency by 35%.",
      "Developed interactive dashboard features with React.js and WebSockets for real-time updates on campus events, lab availability, and student analytics, improving decision-making speed for student organizations by 20%."
    ],
    icon: '/assets/Isu.png',
    animation: 'victory',
  },
  {
    id: 3,
    name: 'Capgemini Technology Services, India',
    pos: 'Software Engineer Analyst',
    duration: 'Jan 2022 – Sept 2023',
    title: [
      "Configured scalable ASP.NET Core microservices for a healthcare client on Azure and SQL Server, optimizing API-driven communication between patient, billing, and claims systems and reducing response latency by 40% through strategic caching and query optimization. Additionally, strengthened data integrity and interoperability by implementing HIPAA-aligned API standards.",
      "Refined healthcare ETL pipelines using SQL Server, Stored Procedures, and Entity Framework, automating 30% of manual data processing tasks and reducing data latency by 35%, ensuring faster and more reliable clinical and operational data integration.",
      "Developed secure, high-performance ASP.NET Core microservices with JWT-protected REST APIs to support HIPAA-aligned data exchange across EMR, scheduling, and patient-engagement systems, improving request throughput by 30% in a distributed healthcare environment. Implemented centralized monitoring with Azure App Insights and ELK, reducing troubleshooting time by 35%.",
      "Enhanced responsive front-end modules using Angular, React.js, HTML5, CSS3, and Bootstrap integrated with ASP.NET MVC and Web API, reducing page load times by 25% and improving clinical dashboard/report generation efficiency by 40% for healthcare staff and administrators."
    ],
    icon: '/assets/capgemini.png',
    animation: 'salute',
  },
];













