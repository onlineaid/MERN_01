const express = require('express');
const router = express.Router()

const {
    getProducts,
    getProductById,
    deleteProduct,
    createProduct,
    updateProduct,
    createProductReview,
    getTopProducts
} = require ('../controllers/productController') 

const {
    protect,
    isAdmin
} =require('../middleware/authMiddleware.js')

router
    .route('/')
    .get(getProducts)
    .post(protect, isAdmin, createProduct)
router.get('/top', getTopProducts)
router
    .route('/:id')
    .get(getProductById)
    .delete(protect, isAdmin, deleteProduct)
    .put(protect, isAdmin, updateProduct)
router
    .route('/:id/reviews')
    .post(protect, createProductReview)
    
module.exports = router