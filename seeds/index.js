const seedProjects = require('./project-seeds');
const sequelize = require('../config/connection');

const seedAll = async () => {

  await sequelize.sync({ force: true });
  console.log('\n --- DATABASE SYNCED ----\n');

  await seedProjects();
  console.log('\n----- PROJECTS SEEDED ---\n');


  process.exit(0);
};

seedAll();