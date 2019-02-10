const express = require('express');
const userController = require('./userController');

const userRouter = express.Router();

userRouter.route('/users/:userid')
    .get(userController.getUser)
    .delete(userController.deleteUser);
userRouter.route('/users')
    .put(userController.updateUser)
    .get(userController.getUsers)
    .post(userController.createUser);

module.exports = userRouter;