module.exports = function(grunt) {

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
    }
  });
  


  grunt.loadNpmTasks('grunt-contrib-handlebars');
};