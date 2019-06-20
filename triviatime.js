var quizQuestions = [{
    question : "In the year 1900 in the U.S. what were the most popular first names given to boy and girl babies?",
    choices : ['William and Elizabeth', 'Joseph and Catherine', 'John and Mary', 'George and Anne'],
    correctAnswer : 'John and Mary'
}, {
    question : "When did the Liberty Bell get its name?",
    choices :  ['when it was made, in 1701', 'when it rang on July 4, 1776', 'in the 19th century, when it became a symbol of the abolition of slavery', 'none of the above'],
    correctAnswer : "in the 19th century, when it became a symbol of the abolition of slavery"
}, {
    question : "In the Roy Rogers -Dale Evans Museum, you will find Roy and Dales stuffed horses. Roy's horse was named Trigger, which was Dales horse?",
    choices : ['Buttermilk', 'Daisy', 'Scout', 'Tulip'],
    correctAnswer : 'Buttermilk'
}, {
    question : "Which of the following items was owned by the fewest U.S. homes in 1990?",
    choices : ['home computer', 'compact disk player', 'cordless phone', 'dishwasher'],
    correctAnswer : 'compact disk player'
}, {
    question : "The Brownie Box Camera introduced by Eastman Kodak in 1900 had a retail price of what?",
    choices : ['$1', '$5', '$10', '$20'],
    correctAnswer : '$1'

}];





var correctAnswers = 0
var wrongs = 0;
var intervalId;
var number = 10;
var currentQuestion = 0;
var answerNumerator = 1;

function questionDisplayer() {
    $("#question").text(quizQuestions[currentQuestion].question);
    for (a in quizQuestions[currentQuestion].choices) {
        var option = $("<div></div>").html('<p class="answers" data-id="' + quizQuestions[currentQuestion].choices[a] + '">' + answerNumerator + ' : ' +  quizQuestions[currentQuestion].choices[a]);
        answerNumerator++;
        // $(option).html('<p value="' + quizQuestions[currentQuestion].choices[a] + '">' + a+1 + ' : ' +  quizQuestions[currentQuestion].choices[a]);
        $("#answerArea").append(option);
    }
};


function run() {
    questionDisplayer();
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }



function decrement() {
    number --;
    $("#timer").text(number);
    if (currentQuestion === 5){
        clearInterval(intervalId);
        document.write("<div id='scoreTime'><P>Lets see how you did</p></div>");
        return tallyScore();
    }
    
    if (number <= 0 && currentQuestion < 5) {
        $("#answerArea").empty();
        currentQuestion++;
        answerNumerator = 1;
        number = 10;
        questionDisplayer();
    }
}

function gameOver() {
    document.write();
    alert('You Lose Bud!');
};

function tallyScore(){
    var corrects = $("<div></div>").text('You got ' + correctAnswers + ' questions right!');
    $("#scoreTime").append(corrects);
}

run();

$(document).on("click", ".answers", function(event){
    event.preventDefault();
    var userAnswer = $(this).data("id");
    if (userAnswer === quizQuestions[currentQuestion].correctAnswer) {
        correctAnswers++;
        $("#answerArea").empty();
        currentQuestion++;
        answerNumerator = 1;
        number = 10;
        questionDisplayer();
    }
    else {
        wrongs ++
        $("#answerArea").empty();
        currentQuestion++;
        answerNumerator = 1;
        number = 10;
        questionDisplayer();
    };

    
});