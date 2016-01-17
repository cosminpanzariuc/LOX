//$(document).ready(init);

//function init() {
//    var toDoItems = new ToDoItems([
//        {title: "To Do Item 1"},
//        {title: "To Do Item 2"},
//        {title: "To Do Item 3"}
//    ]);
    
    var toDoItems = new ToDoItems();
    toDoItems.fetch();
    
    var toDoItemsView = new ToDoItemsView({collection: toDoItems});
    $("body").append(toDoItemsView.render().$el);
    
    

//}