//check if no high scores were recorded in local storage
if (JSON.parse(localStorage.getItem("highscores")) == null){
    //display text for no high scores in HTML DOM
    document.getElementById("highscores").innerHTML = "No high scores recorded.";
} else {
    //if high scores were recorded in locaal storage, retrieve them
    var highscores = JSON.parse(localStorage.getItem("highscores"));
    //sort high scores in descending order of final scores
    highscores.sort((a,b) => b.finalScore - a.finalScore)

    var allHighscores = document.getElementById("all-highscores");
    var each_score = "";
    //loop through each score in high score
    for(score of highscores) {
        //create a list item for each high score with initials and final score
        each_score += "<li class='high-score'>" + score.initials.toUpperCase() + " --- " + score.finalScore + "</li>";
    }
    //add all high score list items to HTML ordered list
    allHighscores.innerHTML = each_score;
}

var clearBtn = document.getElementById("clear-btn");
//add on click event listener to clear high scores button
clearBtn.addEventListener("click", (e) => {
    //call clear scores function
    clearScores();
})

//function to clear local storage and refresh page
function clearScores() {
    localStorage.clear();
    location.reload();
}

//function to redirect to homepage
function goBack(){
    location.href = "./index.html";
}