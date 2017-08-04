exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    var counter = 0;
    arr.forEach(function(item){
      counter += item;
    });
    return counter;
  },

  remove: function(arr, item) {
    var properArr = [];
    arr.forEach(function(arrItem){
      if (arrItem !== item){
        properArr.push(arrItem);
      }
    });
    return properArr;
  },

  removeWithoutCopy: function(arr, item) {
    for (var i = 0; i < arr.length; i++){
      if (arr[i] === item){
        arr.splice(i, 1);
        i -= 1;
      }
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.splice(arr.length - 1, 1);
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.splice(0, 1);
    return arr;
  },

  concat: function(arr1, arr2) {
    arr2.forEach(function(item){
      arr1.push(item);
    });
    return arr1;
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    var counter = 0;
    arr.forEach(function(arrItem){
      if (arrItem === item){
        counter += 1;
      }
    });
    return counter;
  },

  duplicates: function(arr) {
    var duplicatesArray = [];
    arr.sort(function(a, b) {
        return a - b;
    });
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i+1] && duplicatesArray[duplicatesArray.length - 1] !== arr[i]){
            duplicatesArray.push(arr[i]);
        }

    }
    return duplicatesArray;
  },

  square: function(arr) {
      var squareItems = [];
      arr.forEach(function(item){
          var x = item * item;
          squareItems.push(x);
      })
      return squareItems;
  },

  findAllOccurrences: function(arr, target) {
      var occur = [];
      for(var i = 0; i < arr.length; i++){
          if(arr[i] == target){
              occur.push(i);
          }
      }
      return occur;
  }
};
