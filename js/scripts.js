// business logic
var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
var finalText = [];
var translatedText = function(userInput) {
  if (vowels.includes(userInput.charAt(0))) {
    finalText += userInput + "way";
    alert(finalText);
  }
};















// user interface logic
$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#userInput").val();
    var result = translatedText(userInput);
  });
});
