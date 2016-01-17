(function(){
    return ThumbItemView = Backbone.View.extend({
        tagName: "img",
        className: "imgStyle",
        initialize: function(attrs){
            if(!attrs || !attrs.model){
                throw new Error("You must specify a model in your collection!!!");
            }
            this.bus = attrs.bus;
        },

        render: function(){
            var whichOne = this.model.cid.substr(1);
            this.$el.attr("id","img" + whichOne).attr("src","images/thumb" + whichOne + ".jpg");
            return this;
        },

        events:{
            "click": "onClick",
            "mouseover": "onMouseOver",
            "mouseout": "onMouseOut",
        },

        onMouseOver: function(e){
            this.$el.css({
                "cursor": "pointer",
                "border-color": "red"
            });
        },


        onMouseOut: function(e){
            this.$el.css({
                "cursor": "auto",
                "border-color": "black"
            });
        },

        onClick: function(e){
            this.bus.trigger("targetSelected", this.model);
    //        var currentImage = this.$el.attr("src");
    //        $("#mainContainer").attr("src", currentImage);
        }

    });   
}());