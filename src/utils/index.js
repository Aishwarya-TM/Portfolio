import chat from "../assets/images/inventory management.png";
import ora from "../assets/images/bus.png";
import cast from "../assets/images/news.png";



export const headlines = [
    "Hi, I'm Aishwarya T M.",
    "I'm a Software Developer",
    "Over the past few years, I've immersed myself in building and scaling backend software while actively tackling frontend challenges."
];

export const fixedNavItems = [
    { name: "Home" },
    { name: "About" },
    { name: "Projects" },
    { name: "Contact" }
]

export const projects = [
    {
        title: 'News Portal App',
        image: cast,
        linkGithub: 'https://github.com/Aishwarya-TM/newsportal-app-frontend..git',
        linkOnline: 'https://newsportal-app-frontend.vercel.app/',
        description: 'News Portal is a web app,allowing the admin to perform the basic CRUD operations on news categories, sub categories, articles, and so ono ',
        techStack: ['React', 'Node', 'Express', 'Mongoose', 'MongoDB']
    },
    {
        title: 'Bus Ticket Booking App',
        image: ora,
        linkOnline: 'https://bus-ticket-booking-be.vercel.app/',
        linkGithub: 'https://github.com/Aishwarya-TM/bus-ticket-booking-be',
        description: 'A web application that allows users to search for buses, view seat availability, and make reservations effortlessly.',
        techStack: ['Node', 'Express', 'Mongoose', 'MongoDB']
    },
    {
        title: 'Inventory Management App',
        image: chat,
        linkOnline: 'https://inventory-management-frontend-xd6w.vercel.app/',
        linkGithub: 'https://github.com/Aishwarya-TM/inventory-management-backend',
        description: 'This application includes a comprehensive admin panel that allows administrators to perform essential CRUD operations on products, suppliers, and orders, enabling streamlined inventory management.',
        techStack:  ['React', 'Node', 'Express', 'Mongoose', 'MongoDB']
    },
    
];

export const skillsWork = [
    'Java',
    'ExpressJS',
    'NodeJS',
    'ReactJS',
    'MongoDB',
    'RESTAPI',
    'MySQL',
    'VCS (git)'
];



