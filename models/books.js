'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Books extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Books.belongsToMany(models.Users,{
        as:"user",
        through:{
          model: "BooksUserCategory",
          as: "info",
        }        
      })
      Books.belongsToMany(models.Category,{
        as:"category",
         through:{
          model: "BooksUserCategory",
          as: "info",
        }   
      })
    }
  };
  Books.init({
    title: DataTypes.STRING,
    publication: DataTypes.STRING,    
    pages: DataTypes.INTEGER,
    ISBN: DataTypes.STRING,
    aboutBook: DataTypes.TEXT,
    file: DataTypes.STRING,    
    status: DataTypes.STRING,
    thumbnail: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Books',
  });
  return Books;
};