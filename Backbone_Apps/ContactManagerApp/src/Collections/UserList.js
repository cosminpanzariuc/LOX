var UserList = Backbone.Collection.extend({
	model: UserItem,
	url: "http://localhost:3000/database"
});