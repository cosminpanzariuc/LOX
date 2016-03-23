var ItemsView = Backbone.View.extend({
    tagName: "table",
    attributes:{
        border: 1
    },
  
    initialize: function(){
        this.collection.on("remove", this.render, this); 
    },

    render: function(){
        var self = this;
        
        this.$el.append("<input type='text' id='filterBar' autofocus /> <br/><br/>");
        
        this.collection.each(function(item){
            var view = new ItemView({model: item});
            self.$el.append(view.render().$el);
        });
        return this;
    },
    
    events:{
        "keyup #filterBar": "filterFct"
    },
    
    filterFct: function (e) {
        var text = $("#filterBar").val().toLocaleLowerCase().substr(0);
        var textLength = text.length;
        var self = this;


        this.collection.each(function (value, index) {

            if (value.get("materie").toLowerCase().substr(0, textLength) !== text) {
                $("#row" + (index + 1)).hide();
            } else {
                $("#row" + (index + 1)).show();
            }

        });
    }
});