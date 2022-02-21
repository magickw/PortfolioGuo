const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Project } = require('../../models');



router.get('/', async (req, res) => {
  try {
    const dbProjectData = await Project.findAll({
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
    const projects = dbProjectData.map((project) => project.get({ plain: true }));
    res.render('projects', { 
      projects
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


  // router.get('/:id', (req, res) => {
  //   Project.findByPk(req.params.id,{
  //     where: {
  //       id: req.params.id
  //     },
  //     attributes: [
  //       title,
  //       description,
  //       repo_url,
  //       deployed_url,
  //       image_path,
  //     ]
      
  //   })
  //     .then(dbProjectData => {
  //       if (!dbProjectData) {
  //         res.status(404).json({ message: 'No project found with this id' });
  //         return;
  //       }
  //       const project = dbProjectData.get({ plain: true });
  //               // pass data to template
  //               res.render('single-project', {
  //                   project
  //                 });
  //             })
  //             .catch(err => {
  //               console.log(err);
  //               res.status(500).json(err);
  //             });
  //       });

        module.exports = router