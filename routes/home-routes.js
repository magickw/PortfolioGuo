const router = require('express').Router();
const sequelize = require('../config/connection');
const { Project } = require('../models');

router.get('/', async (req, res) => {

    // Pass serialized data and session flag into template
    res.render('homepage');
});



router.get('/projects', async (req, res) => {
  try {
    const projectData = await Project.findAll({
      attributes: [
        {
          title,
          description,
          repo_url,
          deployed_url,
          image_path
        },
      ],
    });

    const projects = projectData.map((project) => project.get({ plain: true }));

    res.render('projects', { 
      projects
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get('/project/:id', (req, res) => {
//   Project.findOne({
//     where: {
//       id: req.params.id
//     },
//     attributes: [
//       'id',
//       'title',
//       'description',
//       'user_id',
//       'fund_needed',
//       'created_at'
//     ],
//     include: [
//       {
//         model: Donation,
//         attributes: ['id', 'amount', 'created_at'],
//         include: {
//             model: User,
//             attributes: ['name']
//         }
//         },
//         {
//           model: User,
//           attributes: ['name']
//         }
//       ]
//     })
//     .then(dbProjectData => {
//       if (!dbProjectData) {
//         res.status(404).json({ message: 'No project found with this id' });
//         return;
//       }

  router.get('/projects/:id', (req, res) => {
    Project.findByPk(req.params.id,{
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'title',
        'description',
      ]
      
    })
      .then(dbProjectData => {
        if (!dbProjectData) {
          res.status(404).json({ message: 'No project found with this id' });
          return;
        }

       
        const project = dbProjectData.get({ plain: true });

        // pass data to template
        res.render('project', {
            project
          });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

module.exports = router