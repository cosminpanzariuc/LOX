var ToDoItemView = Backbone.View.extend({
    tagName: "li",
    initialize: function(options){
        if(!options.model){
            throw new Error("LI - Model is not specified.");
        }
        
        this.model.on("change", this.render, this);
    },
    events:{
        "click #delete": "onRemoveTodoItem",
        "click .toggle": "onClickToggle",
        "click .rename": "onRenameItem"
    },
    onClickToggle: function(){
        this.model.toggle();
        console.log("Status:", this.model.toJSON());
    },
    onRenameItem: function(){
        var renamedTitle = prompt("What is the title would you like to set ?", this.model.get("title"));
        if(renamedTitle){
            this.model.set({title: renamedTitle});
        }
        
    },
    onRemoveTodoItem: function(){
        this.model.destroy();
        this.remove();
        console.log("Removed:", this.model.toJSON()); 
    },
    render: function(){
        this.$el.attr("id", this.model.id);
        
        this.$el.toggleClass("isCompleted", this.model.get("completed"));
        var checked = this.model.get("completed") ? "checked" : "";
        this.$el.html("<label><input type='checkbox' class='toggle'"
                      + checked+"/>" 
                      + this.model.escape("title") 
                      + "</label> <button id='delete'>Delete</button>" + " " +
                      "<button class='rename'>Rename</button>");
        
        return this;
    }
});