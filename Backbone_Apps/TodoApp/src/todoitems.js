var ToDoItems = Backbone.Collection.extend({
    model: ToDoItem,
    url: "http://localhost:3000/db"
})