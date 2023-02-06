let currentProgress = 0;
let currentQuestion = 0;
let points = 0;
let currentQuestionPack;

function showQuestion(){
    let card = document.getElementById('mainCard');
    card.innerHTML="";
    generateQuestionHTML(card);
    progress();
}

function answerSelection(id){
    checkSelected(id);
    cancelSelection();
    changeButton();
}

function checkSelected(id){
    let selected = document.getElementById(id);
    let rightAnswer = "answer_" + currentQuestionPack[currentQuestion]['correct_answer']

    if (id == rightAnswer){
        points++;
        selected.style.backgroundColor = "rgb(197, 244, 163)";
        animationRight(selected);
    }else{
        selected.style.backgroundColor = "rgb(243, 167, 166)";
        animationWrong(selected);
        document.getElementById(rightAnswer).style.background = "rgb(197, 244, 163)"
    }
}

function cancelSelection(){
    for (let i = 1; i <= 4; i++) {
        document.getElementById(`answer_${i}`).onclick = null;
    }
}

function animationRight(selected){
    selected.style.transition = "transform 300ms ease-in-out";
    selected.style.transform = "scale(1.1)";
    setTimeout(() => {
        selected.style.transform = "scale(1)";
    }, 300);
}

function animationWrong(selected){
    selected.style.transition = "transform 0.3s ease-in-out";
    selected.style.transformOrigin = "center bottom";
  
    rotateAnimation(selected);
    setTimeout(() => {
        selected.style.transform = "none";
    }, 500);
}

function rotateAnimation(selected){
    for (let i = 0; i < 2; i++) {
        setTimeout(() => {
            selected.style.transform = "rotate(-10deg)";
        }, i * 250);
        setTimeout(() => {
            selected.style.transform = "rotate(10deg)";
        }, i * 250 + 125);
    }
}

function progress(){
    let progressBar = document.getElementById("progress-bar");
    currentProgress += 100/currentQuestionPack.length;

    if (currentProgress > 100) {
        currentProgress = 100;
    }
    progressBar.style.width = `${currentProgress}%`;
}

function changeButton(){
    let button = document.getElementById('progress-button');
    button.classList.remove('btn-secondary');
    button.classList.add('btn-success')
    button.onclick = nextQuestion;
}

function nextQuestion(){
    currentQuestion++;
    if (currentQuestion == currentQuestionPack.length){
        generateFinalScreen();
    }else{
        showQuestion();
    }
}

function reset(){
    currentProgress = 0;
    points = 0;
    currentQuestion = 0;
}

function checkQuestionPack(name){
    if(name == 'HTML'){
        currentQuestionPack = htmlQuestions;
    }else if (name == 'CSS'){
        currentQuestionPack = cssQuestions;
    }else{
        currentQuestionPack = jsQuestions;
    }
}

function checkQuizName(pack){
    let packName;
    if(pack == htmlQuestions){
        packName = 'HTML';
    }else if (pack == cssQuestions){
        packName = 'CSS';
    }else{
        packName = 'JS';
    }
    console.log(packName);
    return packName;
}