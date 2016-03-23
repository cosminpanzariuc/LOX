var Router = Backbone.Router.extend({
	routes: {
		"": "homePage",
        "new": "editUser",
        "edit/:id": "editUser"
	}
});
