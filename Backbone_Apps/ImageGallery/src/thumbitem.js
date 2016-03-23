(function(){
    return ThumbItem = Backbone.Model.extend({
        initialize: function(attrs){
            if(!attrs || !attrs.picx){
                throw new Error("You must provide an image for each thumb!!!");
            }
        },
    });
}());