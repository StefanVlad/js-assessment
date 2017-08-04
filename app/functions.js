exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(null, arr);
  },

  speak: function(fn, obj) {
      return fn.call(obj);
  },

  functionFunction: function(str) {
    function myFunction (arg){
      return str + ', ' + arg;
    }
    return myFunction;
  },

  makeClosures: function(arr, fn) {
    var result = [];
    arr.forEach(function(item, position){
      result[position] = function(){
        return fn(item);
      }
    });
      return result;
  },

  partial: function(fn, str1, str2) {
    return function partial (){
      return fn(str1, str2) + '!!';
    }
  },

  useArguments: function() {
    var results = 0;
    for (var i = 0; i < arguments.length; i++){
      if(!isNaN(arguments[i]))
        results += arguments[i];
    }
      return results;
  },

  callIt: function(fn) {
    var args = [];
    for (var i = 0; i < arguments.length; i++){
      if(!isNaN(arguments[i])){
        args.push(arguments[i])
      }
    }
    return fn.apply(null, args);
  },

  partialUsingArguments: function(fn) {
    return function partial(){
      var args = [];
      for (var i = 0; i < arguments.length; i++) {
          if (!isNaN(arguments[i])) {
              args.push(arguments[i])
          }
      }
      return fn.apply(null, args);
    }
     // var args = [];
     // for(var i = 0; i < arguments.length; i++){
     //   if(!isNaN(arguments[i])){
     //     args.push(arguments[i])
     //   }
     // }
     // console.log('args', args);
  },

  curryIt: function(fn) {

  }
};
