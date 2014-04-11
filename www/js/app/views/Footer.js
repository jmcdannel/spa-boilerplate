define(['backbone'], function(Backbone) {
  
  return Backbone.View.extend({

    el: '#page-footer',

    template: app.templates.footer,

    render: function() {

      var html = this.template(this.model.toJSON());
      this.$el.html(html);

    }

  });

});