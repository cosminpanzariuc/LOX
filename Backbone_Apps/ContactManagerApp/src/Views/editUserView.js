var EditUserView = Backbone.View.extend({
    render: function(options){
        var self = this;
        if(options.id){
            self.user = new UserItem({id: options.id});
            self.user.fetch({
                success: function(user){
                    var data = {existingUser: user};
                    var template = _.template($("#edit-user-template").html());
                    var readyTemplate = template(data);
                    self.$el.html(readyTemplate);
                }
            });
        }else{
            self.user = null;
            var data = {existingUser: null};
            var template = _.template($("#edit-user-template").html());
            var readyTemplate = template(data);
            this.$el.html(readyTemplate);
        }
        return this;
    },
    events: {
        "submit .edit-user-form": "saveUser",
        "click .delete": "deleteUser"
    },
    
    saveUser: function(e){
        var userDetails = $(e.currentTarget).serializeObject();

        for(var attr in userDetails){
            if(!userDetails[attr]) return false;
        }

        var user = new UserItem(userDetails);
        user.save(userDetails, {
            success: function(model, response){
                router.navigate("", {trigger: true});
            }
        });
        return false;
    },

    deleteUser: function(e){
        if(this.user){
            this.user.destroy({
                success: function(){
                    router.navigate("", {trigger: true});
                }
            });
        }else{
            router.navigate("", {trigger: true});
        }
        return false;
    }
});

$.fn.serializeObject = function() {
  var o = {};
  var a = this.serializeArray();
  $.each(a, function() {
      if (o[this.name] !== undefined) {
          if (!o[this.name].push) {
              o[this.name] = [o[this.name]];
          }
          o[this.name].push(this.value || '');
      } else {
          o[this.name] = this.value || '';
      }
  });
  return o;
};

