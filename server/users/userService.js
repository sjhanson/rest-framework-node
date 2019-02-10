module.exports = {
    getUser : function(userId){
        console.log('Service GetUser :' + userId);
        return {
            firstName: 'Stephen',
            lastName: 'Hanson',
            userId: userId
        };
    },
    getUsers : function(filter, pageParams){
        console.log('Service Get Users');
        console.log('Filter: %s', JSON.stringify(filter));
        console.log('Pagination Params: %s', JSON.stringify(pageParams));

        return [{
            firstName: 'Stephen',
            lastName: 'Hanson',
            userId: 123
        }, {
            firstName: 'Ashley',
            lastName: 'French',
            userId: 124
        }]
    },
    createUser : function(user){
        console.log('Service Create User');
        return true;
    },
    updateUser : function(user){
        console.log('Service Update User');
        return true;
    },
    deleteUser : function(userId){
        console.log('Service Delete User');
        return true;
    }
}