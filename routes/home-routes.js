const router = require('express').Router();
const sequelize = require('../config/connection');


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

module.exports = router