const { Product, Category } = require('../models');

const productController = {
    addProduct({ params, body }, res) {
        console.log(body);
        Product.create(body)
            .then(({ _id }) =>{
                return Category.findOneAndUpdate(
                    { _id: params.categoryId },
                    { $push: { products: _id } },
                    { new: true }
                );
            })
            .then(dbCategoryData => {
                if (!dbCategoryData) {
                  res.status(404).json({ message: 'No Category found with this id!' });
                  return;
                }
                res.json(dbCategoryData);
              })
              .catch(err => res.json(err));
    },

    
};

module.exports = productController;