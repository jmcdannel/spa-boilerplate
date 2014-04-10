define(['backbone'], function(Backbone) {
  
    return Backbone.View.extend({

      el: '#hello',

      template: app.templates.helloworld,

      events: {
        'click button': 'translate_click'
      },

      initialize: function() {
        this.model.on('change', this.update, this);
      },

      render: function() {

        var html = this.template(this.model.toJSON());
        this.$el.html(html);

      },

      update: function() {
        $('h1', this.$el).text(this.model.get('text'));
      },

      translate_click: function(e) {

        var language = $(e.currentTarget).data('language');
        this.model.set({ 'language' : language });
        Backbone.history.navigate('#' + language);
      
      }

    });

});