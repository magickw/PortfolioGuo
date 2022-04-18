const { Project } = require('../models/');


const projectData = [
    {
        id: 1,
        title: "Weather Dashboard",
        description: "Full-stack CMS-style blog site where developers can publish and comment, using MVC architectural structure, Handlebars.js, Sequelize, and express-session.",
        repo_url: "https://github.com/magickw/WeatherDashboard",
        deployed_url: "https://magickw.github.io/WeatherDashboard/",
        image_path: "./images/WeatherDashboard.gif"
    },
    {
        id: 2,
        title: "AstroDash",
        description: "Astronomy Dashboard uses geolocation functions and weather API to present the weather conditions such as visibility and cloudiness, and moon phases.",
        repo_url: "https://github.com/DazedChou/Astronomy-Dashboard",
        deployed_url: "https://dazedchou.github.io/Astronomy-Dashboard/",
        image_path: "./images/AstroDash.gif"
      
    },
    {
        id: 3,
        title: "CodeQuiz",
        description: "CodeQuiz is a timed coding quiz with multiple-choice questions.",
        repo_url: "https://github.com/magickw/CodeQuiz",
        deployed_url: "https://magickw.github.io/CodeQuiz/",
        image_path: "./images/codequiz.gif"
    },
    {
        id: 4,
        title: "Work Day Scheduler",
        description: "This simple calendar application that allows a user to save and delete events for each hour of the day.",
        repo_url: "https://github.com/magickw/CodeQuiz",
        deployed_url: "https://magickw.github.io/Work-Day-Scheduler/",
        image_path: "./images/scheduler.gif"
    },
    {
        id: 5,
        title: "Note Taker",
        description: "This application allows you to write notes, save notes and deletes that are being stored in a db.json file.",
        repo_url: "https://github.com/magickw/NoteTaker",
        deployed_url: "https://notetaker-guo.herokuapp.com/",
        image_path: "./images/notetaker.gif"
    },
    {
        id: 6,
        title: "Tech Blog with MVC architectural structure",
        description: "This application is a tech blog which allows the developers to publish blog posts, make comments and create accounts using MVC architectural structure, Handlebars.js, Sequelize.",
        repo_url: "https://github.com/magickw/MVCTechBlog",
        deployed_urll: "https://guotechblog.herokuapp.com/",
        image_path: "./images/techblog.gif"
    },
 
 
];

const seedProjects = () => Project.bulkCreate(projectData);

module.exports = seedProjects;
