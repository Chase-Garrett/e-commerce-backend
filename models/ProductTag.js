const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns

    // product tag id
    id: {
      type: DataTypes.INTEGER,
    },

    // product id
    product_id: {
      type: DataTypes.INTEGER,
    },

    // tag id
    tag_id: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
