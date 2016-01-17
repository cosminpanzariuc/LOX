var CardItem = Backbone.Model.extend({
    defaults: {
        flipped: false
    },
    initialize: function (attrs) {
        if (!attrs || !attrs.img) {
            throw new Error("You must provide an image for each card on the board!!!");
        }
    },
});