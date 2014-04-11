define([
  'models/Footer',
  'views/Footer'
], function(_model, _view) {

  var deferred = new $.Deferred();

  function init() {
    
    var model = new _model();
    model.fetch({ success: model_fetched });
    return deferred.promise();
    
  }

  function model_fetched(model, response, options) {
    var view = new _view({ model: model });
    view.render();
    deferred.resolve();
  }

  return { init: init };

});