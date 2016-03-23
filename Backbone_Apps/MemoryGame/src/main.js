    var carditems = new CardItems([
            {img: "A"},
            {img: "B"},
            {img: "C"},
            {img: "D"},
            {img: "E"},
            {img: "F"},
            {img: "G"},
            {img: "H"},
            {img: "I"}
        ]);
 
     carditems.each(function(value, index){ // double the values from initial collection
         carditems.add({img: carditems.at(index).get("img")});
     });
 
    carditems.reset(carditems.shuffle(), {silent:true});
    var carditemsview = new CardItemsView({collection: carditems, bus: bus});

    var bus = _.extend({}, Backbone.Events);

    var letterview = new LetterView({bus: bus});
    letterview.render();
  
    $("body").append(carditemsview.render().$el);    




