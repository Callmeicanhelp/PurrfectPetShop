// const faker = require('faker');
const Seeds = require('./seeds');
const Seeds = require('./seeds');
const db = require('../config/connection');
const { Thought, User } = require('../models');

db.once('open', async () => {
  try {
    await deleteMany({});
    await deleteMany({});

    await User.create(Seeds);

    for (let i = 0; i < seeds.length; i++) {
    //   const { _id, thoughtAuthor } = await Thought.create(thoughtSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: thoughtAuthor },
        {
          $addToSet: {
            seeds: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});