(function(){
    var thumbsitem = new ThumbsItem([
        {
            picx: "images/thumb1.jpg",
            description: "Tom & Jerry"
        },
        {
            picx: "images/thumb2.jpg",
            description: "Ne placa Maraciuca"
        },
        {
            picx: "images/thumb3.jpg",
            description: "Alladin"
        },
        {
            picx: "images/thumb4.jpg",
            description: "Another Cartoon"
        },
        {
            picx: "images/thumb5.jpg",
            description: "Blonde Girl"
        },
        {
            picx: "images/thumb6.jpg",
            description: "Rogue - X-Man"
        },
        {
            picx: "images/thumb7.jpg",
            description: "Teddy bear"
        },
        {
            picx: "images/thumb8.jpg",
            description: "Monster transform"
        },
        {
            picx: "images/thumb9.jpg",
            description: "Green Superhero"
        }
    ]);


    var bus = _.extend({}, Backbone.Events);

    var container = new ContainerView({bus: bus});
    container.render();

    var thumbsitemview = new ThumbsItemView({collection: thumbsitem, bus: bus});
    $("body").append(thumbsitemview.render().$el);
    
    var firstClicked = document.getElementById("thumbsContainer").firstChild;
    $(firstClicked).trigger("click");
}());








