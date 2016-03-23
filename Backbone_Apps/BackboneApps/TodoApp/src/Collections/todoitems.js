define(["model/todoitem"], function(ToDoItem){
    var ToDoItems = Backbone.Collection.extend({
        model: ToDoItem,
        url: "http://localhost:3000/db"
    });
    
    return ToDoItems;
});


