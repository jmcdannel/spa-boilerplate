define(['backbone'], function(Backbone) {
  
  return Backbone.View.extend({

    el: '#page-footer',

    template: app.templates.footer,

    initialize: function() {
      this.model.on('change', this.render, this);
    },

    render: function() {

      var html = this.template(this.model.toJSON());
      this.$el.html(html);

    }

  });

});