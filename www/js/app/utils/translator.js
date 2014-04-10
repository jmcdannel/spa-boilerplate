define(function() {

  var translations = {
    'english' : 'Hello World',
    'german' : 'Hallo Welt',
    'french' : 'Bonjour tout le monde'
  };

  function getTranslation(language) {
    return translations[language];
  }

  return { get: getTranslation }

});