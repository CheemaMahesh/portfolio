import typeScript from '../assets/typescript.png';
import react from '../assets/logo_dark.svg';
import next from '../assets/nextjs.svg';
import NodeJS from '../assets/Node.js_logo.svg.png';
import expressJS from '../assets/expressjs.png';
import mongo from '../assets/mongo.avif';
import tailwind from '../assets/tailwind.png';
import html from '../assets/html.webp';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import git from '../assets/git.png';
import github from '../assets/github.png';
import figma from '../assets/figma.png';
import vscode from '../assets/vscode.png';
import postman from '../assets/postman.png';
import postgresql from '../assets/Postgresql.png';
import firebase from '../assets/firebase.png';
import redux from '../assets/redux.png';
import jwt from '../assets/jwt.jpg';
import Project2 from "../assets/project-5.png";
import Project3 from "../assets/project-11.png";
import Project1 from "../assets/project-3.png";
import ProjectD from '../assets/projectD.avif';
import ProjectH from '../assets/projectH.png';

export const projectsList = [
    {
        project: 'Project 1.0',
        title: 'MPromptopia',
        description: 'MPromptopia is an innovative application designed to empower users in the realm of artificial intelligence by facilitating easy access to a rich repository of AI prompts. Users can seamlessly log in using Google authentication, ensuring a secure and convenient experience. Once logged in, they can explore a vast collection of prompts tailored for various AI applications, enabling them to enhance their creative projects or streamline their workflows. Additionally, users have the ability to contribute to the community by adding their own AI prompts, complete with relevant tags to improve searchability and organization. This collaborative feature fosters a vibrant ecosystem where users can share insights and discover new ideas, making MPromptopia a go-to platform for anyone looking to harness the power of AI through prompts. With its user-friendly interface and community-driven approach, MPromptopia aims to be an essential tool for both novices and experts in the AI domain.',
        imgsrc: Project3,
        link: 'https://mahesh-promptopia.vercel.app/',
        skills: [
            {
                skill: 'NextJs',
                imgsrc: next,
            },
            {
                skill: 'ExpressJs',
                imgsrc: expressJS,
            },
            {
                skill: 'MongoDB',
                imgsrc: mongo,
            },
            {
                skill: 'TypeScript',
                imgsrc: typeScript,
            },
            {
                skill: 'Tailwind',
                imgsrc: tailwind,
            },

        ]
    },
    {
        project: 'Project 1.2',
        title: 'WeMeet A Dating App (Under Development)',
        description: 'WEMEET is an innovative dating application designed to facilitate connections between users and foster engaging conversations. Built using a robust tech stack that includes Node.js, Next.js, Express, PostgreSQL, Tailwind, Redux, and JWT, the app features a chat engine powered by WebSockets, ensuring a seamless communication experience. The front end predominantly utilizes pure JavaScript functions, comprising 80% of the code, enhancing performance and responsiveness. Additionally, WEMEET is optimized for search engines through Next.js`s server-side rendering capabilities, striking a balance between SEO and user experience. To combat spam, the app effectively limits connection and interest requests to 100 per day and 1,000 per month.',
        imgsrc: ProjectD,
        // link: 'https://mahesh-promptopia.vercel.app/',
        skills: [
            {
                skill: 'NextJs',
                imgsrc: next,
            },
            {
                skill: 'ExpressJs',
                imgsrc: expressJS,
            },
            {
                skill: 'PostgreSQL',
                imgsrc: postgresql,
            },
            {
                skill: 'TypeScript',
                imgsrc: typeScript,
            },
            {
                skill: 'Tailwind',
                imgsrc: tailwind,
            },
            {
                skill: 'Redux',
                imgsrc: redux,
            },
            {
                skill: 'JWT',
                imgsrc: jwt,
            },
            {
                skill: 'Postman',
                imgsrc: postman,
            }

        ]
    },
    {
        project: 'Project 1.3',
        title: 'Hospital Management System (Under Development)',
        description: 'the Hospital Management System is a comprehensive application designed to store and manage patient and doctor details efficiently. Built using a robust tech stack that includes Node.js, React, Express, JWT, MongoDB, and Tailwind, this project allows patients to have their medical records securely saved and easily accessible. Each patient is provided with a dedicated profile that includes their medical history, ensuring personalized care. The user interface is crafted to be simple and user-friendly, significantly enhancing the overall user experience through React`s dynamic capabilities.',
        imgsrc: ProjectH,
        // link: 'https://mahesh-promptopia.vercel.app/',
        skills: [
            {
                skill: 'ReactJS',
                imgsrc: react,
            },
            {
                skill: 'ExpressJs',
                imgsrc: expressJS,
            },
            {
                skill: 'MongoDB',
                imgsrc: mongo,
            },
            {
                skill: 'TypeScript',
                imgsrc: typeScript,
            },
            {
                skill: 'Tailwind',
                imgsrc: tailwind,
            },
            {
                skill: 'Redux',
                imgsrc: redux,
            },
            {
                skill: 'JWT',
                imgsrc: jwt,
            },
            {
                skill: 'Postman',
                imgsrc: postman,
            }

        ]
    },
    {
        project: 'Project 1',
        title: 'Weather App',
        description: 'we can focus on providing a comprehensive and user-friendly experience. This includes displaying detailed weather information such as current conditions, temperature, humidity, and wind speed, along with a 7-day forecast featuring daily summaries and weather icons for better visual representation. The layout can be organized using cards or sections to separate different types of information, ensuring a responsive design that adapts to various devices. Additionally, we can incorporate interactive elements like a toggle for Celsius and Fahrenheit, a search bar for different locations, and a refresh button for updating data. To improve aesthetics, we can implement CSS animations for transitions and a color scheme that reflects the current weather conditions. Finally, it’s essential to include error handling to display user-friendly messages in case of API failures or invalid locations.',
        imgsrc: Project1,
        // link: 'https://github.com/maheshcheema/Portfolio'
        skills: [
            {
                skill: 'HTML',
                imgsrc: html,
            },
            {
                skill: 'CSS',
                imgsrc: css,
            },
            {
                skill: 'JavaScript',
                imgsrc: javascript,
            }
        ]
    },
    {
        project: 'Project 2',
        title: 'Megarama Cinema',
        description: 'The Megarama Cinema app is a comprehensive ticket booking web application designed to enhance the user experience for moviegoers. Built using a modern tech stack that includes React, Tailwind CSS, TypeScript, MongoDB, Node.js, and Express, the app provides a seamless interface for users to search for movies, book tickets, and purchase beverages. The search functionality allows users to quickly find their desired films, while the ticket booking feature offers an intuitive process for selecting seats and completing transactions. Additionally, users can conveniently order beverages to enjoy during their movie experience, making it a one-stop solution for cinema enthusiasts. The application is designed with responsiveness in mind, ensuring that users can access all features on various devices, and it incorporates best practices for performance and security. Overall, Megarama Cinema aims to provide a user-friendly and efficient platform for booking movie tickets and enhancing the overall cinema experience.',
        // link: 'https://github.com/maheshcheema/Portfolio'
        imgsrc: Project2,
        skills: [
            {
                skill: 'React',
                imgsrc: react,
            },
            {
                skill: 'Tailwind',
                imgsrc: tailwind,
            },
            {
                skill: 'TypeScript',
                imgsrc: typeScript,
            },
            {
                skill: 'NodeJS',
                imgsrc: NodeJS,
            },
            {
                skill: 'ExpressJs',
                imgsrc: expressJS,
            },
            {
                skill: 'MongoDB',
                imgsrc: mongo,
            },
        ]
    },
];

export const skillList = [
    {
        skill: 'TypeScript',
        imgsrc: typeScript,
    },
    {
        skill: 'React',
        imgsrc: react,
    },
    {
        skill: 'Next.js',
        imgsrc: next,
    },
    {
        skill: 'Node.js',
        imgsrc: NodeJS,
    },
    {
        skill: 'Express.js',
        imgsrc: expressJS,
    },
    {
        skill: 'Postman',
        imgsrc: postman,
    },
    {
        skill: 'Postgresql',
        imgsrc: postgresql,
    },
    {
        skill: 'MongoDB',
        imgsrc: mongo,
    },
    {
        skill: 'Tailwind',
        imgsrc: tailwind,
    },
    {
        skill: 'HTML',
        imgsrc: html,
    },
    {
        skill: 'CSS',
        imgsrc: css,
    },
    {
        skill: 'JavaScript',
        imgsrc: javascript,
    },
    {
        skill: 'Git',
        imgsrc: git,
    },
    {
        skill: 'GitHub',
        imgsrc: github,
    },
    {
        skill: 'Figma',
        imgsrc: figma,
    },
    {
        skill: 'VSCode',
        imgsrc: vscode,
    },
    {
        skill: 'Firebase',
        imgsrc: firebase,
    },
    {
        skill: 'Redux',
        imgsrc: redux,
    },
    {
        skill: 'JWT',
        imgsrc: jwt,
    }
];

export const NavList = [
    'Home',
    'About',
    'Experience',
    'Skills',
    'Projects',
    'Contact',
];

export const mySelftList = [
    'MAHESH CHEEMA',
    'WEB DEVELOPER',
    'WEB 3.0 ENTHUSIAST',
    'BLOCKCHAIN ENTHUSIAST',
    'FULL STACK DEVELOPER',
    'MERN STACK DEVELOPER',
    'JAVASCRIPT DEVELOPER',
    'TECH ENTHUSIAST',
    'TECH LOVER',
];

export const internshipWorkList = [
    'Initiated and implemented new strategies to enhance component reusability across the application.',
    'Developed customized form components using styled-components and Tailwind CSS for a consistent user interface.',
    'Reduced the load time of API calls by 50 milliseconds through the implementation of custom hooks.',
    'Enhanced the user experience by implementing responsive design and optimized the application for different screen sizes.',
    'Improved maintainability and reduced development time by reusing components effectively.'
];

export const fulltimeWorkList = [
    'Built an end-to-end cohort setup flow from creating a course to previewing and launching it, currently used by over 50 clients.',
    'Contributed to the consumption flow, benefiting more than 4,000 learners across the country from various sectors.',
    'Implemented an attendance feature for all live sessions to accurately track participant engagement.',
    'Developed a feedback feature for courses to facilitate continuous improvement based on user input.',
    'Ideated and designed intuitive user interfaces that significantly enhanced the overall user experience.',
    'Streamlined course management processes, making it easier for instructors to manage and deliver content.',
    'Enhanced accessibility to educational resources through effective platform design and functionality.',

];
