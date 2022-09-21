const question = document.getElementById("question"); 

//stores an array of all the choice elements
const choices = Array.from(document.getElementsByClassName("choices")); 

var score = 0;
var questionIndex = 0;
var currentQuestion = {};
var count = 60;
const CORRECT_BONUS = 10;
const INCORRECT_PENALTY = 10;
const MAX_QUESTIONS = 5;

//an array of objects with the data used for the questions and answers
const questions = [
  {
    Question: "Javascript is an __________ language.",
    Choice1: "Object-Oriented",
    Choice2: "Object-Based",
    Choice3: "Procedural",
    Choice4: "None of the above",
    Answer: 1,
  },
  {
    Question:
      "Which of the following keywords is used to define a variable in Javascript?",
    Choice1: "var",
    Choice2: "let",
    Choice3: "Both A and B",
    Choice4: "None of the above",
    Answer: 3,
  },
  {
    Question:
      "Which of the following methods is used to access HTML elements using Javascript?",
    Choice1: "getElementById()",
    Choice2: "getElementsByClassName()",
    Choice3: "Both A and B",
    Choice4: "None of the above",
    Answer: 3,
  },
  {
    Question: "How can a datatype be declared to be a constant type?",
    Choice1: "var",
    Choice2: "const",
    Choice3: "let",
    Choice4: "import",
    Answer: 2,
  },
  {
    Question: "What keyword is used to begin a conditional statement?",
    Choice1: "while",
    Choice2: "function",
    Choice3: "for",
    Choice4: "if",
    Answer: 4,
  },
]; 

//function to load the page
function loadPage() {
    setTimer();
    getQuestion();
}

//function to get a question from the data
function getQuestion() {
//index for current question
  currentQuestion = questions[questionIndex];
  //show current question in HTML DOM
  question.innerHTML = questions[questionIndex].Question;
  //loop through each choice in choice array
  choices.forEach((choice) => {
    const number = choice.getAttribute("data-number");
    //match each choice answer number with each data number attribute
    choice.innerHTML = currentQuestion["Choice" + number];
  });
}

//function to begin timer
function setTimer() {
    //create setInterval function variable that decrements count by 1 every second (1000 milliseconds)
  var interval = setInterval(function () {
    count--;
    //if counter hits 0, load next page with score parameter in URL
    if (count <= 0) {
      clearInterval(interval);
      location.href = "./finalscore.html?score="+score;
    }
    //display count
    document.getElementById("timer_secs").innerHTML = count;
  }, 1000);
}

//loop through each choice button in HTML DOM
choices.forEach(choice => {
    //add event listener set to on click for each choice button
    choice.addEventListener("click", e => {
        const SELECTED_CHOICE = e.target;
        //get the data number attribute associated with each button element
        const SELECTED_ANSWER = SELECTED_CHOICE.getAttribute("data-number");
        //chack if answer key-value in question object is equivalent to data number attribute
        if (SELECTED_ANSWER == questions[questionIndex].Answer) {
            //display correct text if both values match
            document.getElementById("result").innerHTML = "Correct!";
            document.getElementById("result").style.color = "green";
            //increment score by 10
            score += CORRECT_BONUS;
        } else {
            //display incorrect text if both values don't match
            document.getElementById("result").innerHTML = "Wrong!";
            document.getElementById("result").style.color = "red";
            //decrement timer by 10
            count -= INCORRECT_PENALTY;
        }
        //go to next question index
        questionIndex += 1;
        //check if max questions have been reached
        if (questionIndex == MAX_QUESTIONS) {
            //redirect to new page with score parameter added
            location.href = "./finalscore.html?score="+score;
        }
        //get new question
        getQuestion(); 
    }
)})

//call loadpage function
loadPage();
