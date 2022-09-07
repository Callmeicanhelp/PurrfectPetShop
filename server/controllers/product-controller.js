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
    //remove Comment
    removeProduct({ params }, res) {
        Product.findOneAndDelete({ _id: params.productId })
            .then(deletedComment => {
                if (!deletedComment) {
                    return res.status(404).json({ message: 'No Product Found with this ID!' })
                }
                return Category.findOneAndUpdate( 
                    { _id: params.categoryId },
                    { $pull: { products: params.productId } },
                    { new: true }
                );
            })
            .then(dbCategoryData => {
                if (!dbCategoryData) {
                    res.status(404).json({ message: 'No Category found with this Id' })
                    return;
                }
                res.json(dbCategoryData);
            })
            .catch(err => res.json(err))
    }
    
};

module.exports = productController;