var UserListView = Backbone.View.extend({
	render: function(){
		var self = this;
		var userList = new UserList();

		userList.fetch({
			success: function(users){
				var data = {allUsers: users.models};
				var template = _.template($("#user-list-template").html());
				var readyTemplate = template(data);
				self.$el.html(readyTemplate);
			},
            error: function(){
                console.log("The collection could not be fetched!");
            }
		});
		return this;
	}
});