requirejs.config({
    baseUrl: 'js/app',

    paths: {
      jquery: '//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min',
      lodash: '../lib/lodash',
      backbone: '../lib/backbone',
      handlebars: '../lib/handlebars.runtime',
      templates : 'compiled-templates'
    },
    
    shim: {
        // Libraries
        jquery: {
            exports: '$'
        },
        lodash: {
            exports: '_',
        },
        backbone: {
            exports: 'Backbone',
            deps: ['jquery', 'lodash']
        },
        templates: {
          deps: ['handlebars']
        },
        handlebars: {
          exports: 'Handlebars'
        },

        /*
         * Our app requires Backbone
         * (which in turn requires LoDash and jQuery)
         */
        main: {
          deps: ['backbone', 'templates']
        }
    },
    map: {
      '*': {
        'underscore': 'lodash'
      }
    },

    // Load the main app module to start the app
    deps: ['main']
});