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
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    // product name
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    // product price
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },

    // product stock
    stock: {
      type: DataTypes.INTEGER,
    },

    // category id
    category_id: {
      type: DataTypes.INTEGER,
      // references the category model's id
      references: {
        model: 'category',
        key: 'id',
      },
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
