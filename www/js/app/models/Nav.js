define(['backbone'], function(Backbone) {

  return Backbone.Model.extend({

    defaults: {
      nav: [
        {text: 'About', link: '#'},
        {text: 'Help', link: '#'},
        {text: 'GitHub', link: '#'},
        {text: 'To Do', link: '#'}
      ]
    }

  });

});