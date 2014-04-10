define(['backbone', 'utils/translator'], function(Backbone, Translator) {
  
  return Backbone.Model.extend({

    defaults: {
      language: 'english'
    },

    initialize: function() {
      this.on('change:language', function(model, language) {
        this.setText(language);
      });
      this.setText(this.get('language'));
    },

    setText: function(language) {
      var translated = Translator.get(language);
      this.set('text', translated);
    }

  });

});