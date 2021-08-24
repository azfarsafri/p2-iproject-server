'use strict';
const {
  Model
} = require('sequelize');
const { hashPassword } = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class Trainer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Trainer.belongsToMany(models.Pokemon, {through: models.Box})
      Trainer.hasMany(models.Box)
      Trainer.hasMany(models.Pokemon)
    }
  };
  Trainer.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: `Name already registered! Please try another name!`
      },
      validate: {
        notNull: {
          msg: `Name cannot be null`
        },
        notEmpty: {
          msg: `Name is required!`
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Password cannot be null'
        },
        notEmpty: {
          msg: `Password is required`
        }
      }
    },
    gender: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    hooks:{
      beforeCreate: (instance) => {
        instance.password = hashPassword(instance.password)
      }
    },
    sequelize,
    modelName: 'Trainer',
  });
  return Trainer;
};