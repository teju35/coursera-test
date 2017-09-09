(function () {

var names = ["Emma", "John", "Jen", "James", "Harry", "Ron", "Lily", "Jerry", "Luna", "Jim"];

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {

    Goodbye.say(names[i]);
  } else {

    hello.say(names[i]);
  }
}

})();