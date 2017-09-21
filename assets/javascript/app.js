// var seconds = Math.floor((distance % (1000 * 60)) / 1000);
$(document).ready(function () {

    $(document).bind('keypress', pressed);
});

function pressed(e) {
    if (e.keyCode === 13) {
        console.log("enter");
        console.log($("#input").val());
        userGuess = $("#input").val().toLowerCase();
        console.log(userGuess);
        checkAnswer();
  
    }
    
}
var trivia1 = {
    "question": "What gives green pasta its color?",
    "answer": "spinach",
};

var trivia2 = {
    "question": "What is the salted roe of a sturgeon called?",
    "answer": "caviar",
};


var trivia3 = {
    "question": "Which vegetable is a green variety of banana, used as a staple food in the tropics?",
    "answer": "plantain",
};

var trivia4 = {
    "question": "What type of flowers produce vanilla pods?",
    "answer": "orchids",
};

var trivia5 = {
    "question": "For which edible fungus is Perigord, France famous?",
    "answer": "truffles",
};

var trivia6 = {
    "question": "What are dried plums called?",
    "answer": "prunes",
};
var secondsLeft;
var setTimer;
var triviaArr = [trivia1, trivia2, trivia3, trivia4, trivia5, trivia6];
var time;
var correct;
var wrong;
var oot;
var count = 0;
console.log(trivia1);
var triviaId = 0;
$(".start").on("click", function () {
    correct = 0;
    wrong = 0;
    oot = 0;
    secondsLeft = 20;

    displayQuestion();
});
//set timer
function setTimer() {

    setInterval(countdown, 1000);

    $("#timer").html(secondsLeft);
}
//display question
function displayQuestion() {
    var triviaId = triviaArr[count]
    $(".question").html(triviaId.question);
    $(".answer").html("Answer: " + "<input type='text' id='input'>");
    setTimer();
    console.log(triviaId.question);
    console.log(triviaId.answer);
}
//increment question
function nextQuestion() {
    count++;

    setTimeout(displayQuestion, 3000);
    if (count === triviaArr.length) {
        count = 0;
    }
setTimer();
}
//check answer
function checkAnswer() {
    if (userGuess === triviaArr[count].answer) {
        $(".answer").html("Correct!");
    
        nextQuestion();
        

    } else {
        $(".answer").html("Wrong. Try again.");
        setTimeout(function(){
            $(".answer").html("Answer: " + "<input type='text' id='input'>");   
        },2000)
    }

}

//countdown timer
function countdown() {
    if (secondsLeft < 0) {
        clearInterval(setTimer);
        $("#timer").html("Time's up!");
    } else {
        $("#timer").html(secondsLeft);
        secondsLeft--;
    }

}