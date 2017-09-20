// var seconds = Math.floor((distance % (1000 * 60)) / 1000);


var trivia1 = {
    "question": "What gives green pasta its color?",
    "answer": "Spinach",
};

var trivia2 = {
    "question": "What is the salted roe of a sturgeon called?",
    "answer": "Caviar",
};


var trivia3 = {
    "question": "Which vegetable is a green variety of banana, used as a staple food in the tropics?",
    "answer": "Plantain",
};

var trivia4 = {
    "question": "What type of flowers produce vanilla pods?",
    "answer": "Orchids",
};

var trivia5 = {
    "question": "For which edible fungus is Perigord, France famous?",
    "answer": "Truffles",
};

var trivia6 = {
    "question": "What are dried plums called?",
    "answer": "Prunes",
};
var setTimer;
var triviaArr = [trivia1, trivia2, trivia3, trivia4, trivia5, trivia6 ];
var time;
var correct;
var wrong;
var oot;
var count = 0;
console.log(trivia1);

$(".start").on("click", function () {
    correct = 0;
    wrong = 0;
    oot = 0;
    secondsLeft = 30;
    var setTimer = setInterval(countdown, 1000);

    $("#timer").html(secondsLeft);
    displayQuestion();
});

function displayQuestion() {
    var triviaId=triviaArr[count]
    $(".question").html(triviaId.question);



    $(".answer").html("Answer: "+ "<input type='text' id='input'>");
$(".answer").on ('keypress',"#input", function(event){
    
console.log();
})
    console.log(triviaId.question);
}
//reset between questions
function reset() {


    var timeLeft = 3;
    var reset = setInterval(function () {
        timeLeft--;
        if (timeLeft <= 0) {
            clearInterval(reset);
        }
    }, 1000);
};

//countdown timer
var secondsLeft = 30;


function countdown() {
    if (secondsLeft < 0) {
        clearInterval(setTimer);
        $("#timer").html("Time's up!");
    } else {
        $("#timer").html(secondsLeft);
        secondsLeft--;
    }

}