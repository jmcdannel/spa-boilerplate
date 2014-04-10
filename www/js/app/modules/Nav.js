define([
  'models/Nav',
  'views/Nav'
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