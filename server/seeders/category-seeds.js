const { Category } = require("../models");

const categoryData = [
  {
    category_name: "Toys",
  },
  {
    category_name: "Towers",
  },
  {
    category_name: "Accessories",
  },
  {
    category_name: "Costumes",
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
