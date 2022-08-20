
let startQuizContainer = document.getElementById("startQuizContainer");
let containerForEverything =  document.getElementById("containerForEverything"); 
let questionInTheQuiz = document.getElementById("questionInTheQuiz");


let configuredCount = 10;


var count = configuredCount;


let url;
var questionTimerInterval;

let startQuizButtonToChange = document.getElementById("startQuizButtonToChange");


let startQuizButton = document.getElementById("startQuizButton"); 


let nextQuestionContainer = document.getElementById("nextQuestionContainer");

let nextQuestionButton = document.getElementById("nextQuestionButton");

let easyMediumHardContainer = document.getElementById("easyMediumHardContainer");

easyMediumHardContainer.classList.remove("hide")

document.getElementById('count').innerHTML=configuredCount;

let easyButton = document.getElementById("easy");
let mediumButton = document.getElementById("medium");
let hardButton = document.getElementById("hard");


    function easyFunction(){
        url = "https://the-trivia-api.com/api/questions?categories=arts_and_literature&limit=10&difficulty=easy" 
    }


async function startQuiz(){


    currentQuestionIndex =0
    const response = await fetch (url);
    const data = await response.json();
    containerForEverything.classList.remove('hide');
    startQuizContainer.style.display = "none";   
    displayQuestion(data);
}

function displayQuestion(data){  

        if(currentQuestionIndex == [data].length){
           
            currentQuestionIndex = 0;
    
        }

        else{
            questionInTheQuiz.innerHTML = data[currentQuestionIndex].question;
            currentQuestionIndex = 0;

            currentQuestionIndex++;
    

            console.log(data[currentQuestionIndex].question);

            console.log("kdsfskkdfskdfsfsdf");  


            //   displayAnswers(index);
    
    

            console.log(currentQuestionIndex);   
            }
            
    };



    
    function nextQuestion(data){         
        if(currentQuestionIndex == [data].length){


            containerForEverything.classList.add('hide');
            startQuizContainer.style.display = "flex";
            nextQuestionContainer.style.display = "none";
            resultContainer.classList.remove('hide');
            easyMediumHardContainer.classList.add("hide");
            startQuizButton.style.display = "block";
            console.log("aaa");  
        }

        
        else{
            currentQuestionIndex++
            displayQuestion(currentQuestionIndex);
            nextQuestionContainer.style.display = "none";
        }
    }



/*
  
function resetQuiz() {

    containerForEverything.classList.add('hide');
    startQuizContainer.style.display = "flex";
    nextQuestionContainer.classList.add('hide');
    startQuizButtonToChange.innerText = "Restart?";
    currentQuestionIndex = 0;
    resultContainer.classList.remove('hide');
   /* resultText.innerText = "Correct answers: " + correctAnswerTotal + `\n` + "Wrong answers: " + wrongAnswerTotal + `\n` + "Total answered questions:" + (correctAnswerTotal + wrongAnswerTotal);
    

    if (correctAnswerTotal >= 7)
       {resultMessage.innerText = "Good job!"}
    
    else if (correctAnswerTotal <= 6)
       {resultMessage.innerText = "Study more idjit!"}

    correctAnswerTotal = 0;
    wrongAnswerTotal = 0;*/






function timer(){
    count = configuredCount;
    questionTimerInterval = setInterval(function(){                

        if (count > 0) {
            count--;
            nextQuestionContainer.style.display = "none";
            document.getElementById('count').innerHTML=count;
        }
        else {
            clearInterval(questionTimerInterval);
            nextQuestionContainer.style.display = "flex";


         /*   answerButton0.disabled = true;
            answerButton1.disabled = true;
            answerButton2.disabled = true;
            answerButton3.disabled = true;*/

            count = configuredCount;
        }      
        
    },
    1000);
}



function clickedAnswer(id) {
    var button = document.getElementById(id);

    clearInterval(questionTimerInterval);
    document.getElementById('count').innerHTML=count;
    count = configuredCount;    

    if(button.getAttribute("correct") == "true") {
        button.classList.remove("wrong");
        button.classList.add("right");
  //      correctAnswerTotal++;
    }        
    else {
        button.classList.remove("right");
        button.classList.add("wrong");
   //     wrongAnswerTotal++;
    }
        
  //  var otherButtons = getSiblings(button);

 /*   otherButtons.forEach((buttonToDisable) => {
        if(buttonToDisable.getAttribute("correct") == "true") {
            buttonToDisable.classList.remove("wrong");
            buttonToDisable.classList.add("rightforcorrectdisabled");
        }       
        buttonToDisable.disabled = true;         
    });*/

    nextQuestionContainer.style.display = "flex";

}



    
   


/*
let answerButton0 = document.getElementById("answerButton0");
let answerButton1 = document.getElementById("answerButton1");
let answerButton2 = document.getElementById("answerButton2");
let answerButton3 = document.getElementById("answerButton3");


let correctAnswerTotal = 0;
let wrongAnswerTotal = 0;

let resultContainer = document.getElementById("resultContainer");
let resultText = document.getElementById("resultText");


let resultMessage = document.getElementById("resultMessage");






function updateAnswerButton(button, answer) {
    button.innerText = answer.text;
    if(answer.correct == true) {
        button.setAttribute("correct", "true");
    }        
    else {
        button.setAttribute("correct", "false");
    }

    button.disabled = false;

    button.classList.remove("wrong");
    button.classList.remove("right");
    button.classList.remove("rightforcorrectdisabled");

}

function displayAnswers(index) {
    shuffleArray(allQuestions[index].answers);
    
    updateAnswerButton(answerButton0, allQuestions[index].answers[0]);
    updateAnswerButton(answerButton1, allQuestions[index].answers[1]);
    updateAnswerButton(answerButton2, allQuestions[index].answers[2]);
    updateAnswerButton(answerButton3, allQuestions[index].answers[3]);        
}

*/













