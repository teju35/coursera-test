(function (window) {

var hello = {};

var say = "Hello";

hello.say = function (name) {
  console.log(say + " " + name);
}

window.hello = hello;

})(window);