module.exports = function(grunt) {

  "use strict";
  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    handlebars: {
      compile: {
        options: { 
          namespace: 'app.templates',
          processName: function(filePath) {
            return filePath.replace(/^www\/templates\//, '').replace(/\.hbs$/, '');
          }
        },
        files: {
          'www/js/app/compiled-templates.js': ['www/templates/*.hbs']
        }
      }
    },

    requirejs: {
      compile: {
        options: {
          baseUrl: "www/js/app",
          mainConfigFile: "www/js/app.js",
          out: "www/js/app.min.js",
          name : "../app"
        }
      }
    },

    cssmin: {
        build: {
            src: 'www/css/styles.css',
            dest: 'www/css/styles.min.css'
        }
    },

    sass: {
        build: {
            files: {
                'www/css/styles.css': 'www/sass/styles.scss'
            }
        }
    },

    watch: {
      css: {
          files: ['www/sass/**/*.scss'],
          tasks: ['sass']
      },
      html: {
        files: ['www/templates/*.hbs'],
        tasks: ['handlebars']
      }
    }

  });
  

  //grunt.loadNpmTasks('grunt-contrib-requirejs');
  //grunt.loadNpmTasks('grunt-contrib-handlebars');


  grunt.registerTask('default', ['build']);
  grunt.registerTask('dev', ['handlebars', 'sass']);
  grunt.registerTask('build', ['handlebars', 'sass', 'cssmin', 'requirejs']);

};