var LetterView = Backbone.View.extend({
    el: "#spn",
    initialize: function(){
        this.bus = bus;
        this.bus.on("cardSelected", this.onCardSelected, this);
    },
    onCardSelected: function(card){
        this.model = card;
        this.render();
    },
    
    render: function(){
        if(this.model){
            this.$el.html(" - " + this.model.get("img"));
        }
        return this;
    }
        
});