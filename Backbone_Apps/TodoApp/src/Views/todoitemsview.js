define(["model/todoitem", "view/todoitemview"], function(ToDoItem, ToDoItemView){
    var ToDoItemsView = Backbone.View.extend({
        initialize: function(options){
            if(!options.collection) {
                throw new Error("UL - Collection is not specified.");
            } 

            this.collection.on("add", this.onAddTodoItem, this);

        },
        onAddTodoItem: function(todoItem){
            var view = new ToDoItemView({model:todoItem});
            this.$("#ulListItems").prepend(view.render().$el);
        },
        events:{
            "click #add": "onClickAdd",
            "keypress #inputField": "onKeyPress"
        },
        onKeyPress: function(e){
            if(e.keyCode == 13){
                this.onClickAdd();
            }
        },
        onClickAdd: function(){
            var $textBox = $("#inputField");
            if($textBox.val()){
                var todoItem = new ToDoItem({title: $textBox.val()});
                this.collection.add(todoItem);
                $textBox.val("");  
            }   
        },
        render: function(){
            var self = this;
            this.$el.append("<input type='text' id='inputField' autofocus />");
            this.$el.append("<button id='add'>Add</button>");
            this.$el.append("<ul id='ulListItems'></ul>");
            return this;
        }
    });  
    
    return ToDoItemsView;
});

