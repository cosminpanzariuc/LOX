var router = new Router();

var page = "#page";
var userListView = new UserListView({el: page});
var editUserView = new EditUserView({el: page});

router.on("route:homePage", function(){
    userListView.render();
});

router.on("route:editUser", function(id){
    editUserView.render({id: id});
});

Backbone.history.start();





