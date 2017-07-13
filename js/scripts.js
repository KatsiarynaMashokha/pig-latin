// business logic
var vowels = ["a", "e", "i", "o", "u"];
var finalText = [];
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
    return "";
  }

else  {
  var removedLettersArray = [];
  var removedVar;
  while (!vowels.includes(userInput.charAt(0))) {
    removedVar = userInput.slice(0,1);
    userInput = userInput.slice(1, userInput.length);
    removedLettersArray = removedLettersArray + removedVar;
  }
    var lengthOfRemoved = removedLettersArray.length;
    if (removedLettersArray.charAt(lengthOfRemoved - 1) === "q" && userInput.charAt(0) === "u") {
      removedLettersArray = removedLettersArray + "u"
      userInput = userInput.slice(1, userInput.length);
     }
    finalText = userInput + removedLettersArray + ayString;
}
      return finalText;
};

// user interface logic
$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    //var userInput = $("input#userInput").val();
    var userInput = $("input#userInput").val().split(" ");
    var result = "";
    userInput.forEach(function(word){
      console.log(word);
      var pigword = translatedText(word);
      result = result + " " + pigword;
    });
      console.log(result);
      alert("The translated string " + result);
  });
});
