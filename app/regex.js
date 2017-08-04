exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
      var regx = /\d/g;
      if(regx.exec(str)){
        return true;
      } else {
        return false;
      }
  },

  containsRepeatingLetter: function(str) {
    var regx = /([a-zA-Z]).*(\1)/gi;
      if(regx.exec(str)){
          return true;
      } else {
          return false;
      }
  },

  endsWithVowel: function(str) {
      var regx = /(a|e|i|o|u)$/gi;
      if(regx.exec(str)){
          return true;
      } else {
          return false;
      }
  },

  captureThreeNumbers: function(str) {
      var regx = /\d{3}/gi;
      var found;
      if(str.match(regx)){
          found = str.match(regx)[0];
          return found;
      } else {
          return false;
      }
  },

  matchesPattern: function(str) {
      var regx = /^\d{3}\-\d{3}\-\d{4}$/gi;
      if(regx.exec(str)){
          return true;
      } else {
          return false;
      }
  },

  isUSD: function(str) {

  }
};
