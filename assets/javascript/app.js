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
var intervalId;
var timerRunning = false;
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
    if (!timerRunning) {
        intervalId = setInterval(countdown, 1000);
        timerRunning = true;
        secondsLeft = 20;
    }
    $("#timer").html(secondsLeft);
}
//display question
function displayQuestion() {
    triviaId = triviaArr[count]
    $(".question").html(triviaId.question);
    $(".answer").html("Answer: " + "<input type='text' id='input'>");
    document.getElementById("input").focus();
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


}
//check answer
function checkAnswer() {
    if (userGuess === triviaId.answer) {
        $(".answer").html("Correct!");
        clearInterval(intervalId);
        timerRunning = false;
        correct += 1;
        nextQuestion();

    } else if (userGuess !== triviaId.answer && (timerRunning)) {
        $(".answer").html("Wrong. Try again.");
        setTimeout(function () {
            $(".answer").html("Answer: " + "<input type='text' id='input'>");
            document.getElementById("input").focus();
        }, 2000);

    } else if (!timerRunning) {
        nextQuestion();
    }
}

//countdown timer
function countdown() {
    if (secondsLeft < 0) {
        clearInterval(setTimer);
        timerRunning = false;
        $("#timer").html("Time's up!");
        nextQuestion();
    } else {
        $("#timer").html(secondsLeft);
        secondsLeft--;
    }

}