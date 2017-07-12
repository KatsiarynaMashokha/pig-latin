// business logic
var vowels = ["a", "e", "i", "o", "u"];
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x","y", "z"];
var finalText = [];
var numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var ayString = "ay";

var translatedText = function(userInput) {
  if (vowels.includes(userInput.charAt(0))) {
    finalText = userInput + "way";
    console.log(finalText);
  }
  else if (userInput.charAt(0) === "q" && userInput.charAt(1) === "u") {
    finalText = userInput.substring(2) + "quay";
    console.log(finalText);
  }
  else if (!(/^[a-zA-Z]+$/.test(userInput))) {
    alert("Please enter valid text");
    return;
  }


else  {
  var removedLettersArray = [];
  var removedVar;
  while (!vowels.includes(userInput.charAt(0))) {
    removedVar = userInput.slice(0,1);
    userInput = userInput.slice(1, userInput.length);
    console.log("removed letter is " + removedVar);
    removedLettersArray = removedLettersArray + removedVar;
    removedVar = undefined;
    console.log(removedLettersArray);
  }
    var lengthOfRemoved = removedLettersArray.length;
    if (removedLettersArray.charAt(lengthOfRemoved - 1) === "q" && userInput.charAt(0) === "u") {
      removedLettersArray = removedLettersArray + "u"
      userInput = userInput.slice(1, userInput.length);
      console.log("New removed array is " + removedLettersArray);
      console.log("user input is " + userInput)
     }
    finalText = userInput + removedLettersArray + ayString;
    console.log(finalText);
}
};















// user interface logic
$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#userInput").val();
    //var userInput = $("input#userInput").val().split(" ");
    var result = translatedText(userInput);
  });
});
