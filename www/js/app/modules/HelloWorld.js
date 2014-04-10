define([
  'models/HelloWorld',
  'views/HelloWorld'
], function(_model, _view) {

  function init(language) {
    
    var model = new _model();
    if (language) {
      model.set('language', language);
    }
    var view = new _view({
      model: model
    });
    view.render();
  }

  return { init: init };

});