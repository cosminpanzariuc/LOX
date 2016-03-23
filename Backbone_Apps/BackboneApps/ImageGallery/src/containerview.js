(function(){
    return ContainerView = Backbone.View.extend({
        el: "#mainContainer",
        initialize: function(attrs){
            this.bus = attrs.bus;
            this.bus.on("targetSelected", this.onTargetSelected, this);
        },

        onTargetSelected: function(elem){
            this.model = elem;
            this.render();
        },

        render: function(){
            if(this.model){
                this.$el.attr("src", this.model.get("picx"));
            }  
            return this;
        }
    });
}());