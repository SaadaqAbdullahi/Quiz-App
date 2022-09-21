var initials = "";
var input = "";

//get value of score from URL parameter
var finalScore = new URLSearchParams(window.location.search).get("score");

//display user score in HTML DOM
document.getElementById("score").innerHTML =
  "Your final score is " + finalScore + ".";


var submitButton = document.getElementById("user-initials");
//create an event listener for submit button on click
submitButton.addEventListener("click", (e) => {
//grab input value from user
  var input = document.getElementById("initials").value;
  //check if input value is not empty
  if(input.length > 0) {
  initials = input;
  //create a new object with initials and finalscore
  var scoreEntry = {
    initials: initials,
    finalScore: finalScore,
  };
  
  //grab highscore value from local storage
  var existingHighScores = JSON.parse(localStorage.getItem("highscores"));
 
  //check if local storage doesn't exist
  if (existingHighScores == null) {
    //if it doesn't exist, create new array
    existingHighScores = [];
  }
  //push score object into high score array
  existingHighScores.push(scoreEntry);
  //store the high score array in local storage
  localStorage.setItem("highscores", JSON.stringify(existingHighScores));
  //redirect to new page
  location.href = "./highscores.html";
}});
