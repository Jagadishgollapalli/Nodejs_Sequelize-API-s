'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  customer.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    address: DataTypes.STRING,
    mobile: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'customer',
  });

  customer.associate = function(models){
    customer.hasMany(models.order,{
      as:"order"
    })
  }

  return customer;
};