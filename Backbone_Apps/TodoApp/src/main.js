require(["collection/todoitems", "view/todoitemsview"], function(ToDoItems, ToDoItemsView){
    
    var toDoItems = new ToDoItems();
    toDoItems.fetch();
    var toDoItemsView = new ToDoItemsView({collection: toDoItems});
    $("body").append(toDoItemsView.render().$el);  
    
});


  