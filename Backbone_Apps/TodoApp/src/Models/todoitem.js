define(["backbone"], function (Backbone) {
    var ToDoItem = Backbone.Model.extend({
        defaults: {
            completed: false
        },

        urlRoot: "http://localhost:3000",

        validate: function (attrs) {
            if (!attrs.title) {
                return "Title is required";
            }
        },

        toggle: function () {
            this.set("completed", !this.get("completed"));
        }
    });
    
    return ToDoItem;
});