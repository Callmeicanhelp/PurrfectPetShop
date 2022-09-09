const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Constumes' },
    { name: 'Toys' },
    { name: 'Accessories' },
    { name: 'Towers' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Shark',
      description:
        'A cute costume for a ferocious kity!',
      image: 'shark-costume.jpg',
      category: categories[0]._id,
      price: 29.99,
      quantity: 100
    },
    {
      name: 'Bunny',
      description:
        'A cute costume for a snuggley kity!',
      image: 'bunny-costume.jpg',
      category: categories[0]._id,
      price: 29.99,
      quantity: 100
    },
    {
      name: 'Bee',
      description:
        'A cute costume for a gentle kity!',
      image: 'bee-costume.jpg',
      category: categories[0]._id,
      price: 29.99,
      quantity: 100
    },
    {
      name: 'Dino',
      description:
        'A cute costume for a ferocious kity!',
      image: 'dino-costume.jpg',
      category: categories[0]._id,
      price: 29.99,
      quantity: 100
    },
    {
      name: 'Plain Collar',
      category: categories[2]._id,
      description:'Choose a plain color collar to add some kitty flair!',
      image: 'plain-collar.jpg',
      price: 9.99,
      quantity: 50
    },
    {
      name: 'Glitter Collar',
      category: categories[2]._id,
      description:'Choose a glitter collar for kitty to really stand out!',
      image: 'glitter-collar.jpg',
      price: 11.99,
      quantity: 20
    },
    {
      name: 'Name tag',
      category: categories[2]._id,
      description:'Add a tag with name a number for the adventurous kittys!',
      image: 'nametag.jpg',
      price: 4.99,
      quantity: 100
    },
    {
      name: 'Food Dish',
      category: categories[2]._id,
      description:'Kitties gotta eat, let them do it in style',
      image: 'food-dish.jpg',
      price: 7.99,
      quantity: 100
    },
    {
      name: 'Water Dish',
      category: categories[2]._id,
      description:'Kitties gotta drink, let them do it in style',
      image: 'water-dish.jpg',
      price: 7.99,
      quantity: 100
    },
    {
      name: 'Mice',
      category: categories[1]._id,
      description:
        'Your kitties will love hunting these critters!',
      image: 'mice.jpg',
      price: 3.99,
      quantity: 200
    },
    {
      name: 'Laser',
      category: categories[1]._id,
      description:'Entertain your pet with hours of light show fun! Batteries not included.',
      image: 'laser.jpg',
      price: 12.99,
      quantity: 50
    },
    {
      name: 'String Toy',
      category: categories[1]._id,
      description:
        'Hone your kitties coordination with this toy on a string',
      image: 'bedtime-book.jpg',
      price: 8.99,
      quantity: 100
    },
    {
      name: 'Small Tower',
      category: categories[3]._id,
      description: 'Let your kitty run wild, scratch, play, and rest on this purrfect perch!',
      image: 'small-tower.jpg',
      price: 40.99,
      quantity: 30
    },
    {
      name: 'Medium Tower',
      category: categories[3]._id,
      description: 'Let your kitty run wild, scratch, play, and rest on this purrfect perch!',
      image: 'medium-tower.jpg',
      price: 59.99,
      quantity: 20
    },
    {
      name: 'Large Bear',
      category: categories[3]._id,
      description:'Let your kitty run wild, scratch, play, and rest on this purrfect perch!',      
      image: 'large-tower.jpg',
      price: 74.99,
      quantity: 15
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Drew',
    lastName: 'Mac',
    email: 'dmac@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});