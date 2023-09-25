const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = ""
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = '';


//TODO: Variables for Part 2
let questions = [
  "Who was the first American woman in space? ", 
  "True or false: 5 kilometer == 5000 meters? ", 
  "(5 + 3)/2 * 10 = ? ", 
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", 
  "What is the minimum crew size for the ISS? "
];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("What is your name? ");
}

function askQuestion() {

  for (let i = 0; i < questions.length; i++){
    candidateAnswers[i] = input.question(questions[i]);
    // candidateAnswers.push(input.question(questions[i]));
  }
}

function gradeQuiz(candidateAnswers) {

  let numCorrectAnswers = 0
  let numQuizQuestions = questions.length
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  for (let i = 0; i < correctAnswers.length; i++) {
    if (correctAnswers[i].toString().toLowerCase() === candidateAnswers[i].toString().toLowerCase()){
      numCorrectAnswers += 1;
      console.log( `${candidateAnswers[i]} is correct!`);
    } else{
      console.log(`${candidateAnswers[i]} is incorrect. Correct answer: ${correctAnswers[i]}.`)
    }
  }
  
  
  let grade = (numCorrectAnswers / numQuizQuestions) * 100; 
    if (grade >= 80){
      console.log(`Congrats! You've passed with a score of ${grade}%!`);
    }else {
      console.log(`Sorry, you have not passed the quiz with a score of ${grade}%. Please try again.`)
    }  
   //TODO 3.2 use this variable to calculate the candidates score.

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
  console.log(`Hello ${candidateName}!`);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};