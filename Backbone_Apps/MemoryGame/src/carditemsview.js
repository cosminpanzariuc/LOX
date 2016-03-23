var CardItemsView = Backbone.View.extend({
    tagName: "div",
    id: "board",
    initialize: function(attrs){
        if(!attrs || !attrs.collection){
            throw new Error("You must specify a collection to your view!!!");
        }
        this.bus = attrs.bus;
    },
    
    render: function(){
        var self = this;
        this.collection.each(function(item){
            var view = new CardItemView({model: item, bus: self.bus});
            self.$el.append(view.render().$el); 
        });
        return this;
    }
    
    
});

