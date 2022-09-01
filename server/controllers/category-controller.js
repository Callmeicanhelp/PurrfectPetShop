const { Category } = require('../models');

const categoryController = {
    getAllCategories(req, res) {
        Category.find({})
            .populate({
                path: 'category',
                select: '-__v'
            })
            .select('-__v')
            .sort({ _id: -1 })
            .then(dbCategoryData => res.json(dbCategoryData))
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            });
    },
      // get one pizza by id
  getCategoryById({ params }, res) {
    Category.findOne({ _id: params.id })
      .populate({
        path: 'category',
        select: '-__v'
      })
      .select('-__v')
      .then(dbCategoryData => res.json(dbCategoryData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // createCategory
  createCategory({ body }, res) {
    Category.create(body)
      .then(dbCategoryData => res.json(dbCategoryData))
      .catch(err => res.json(err));
  },

  // update pizza by id
  updateCategory({ params, body }, res) {
    Category.findOneAndUpdate({ _id: params.id }, body, { new: true })
      .then(dbCategoryData => {
        if (!dbCategoryData) {
          res.status(404).json({ message: 'No pizza found with this id!' });
          return;
        }
        res.json(dbCategoryData);
      })
      .catch(err => res.json(err));
  },

  // delete pizza
  deleteCategory({ params }, res) {
    Category.findOneAndDelete({ _id: params.id })
      .then(dbCategoryData => res.json(dbCategoryData))
      .catch(err => res.json(err));
  }
}