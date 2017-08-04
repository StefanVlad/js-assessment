exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
    alterContext: function (fn, obj) {
        var returnedObj = obj;
        returnedObj.sayGreeting = fn;
        return returnedObj.sayGreeting();
    },

    alterObjects: function (constructor, greeting) {
        constructor.prototype.greeting = greeting;
    },

    iterate: function (obj) {
        var arr = [];
        for (var attr in obj){
            if(obj.hasOwnProperty(attr)){
                arr.push( attr + ': ' + obj[attr])
            }
        }
        return arr;
    }
};
