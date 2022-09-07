const { Product } = require("../models");

const productData = [
  {
    product_name: "Mice",
    price: 3.99,
    stock: 14,
    category_id: 1,
  },
  {
    product_name: "String Toys",
    price: 8.99,
    stock: 25,
    category_id: 1,
  },
  {
    product_name: "Lasers",
    price: 12.99,
    stock: 9,
    category_id: 1,
  },
  {
    product_name: "Small Tower",
    price: 40.99,
    stock: 9,
    category_id: 2,
  },
  {
    product_name: "Medium Tower",
    price: 59.99,
    stock: 8,
    category_id: 2,
  },
  {
    product_name: "Large Tower",
    price: 74.99,
    stock: 6,
    category_id: 2,
  },
  {
    product_name: "Plain Collar",
    price: 9.99,
    stock: 7,
    category_id: 3,
  },
  {
    product_name: "Glitter Collar",
    price: 11.99,
    stock: 9,
    category_id: 3,
  },
  {
    product_name: "Name Tag",
    price: 4.99,
    stock: 17,
    category_id: 3,
  },
  {
    product_name: "Food Dish",
    price: 7.99,
    stock: 22,
    category_id: 3,
  },
  {
    product_name: "Water Dish",
    price: 7.99,
    stock: 22,
    category_id: 3,
  },
  {
    product_name: "Shark Costume",
    price: 29.99,
    stock: 2,
    category_id: 4,
  },
  {
    product_name: "Bunny Costume",
    price: 29.99,
    stock: 3,
    category_id: 4,
  },
  {
    product_name: "Bee Costume",
    price: 29.99,
    stock: 2,
    category_id: 4,
  },
  {
    product_name: "Dino Costume",
    price: 29.99,
    stock: 4,
    category_id: 4,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
