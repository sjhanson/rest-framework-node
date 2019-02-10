let PageParams = require('../pageParams');
const userService = require('./userService');

module.exports = {
    getUser : function(req, res){
        console.log('Controller Get User');
        let user = userService.getUser(req.params.userid);
        res.send(user);
    },
    getUsers : function(req, res){
        let pageParams = new PageParams(
            req.query.take,
            req.query.skip,
            req.query.sort
        )

        console.log('Controller Get Users');
        let users = userService.getUsers(null, pageParams)
        res.status(200).send(users);
    },
    createUser : function(req, res){
        console.log('Create User');
        let result = userService.createUser(req.body);
        res.status(201).send(result);
    },
    updateUser : function(req, res){
        console.log('Update User');
        let result = userService.updateUser(req.body);
        res.status(200).send(result);
    },
    deleteUser : function(req, res){
        console.log('Delete User');
        let result = userService.deleteUser(req.params.userid);
        res.status(200).send(result);
    }
}