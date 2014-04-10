//Model
define(['backbone'], function(Backbone) {

  return Backbone.Model.extend({

    defaults: {
      name: 'value'
    },

    initialize: function() {
      /*
      this.on('change', function(model) {
      
      });
      */
    }

  });

});

//View
define(['backbone'], function(Backbone) {
  
  return Backbone.View.extend({

    el: '#id',

    template: app.templates.templateName,

    events: {
      'click button': 'button_click'
    },

    initialize: function() {
      this.model.on('change', this.update, this);
    },

    render: function() {

      var html = this.template(this.model.toJSON());
      this.$el.html(html);

    },

    update: function() {
      
    },

    button_click: function(e) {
      var $btn = $(e.currentTarget);
    }

  });

});


//Module
define([
  'models/ModelName',
  'views/ViewName'
], function(_model, _view) {

  function init(language) {
    
    var model = new _model();
    var view = new _view({
      model: model
    });
    view.render();
  }

  return { init: init };

});
