define([
  'backbone',
  'modules/HelloWorld',
  'modules/Nav',
  'modules/Footer'
], function(Backbone, HelloWorld, Nav, Footer){

  var Router = Backbone.Router.extend({

    routes: {
      ":language": "hello",
      "": "hello"
    },

    initialize: function() {
      Nav.init();
      var promise = Footer.init();
      promise.done(function() {
        app.log('footer is rendered');
      });
    },

    hello: function(language) {
      app.log('router:hello', language);
      HelloWorld.init(language);
    }

  });

  return Router;

});