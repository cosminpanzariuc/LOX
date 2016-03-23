var Item = Backbone.Model.extend({
    initialize: function(options){
        if(!options || !options.materie){
            throw new Error("You must provide a title!");
        }
    }
});