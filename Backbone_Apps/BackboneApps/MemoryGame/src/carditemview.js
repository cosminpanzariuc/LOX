(function () {
    var memoryValuesArr = [];
    var memoryIdArr = [];
    var flippedNr = 0;
    return CardItemView = Backbone.View.extend({

        initialize: function (attrs) {
            if (!attrs || !attrs.model) {
                throw new Error("You must specify a model in your collection!!!");
            }
            this.bus = bus;
        },

        render: function () {
            //var outputCards = "";
            //outputCards += '<div class = "back-card back-card-photo" id = "card_' + this.model.get("img") + '"\)></div>';
            //this.$el.html(outputCards);
            //this.$el.addClass("back-card back-card-photo").attr("id", "card_" + cardNR).prop("onclick", "onCardClick(this," + cardNR + ")");
            var cardNR = this.model.cid.substr(1);
            this.$el.addClass("back-card back-card-photo").attr("id", "card_" + cardNR);
            return this;
        },

        events: {
            "click": "onCardClick",
        },

        onCardClick: function () {
            this.bus.trigger("cardSelected", this.model);
            var card = this.$el;
            var value = this.model.get("img");

            if (card[0].innerHTML == "" && memoryValuesArr.length < 2) {
                memoryValuesArr.push(value);
                memoryIdArr.push(card.attr("id"));
                card.addClass("flip-forward");
                card[0].innerHTML = " ";

                setTimeout(function () {
                    card.addClass("back_card_" + value);
                }, 300);


                if (memoryValuesArr.length == 2) {
                    if (memoryValuesArr[0] == memoryValuesArr[1]) {
                        memoryValuesArr = [];
                        memoryIdArr = [];
                        flippedNr += 2;
                        if (flippedNr == carditems.size()) {
                            $("#spn").html(" - GAME OVER!");
                            this.bus.off("cardSelected");
                        }
                    } else {
                        setTimeout(function () {
                            var wrongCard1 = document.getElementById(memoryIdArr[0]);
                            var wrongCard2 = document.getElementById(memoryIdArr[1]);
                            $(wrongCard1).removeClass("flip-forward").addClass("flip-backward");
                            $(wrongCard2).removeClass("flip-forward").addClass("flip-backward");
                            var item1 = memoryValuesArr[0];
                            var item2 = memoryValuesArr[1];
                            setTimeout(function () {
                                $(wrongCard1).removeClass("flip-backward").removeClass("back_card_" + item1);
                                $(wrongCard2).removeClass("flip-backward").removeClass("back_card_" + item2);
                                wrongCard1.innerHTML = "";
                                wrongCard2.innerHTML = "";
                                $("#spn").html("");
                            }, 340);
                            memoryValuesArr = [];
                            memoryIdArr = [];
                        }, 700);
                    }
                }

            }
        }
    });
}());