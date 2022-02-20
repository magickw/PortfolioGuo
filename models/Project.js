const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Project extends Model {}

Project.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        repo_url: {
            type: DataTypes.STRING,
        },

        deployed_url: {
            type: DataTypes.STRING,  
        },

        image_path: { 
            type: DataTypes.STRING,
            allowNull: false,
        }

    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'project',
    }
);

module.exports = Project;