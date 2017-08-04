exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
      value.then(function(data){
        console.log('data', data);
      })
  },
  manipulateRemoteData: function(url) {

  }
};
