const router = require('express').Router();
const sequelize = require('../config/connection');
const { Project } = require('../models/');


router.get('/', (req, res) => {
  const landingpage = {
    greeting: 'Hello, Welcome to my Portfolio Site!',
    introduction: 'I am Baofeng Guo, a translator turned full stack developer in San Francisco Bay Area.'
  }
  // Pass serialized data and session flag into template
  res.render('home', landingpage);
});


router.get("/home", (req, res) => {
  res.render('home');
});

router.get("/about", (req, res) => {
  res.render('about');
});

router.get("/skills", (req, res) => {
  res.render('skills');
});

router.get("/experience", (req, res) => {
  res.render('experience');
});

router.get("/contact", (req, res) => {
  const contactInformation = {
    links: [
      {
        href: "https://github.com/magickw",
        title: "GitHub",
      },
      {
        href: "https://www.linkedin.com/in/bfguo",
        title: "LinkedIn",
      },
      {
        href: "mailto:peterguo1983@gmail.com",
        title: "Email",
      },
    ],
  };
  res.render('contact', contactInformation);
});

router.get('/projects', async (req, res) => {
  try {
    console.log("Hi");
    const dbProjectData = await Project.findAll({
      attributes: [
        {
          id,
          title,
          description,
          repo_url,
          deployed_url,
          image_path
        },
      ],
    });
    const projects = dbProjectData.map((project) => project.get({ plain: true }));
    console.log(projects);
    res.render('projects', { 
      projects
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


  router.get('/projects/:id', async (req, res) => {
    try { projectData = await Project.findByPk(req.params.id, {
      include: [{ all: true, nested: true }],
    });
        const project = projectData.get({ plain: true });
                res.render('single-project', {
                  project });
                } catch (err) {
                  res.status(500).json(err);
                }
              });


module.exports = router