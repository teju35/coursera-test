(function (window) {

var Goodbye = {};
var say = "Good Bye";

Goodbye.say = function (name) {
  console.log(say + " " + name);
}

window.Goodbye = Goodbye;
})(window);