(function(){
    return ThumbsItemView = Backbone.View.extend({
        el: "#ImageGallery",
        initialize: function(attrs){
            if(!attrs || !attrs.collection){
                throw new Error("Collection is not specified!!!");
            }
            this.$el.append("<div id='thumbsContainer'></div>");
            this.bus = attrs.bus;
        },

        render: function(){
            var container = $("#thumbsContainer");

            var self = this;
            this.collection.each(function(item){
                var view = new ThumbItemView({model: item, bus: self.bus});
                container.append(view.render().$el);
            });
            return this;
        }
    });
}());
