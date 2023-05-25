import {
    mobile,
    backend,
    creator,
    web,
    bootstrap,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    nestjs,
    mysql,
    kodilla,
    furniture,
    festival,
    pizzeria,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Nest JS",
      icon: nestjs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    
  ];
  
  const experiences = [
    {
      title: "Bootcamp Full Stack Developer",
      company_name: "Kodilla",
      icon: kodilla,
      iconBg: "#383E56",
      date: "July 2022 - May 2023",
      points: [
        "A 800 hours course, from 06.07.2022 to 17.05.2023.",
        "Developing and maintaining web applications using HTML, CSS, JavaScript, TypeScript, Node.js, React.js, Nest.js, MySQL and other related technologies.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Team Project",
      company_name: "Kodilla",
      icon: kodilla,
      iconBg: "#E6DEDD",
      date: "Dec 2022 - Jan 2023",
      points: [
        "Work in a team of 6 for 3 weeks.",
        "The project was to build a web app accordance with the client needs.",
        "Doing tasks assigned by Project Manager in Jaira.",
        "Weekly video meetings.",
      ],
    },
    {
      title: "Full Stack Individual Project",
      company_name: "Kodilla",
      icon: kodilla,
      iconBg: "#383E56",
      date: "Apr 2023 - May 2023",
      points: [
        "The app written in React. Using Nest.js and MySQL.",
        "Components built using functions.",
        "Redux used to handle shared data.",
        "The products downloaded from the API server and stored in the Redux exchange.",
        "Orders saved in a database and the API server provide access to them.",
        "Server offers database endpoints.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "No testimonial yet. But I hope it will appear here soon :)",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "No testimonial yet. But I hope it will appear here soon :)",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "No testimonial yet. But I hope it will appear here soon :)",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Furniture Shop",
      description:
        "This team project is a furniture store website, in accordance with the client's guidelines. Used React technologies, Redux and Bootstrap.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: furniture,
      source_code_link: "https://github.com/Cinamon88/FurnitureShop",
    },
    {
      name: "New Festival App",
      description:
        "Web application that enables users to book a ticket for an event. Used SCSS, React technologies, Redux and RestAPI. Connected to MongoDB.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: festival,
      source_code_link: "https://github.com/Cinamon88/rest_api",
    },
    {
      name: "Pizzeria MammaMia!",
      description:
        "A modest Pizzeria page where you can order your favorite pizza and book a table! Used VanillaJS, SCSS, Handlebars. Used AJAX technologie with API.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "handlebars",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: pizzeria,
      source_code_link: "https://github.com/Cinamon88/project-pizzeria",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };