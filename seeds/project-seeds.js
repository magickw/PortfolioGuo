const { Project } = require('../models/');


const projectData = [
    {
        "title": "Weather Dashboard",
        "description": "Full-stack CMS-style blog site where developers can publish and comment, using MVC architectural structure, Handlebars.js, Sequelize, and express-session.",
        "repo_url": "https://github.com/magickw/WeatherDashboard",
        "deployed_url": "https://magickw.github.io/WeatherDashboard/",
        "image_path": "https://github.com/magickw/portfolio/blob/main/assets/images/WeatherDashboard.gif?raw=true"
    },
    {
        "title": "AstroDash",
        "description": "Astronomy Dashboard uses geolocation functions and weather API to present the weather conditions such as visibility and cloudiness, and moon phases.",
        "repo_url": "https://github.com/DazedChou/Astronomy-Dashboard",
        "deployed_url": "https://dazedchou.github.io/Astronomy-Dashboard/",
        "image_path": "public/images/AstroDash.gif"
      
    },
    {
        "title": "CodeQuiz",
        "description": "CodeQuiz is a timed coding quiz with multiple-choice questions.",
        "repo_url": "https://github.com/magickw/CodeQuiz",
        "deployed_url": "https://magickw.github.io/CodeQuiz/",
        "image_path": "public/images/codequiz.gif"
    },
    {
        "title": "Work Day Scheduler",
        "description": "This simple calendar application that allows a user to save and delete events for each hour of the day.",
        "repo_url": "https://github.com/magickw/CodeQuiz",
        "deployed_url": "https://magickw.github.io/Work-Day-Scheduler/",
        "image_path": "public/images/scheduler.gif"
    },
    {
        "title": "NodeJS README Generator using ES6",
        "description": "This simple calendar application that allows a user to save and delete events for each hour of the day.",
        "repo_url": "https://github.com/magickw/ReadmeGenerator",
        "deployed_url": "",
        "image_path": "public/images/README.gif"
    },
    {
        "title": "Note Taker",
        "description": "This application allows you to write notes, save notes and deletes that are being stored in a db.json file.",
        "repo_url": "https://github.com/magickw/NoteTaker",
        "deployed_url": "https://notetaker-guo.herokuapp.com/",
        "image_path": "public/images/notetaker.gif"
    },
    {
        "title": "Team Profile Generator",
        "description": "This is a command-line application that runs with Node.js to create a simple webpage featuring your development team's roster.",
        "repo_url": "https://github.com/magickw/TeamProfileGenerator",
        "deployed_url": "",
        "image_path": "public/images/teamprofile.gif"
    },
    {
        "title": "E-Commerce Backend",
        "description": "This application creates the backend of an e-commerce website by using Express.js API and Sequelize to interact with a MySQL database.",
        "repo_url": "https://github.com/magickw/E-commerce-backend",
        "deployed_url": "",
        "image_path": "public/images/ecommerce.gif"
    },
    {
        "title": "Employee Tracker",
        "description": "This application is a CLI application using mySQL to create a database management system for employee and company information.",
        "repo_url": "https://github.com/magickw/EmployeeTracker",
        "deployed_url": "",
        "image_path": "public/images/employeetracker.gif"
    },
    {
        "title": "Tech Blog with MVC architectural structure",
        "description": "This application is a tech blog which allows the developers to publish blog posts, make comments and create accounts using MVC architectural structure, Handlebars.js, Sequelize.",
        "repo_url": "https://github.com/magickw/MVCTechBlog",
        "deployed_url": "https://guotechblog.herokuapp.com/",
        "image_path": "public/images/techblog.gif"
    },
 
 
];

const seedProjects = () => Project.bulkCreate(projectData);

module.exports = seedProjects;