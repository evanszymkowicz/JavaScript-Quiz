// Part one: Create an array containing the questions and answers
var questions = [
    ["What is the capital of Maryland?", "Annapolis"],
    ["Who led the Washington Nationals in home runs in 2016?", "Daniel Murphy"],
    ["Who was the President before George H. W. Bush?", "Ronald Reagan"],
    ["What year did the Boston Red Sox break 'The Curse?'", "2005"]
];

var answers = [];
var correctAns = [];
var wrongAns = [];

// Step 2: Create function that pushes the questions as a popup alert
function askQuestions(questions, answers) {
  for (var i = 0; i < questions.length; i++) {
    // Step 2a: Store answers in an array variable
    answers[i] = prompt(questions[i][0]);
  };
};

// Step 3: Check the answer against the preset
function checkAnswers(questions, answers) {
  for (var i = 0; i < answers.length; i++) {
    if (questions[i][1] == answers[i]) {
      correctAns.push(questions[i]);
    } else {
      wrongAns.push(questions[i]);
    }
  };
};

// Step 4: Display result
function displayResults(correct, wrong) {
  $("#content").html(
    "<h1>Javascript Quiz Results</h1>" +
    "<h3>You answered " + correct.length + " questions correctly!</h3>" +
    "<br><br><h5><b>Correctly Answers:<b></h5>"
  );
  for (var i = 0; i < correct.length; i++) {
    $("#content").append(
      (i + 1) + ") " + correct[i][0] + "<br>Answer: " + correct[i][1] + "<br><br>");
  };
  $("#content").append(
    "<br><br><h5><b>Incorrect Answers:</b></h5>");
  for (var i = 0; i < wrong.length; i++) {
    $("#content").append(
      (i + 1) + ") " + wrong[i][0] + "<br>Answer: " + wrong[i][1] + "<br><br>");
  };
}

askQuestions(questions, answers);
checkAnswers(questions, answers);
displayResults(correctAns, wrongAns);
