const express = require('express')
const router = express.Router()
const {
    authUser,
    registerUser,
    getUserProfile,
    updateUserProfile,
    updateUser,
    getUsers,
    deleteUser,
    getUserById
} = require ('../controllers/userController')
const {
    protect,
    isAdmin
} = require ('../middleware/authMiddleware')

router.route('/').post(registerUser).get(protect, isAdmin, getUsers)
router.post('/login', authUser)
router
    .route('/profile')
    .get(protect, getUserProfile)
    .put(protect, updateUserProfile)
router
    .route('/:id')
    .delete(protect, isAdmin, deleteUser)
    .get(protect, isAdmin, getUserById)
    .put(protect, isAdmin, updateUser)


module.exports = router;