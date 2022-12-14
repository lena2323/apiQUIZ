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
// Probably mandatory to remove these global vars
let startQuizContainer = document.getElementById("startQuizContainer");
let containerForEverything =  document.getElementById("containerForEverything"); 
let questionInTheQuiz = document.getElementById("questionInTheQuiz");
let startQuizButton = document.getElementById("startQuizButton");
let nextQuestionContainer = document.getElementById("nextQuestionContainer");
let nextQuestionButton = document.getElementById("nextQuestionButton");
let easyMediumHardContainer = document.getElementById("easyMediumHardContainer");
document.getElementById('count').innerHTML=configuredCount;
let correctAnswerTotal = 0;
let wrongAnswerTotal = 0;
let resultContainer = document.getElementById("resultContainer");
let resultText = document.getElementById("resultText");
let resultMessage = document.getElementById("resultMessage");
let currentQuestionIndex = 0;
let data = {};
var count = configuredCount;
var questionTimerInterval;

function chooseDifficulty(difficulty){
    return `https://the-trivia-api.com/api/questions?categories=arts_and_literature&limit=10&difficulty=${difficulty}`; 
}

async function startQuiz(difficulty){
    let url = chooseDifficulty(difficulty);
    let response = await fetch (url);
    data = await response.json();
    containerForEverything.classList.remove('hide');
    startQuizContainer.style.display = "none"; 
    displayQuestion(data[currentQuestionIndex]);
}

function nextQuestion(){
    if(currentQuestionIndex == data.length)
        resetQuiz();
    else {
        displayQuestion(data[currentQuestionIndex]);
    }
    nextQuestionContainer.style.display = "none";
}
    
function displayQuestion(questionToDisplay){
    document.getElementById('count').innerHTML=configuredCount;
    questionInTheQuiz.innerHTML =  (questionToDisplay.question);
    timer();
    displayAnswers(questionToDisplay);
    currentQuestionIndex++;
}

function displayAnswers(questionToDisplay) {
    resetButtons();
    let allButtonsContainer = document.getElementById("allButtonsContainer")
     let allButtonsFromAnswers = allButtonsContainer.children;
     let idxArray = [0, 1, 2, 3];
     for (let i = idxArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [idxArray[i], idxArray[j]] = [idxArray[j], idxArray[i]];
     }
     allButtonsFromAnswers[idxArray[0]].innerHTML = questionToDisplay.correctAnswer;
     allButtonsFromAnswers[idxArray[0]].setAttribute("correct","true");
     allButtonsFromAnswers[idxArray[1]].innerHTML = questionToDisplay.incorrectAnswers[0];
     allButtonsFromAnswers[idxArray[2]].innerHTML = questionToDisplay.incorrectAnswers[1];
     allButtonsFromAnswers[idxArray[3]].innerHTML = questionToDisplay.incorrectAnswers[2];
    }

function resetButtons(){
    let allButtonsContainer = document.getElementById("allButtonsContainer")
    let allButtonsFromAnswers = allButtonsContainer.children;
    for (i = 0; i < allButtonsFromAnswers.length; i++) {
        allButtonsFromAnswers[i].classList.remove('right');
        allButtonsFromAnswers[i].classList.remove('wrong');
        allButtonsFromAnswers[i].classList.remove('rightforcorrectdisabled');
        allButtonsFromAnswers[i].disabled = false;
        allButtonsFromAnswers[i].removeAttribute("correct","true");
    }
}

function resetQuiz(){
    containerForEverything.classList.add('hide');
    startQuizContainer.style.display = "flex";
    easyMediumHardContainer.style.display = "none";
    resultContainer.classList.remove('hide');
    startQuizButton.style.display = "block";
    resultText.innerText = "Correct answers: " + correctAnswerTotal + `\n` + "Wrong answers: " + wrongAnswerTotal + `\n` + "Total answered questions:" + (correctAnswerTotal + wrongAnswerTotal);
    
    if (correctAnswerTotal >= 7)
       {resultMessage.innerText = "Good job!"}
    
    else if (correctAnswerTotal <= 6)
       {resultMessage.innerText = "Study more!"}
    correctAnswerTotal = 0;
    wrongAnswerTotal = 0;
    currentQuestionIndex = 0;
}

function showDifficultyChoices() {
    easyMediumHardContainer.style.display= "flex";
    resultContainer.classList.add('hide');
    startQuizButton.style.display = "none";
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function clickedAnswer(id) {
    var button = document.getElementById(id);
    clearInterval(questionTimerInterval);
    document.getElementById('count').innerHTML=count;
    count = configuredCount;    
    if(button.getAttribute("correct") == "true" ){
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