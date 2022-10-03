'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Item.init({
    date: DataTypes.DATE,
    name: DataTypes.STRING,
    count: DataTypes.INTEGER,
    distance: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Item',
    timestamps: false
  });
  return Item;
};
