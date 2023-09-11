// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns

    // product id
    id: {
      type: DataTypes.INTEGER,
    },

    // product name
    product_name: {
      type: DataTypes.STRING,
    },

    // product price
    price: {
      type: DataTypes.DECIMAL,
    },

    // product stock
    stock: {
      type: DataTypes.INTEGER,
    },

    // category id
    category_id: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
