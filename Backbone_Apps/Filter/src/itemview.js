var ItemView = Backbone.View.extend({
    tagName: "tr",
    
    render: function(){
        this.$el.append("<td>" + this.model.get("materie") + "</td>" + 
                        "<td>" + this.model.get("profesor") + "</td>" +
                        "<td>" + this.model.get("importanta") + "</td>");
        this.$el.attr("id", "row" + this.model.cid.substr(1));
        return this;
    }
});