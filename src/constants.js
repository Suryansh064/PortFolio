// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// Education Section Logo's
import nitLogo from './assets/education_logo/nit.png';
import bsnvLogo from './assets/education_logo/bsnv.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/mortgage.png';
import csprepLogo from './assets/work_logo/pokemon.png';
import movierecLogo from './assets/work_logo/taskliist.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];

 
  
  export const education = [
    {
      id: 0,
      img: nitLogo,
      school: "NIT JAMSHEDPUR",
      date: "Aug-2023 - June 2026",
      grade: "8.08 CGPA",
      desc: "I'm persuing  Master's degree (MCA) in Computer Applications from NIT JAMSHEDPUR.  I'm  gaining a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at NIT JAMSHEDPUR has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Master of Computer Applications - MCA",
    },
    {
      id: 1,
      img: bsnvLogo,
      school: "B.S.N.V PG COLLEGE, LUCKNOW ,UP ",
      date: "July 2020 - June 2023",
      grade: "65.8%",
      desc: "I completed my Bachelor's degree in Science (B.Sc.) from B.S.N.V College Affiliated from Lucknow University. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of Science and technology..",
      degree: "Bachelor of Science - BSC (Physics,Chemistry,Math)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Mortgage Calculator",
      description:"Developed a mortgage calculator using React, Tailwind CSS, and useState for state management Implemented dynamic input handling and a formula to calculate monthly payments based on principal amount, interest rate, and loan duration. Enhanced UI/UX with Tailwind for responsive styling.",
      image: githubdetLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS"],
      github: "https://github.com/Suryansh064/MortageCalculator",
      webapp: "https://mortagecal.netlify.app/",
    },
    {
      id: 1,
      title: "Pokemon App",
      description:
        "Built a dynamic web app using React.js and PokeAPI to display Pokemon data with search, filtering,and responsive UI. Implemented state management with hooks and styled components for a smooth user experience",
      image: csprepLogo,
      tags: ["React JS", "HTML", "CSS", "JavaScript","Tailwind CSS","API"],
      github: "https://github.com/Suryansh064/Pokemon",
      webapp: "https://pokemonapk.netlify.app/",
    },
    {
      id: 2,
      title: "To Do List",
      description:
        "A To-Do List application built using React, incorporating hooks like useState for state management. Features include adding, editing, and deleting tasks with a responsive UI styled using Tailwind CSS. It allows users to add delete tasks with ease",
      image: movierecLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Suryansh064/TaskList",
      webapp: "https://tasklistss.netlify.app/",
    },
  ];