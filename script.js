// var allQuestions; 

// var url;

let difficulty;




function easyFunction(){
    difficulty = "&difficulty=easy";
    fetchAPI();
   } 
   
   function mediumFunction(){
    difficulty = "&difficulty=medium";
    fetchAPI();
   } 
   
   function hardFunction(){
    difficulty = "&difficulty=hard";
    fetchAPI();
   } 
   

   async function fetchAPI(){
    let response = await fetch("https://the-trivia-api.com/api/questions?categories=film_and_tv&limit=5" + difficulty + "&tags=actors");
    console.log(response);

    let allQuestions = await response.json();
    console.log(allQuestions);


    
}



/*

function getSiblings(e) {
    let siblings = []; 
    if(!e.parentNode) {
        return siblings;
    }
    let sibling  = e.parentNode.firstChild;    
    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== e) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
    }
    return siblings;
};









let configuredCount = 10;

let startQuizContainer = document.getElementById("startQuizContainer");
let startQuizButton = document.getElementById("startQuizButton"); 
let containerForEverything =  document.getElementById("containerForEverything"); 


let nextQuestionContainer = document.getElementById("nextQuestionContainer");

let nextQuestionButton = document.getElementById("nextQuestionButton");

let questionInTheQuiz = document.getElementById("questionInTheQuiz");

let answerButton0 = document.getElementById("answerButton0");
let answerButton1 = document.getElementById("answerButton1");
let answerButton2 = document.getElementById("answerButton2");
let answerButton3 = document.getElementById("answerButton3");

let currentQuestionIndex = 0;

let correctAnswerTotal = 0;
let wrongAnswerTotal = 0;

let resultContainer = document.getElementById("resultContainer");
let resultText = document.getElementById("resultText");


let resultMessage = document.getElementById("resultMessage");

let startQuizButtonToChange = document.getElementById("startQuizButtonToChange");

var questionTimerInterval;

function resetQuiz() {

    containerForEverything.classList.add('hide');
    startQuizContainer.style.display = "flex";
    nextQuestionContainer.classList.add('hide');
    startQuizButtonToChange.innerText = "Restart?";
    currentQuestionIndex = 0;
    resultContainer.classList.remove('hide');
    resultText.innerText = "Correct answers: " + correctAnswerTotal + `\n` + "Wrong answers: " + wrongAnswerTotal + `\n` + "Total answered questions:" + (correctAnswerTotal + wrongAnswerTotal);
    

    if (correctAnswerTotal >= 7)
       {resultMessage.innerText = "Good job!"}
    
    else if (correctAnswerTotal <= 6)
       {resultMessage.innerText = "Study more idjit!"}

    correctAnswerTotal = 0;
    wrongAnswerTotal = 0;
}

function startQuiz() {
    containerForEverything.classList.remove('hide');
    startQuizContainer.style.display = "none";
    shuffleArray(allQuestions);
    displayQuestion(currentQuestionIndex);
}


function displayQuestion(index){

    document.getElementById('count').innerHTML=configuredCount;
    
    if(currentQuestionIndex == allQuestions.length)
        resetQuiz();
    else{
        questionInTheQuiz.innerText = allQuestions[index].question;

        displayAnswers(index);
        currentQuestionIndex++;

        timer();
    }

}

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



function nextQuestion() {
    displayQuestion(currentQuestionIndex);
    nextQuestionContainer.style.display = "none";
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

var count = configuredCount;

function clickedAnswer(id) {
    var button = document.getElementById(id);

    clearInterval(questionTimerInterval);
    document.getElementById('count').innerHTML=count;
    count = configuredCount;    

    if(button.getAttribute("correct") == "true") {
        button.classList.remove("wrong");
        button.classList.add("right");
        correctAnswerTotal++;
    }        
    else {
        button.classList.remove("right");
        button.classList.add("wrong");
        wrongAnswerTotal++;
    }
        
    var otherButtons = getSiblings(button);

    otherButtons.forEach((buttonToDisable) => {
        if(buttonToDisable.getAttribute("correct") == "true") {
            buttonToDisable.classList.remove("wrong");
            buttonToDisable.classList.add("rightforcorrectdisabled");
        }       
        buttonToDisable.disabled = true;         
    });

    nextQuestionContainer.style.display = "flex";

}

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


            answerButton0.disabled = true;
            answerButton1.disabled = true;
            answerButton2.disabled = true;
            answerButton3.disabled = true;

            count = configuredCount;
        }      
        
    },
    1000);
}








*/

