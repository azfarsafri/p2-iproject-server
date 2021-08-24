'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pokemon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Pokemon.belongsTo(models.Trainer)
      Pokemon.belongsToMany(models.Trainer, {through: models.Box})
      Pokemon.belongsTo(models.Generation)
    }
  };
  Pokemon.init({
    name: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    TrainerId: DataTypes.INTEGER,
    GenerationId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pokemon',
  });
  return Pokemon;
};