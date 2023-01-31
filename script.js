let htmlQuestions = [
    {
        "question": "Für was steht die Abkürzung 'HTML'?",
        "answer_1": "How To Make Lasagna",
        "answer_2": "Hyper Text Markup Language",
        "answer_3": "Hey Too Much Layout",
        "answer_4": "Hieroglyphics, To Machine Legible",
        "correct_answer": 2,
    },
    {
        "question": "Wer ist für die Web standards zuständig?",
        "answer_1": "Mozilla",
        "answer_2": "The World Wide Web Consortium (W3C)",
        "answer_3": "Google",
        "answer_4": "Microsoft",
        "correct_answer": 2,
    },
    {
        "question": "Mit welchem HTML Element erstellt man eine numerierte Liste?",
        "answer_1": '<nl>',
        "answer_2": '<ul>',
        "answer_3": '<list>',
        "answer_4": '<ol>',
        "correct_answer": 4,
    },
    {
        "question": "Wie öffnet man einen Link in einem neuen Tab?",
        "answer_1": "<a href='url' target='_blank'>",
        "answer_2": "<a href='url' target='new'>",
        "answer_3": "<a href='url' target='new_tab'>",
        "answer_4": "<a href='url' new>",
        "correct_answer": 1,
    },
    {
        "question": "Wie heißt der Erfinder von HTML?",
        "answer_1": "Tim Berners-Lee",
        "answer_2": "Jeff Bezoz",
        "answer_3": "Brendan Eich",
        "answer_4": "Bill Gates",
        "correct_answer": 1,
    },
];

let currentQuestion = 0;
let currentQuestionPack;

function showQuestion(){
    let card = document.getElementById('mainCard');
    card.innerHTML="";
    generateQuestionHTML(card);
    progress();
}

let points = 0;

function answerSelection(id){
    let selected = document.getElementById(id);
    let rightAnswer = "answer_" + currentQuestionPack[currentQuestion]['correct_answer']
    console.log(rightAnswer);
    // let answer = id.slice(-1);
    if (id == rightAnswer){
        // console.log("yes");
        points++;
        selected.style.backgroundColor = "rgb(197, 244, 163)";
        animRight(selected);
    }else{
        // console.log("no");
        selected.style.backgroundColor = "rgb(243, 167, 166)";
        animWrong(selected);
        document.getElementById(rightAnswer).style.background = "rgb(197, 244, 163)"
    }
    cancelSelection();
    changeButton();
}

function cancelSelection(){
    for (let i = 1; i <= 4; i++) {
        document.getElementById(`answer_${i}`).onclick = null;
    }
}

function animRight(selected){
    selected.style.transition = "transform 300ms ease-in-out";
    selected.style.transform = "scale(1.1)";
    setTimeout(() => {
        selected.style.transform = "scale(1)";
    }, 300);
}

function animWrong(selected){
    selected.style.transition = "transform 0.3s ease-in-out";
    selected.style.transformOrigin = "center bottom";
  
    for (let i = 0; i < 2; i++) {
        setTimeout(() => {
            selected.style.transform = "rotate(-10deg)";
        }, i * 250);
        setTimeout(() => {
            selected.style.transform = "rotate(10deg)";
        }, i * 250 + 125);
    }
  
    setTimeout(() => {
        selected.style.transform = "none";
    }, 500);
}

function generateQuestionHTML(id){
    id.innerHTML =`
    <h2 class="mb-5 fw-bold">${escapeHtml(currentQuestionPack[currentQuestion]['question'])}</h2>
    <div class="d-flex gap-4 answer-choice" id="answer_1" onclick="answerSelection('answer_1')">
        <span>A</span>
        <p>${escapeHtml(currentQuestionPack[currentQuestion]['answer_1'])}</p>
     </div>
    <div class="d-flex gap-4 answer-choice" id="answer_2" onclick="answerSelection('answer_2')">
        <span>B</span>
        <p>${escapeHtml(currentQuestionPack[currentQuestion]['answer_2'])}</p>
    </div>
    <div class="d-flex gap-4 answer-choice" id="answer_3" onclick="answerSelection('answer_3')">
        <span>C</span>
        <p>${escapeHtml(currentQuestionPack[currentQuestion]['answer_3'])}</p>
    </div>
    <div class="d-flex gap-4 answer-choice" id="answer_4" onclick="answerSelection('answer_4')">
        <span>D</span>
        <p>${escapeHtml(currentQuestionPack[currentQuestion]['answer_4'])}</p>
    </div>
    <div id="progress" class="d-flex justify-content-evenly align-items-center">
        <span class="text-secondary fs-5">${currentQuestion + 1} von ${currentQuestionPack.length}</span>
        <div id="progress-container">
            <div id="progress-bar"></div>
        </div>
        <button id="progress-button" class="btn btn-secondary">Next</button>
    </div>
    `
}


let currentProgress = 0;

function progress(){
    let progressBar = document.getElementById("progress-bar");
    currentProgress += 20;

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

function escapeHtml(text) {
    let map = {
      '<': '&lt;',
      '>': '&gt;'
    };
  
    return text.replace(/[<>]/g, function(m) { return map[m]; });
}

function generateFinalScreen(){
    let card = document.getElementById('mainCard');
    card.innerHTML = `
        <div class="d-flex flex-column align-items-center gap-3 mb-3" id="complete">
            <img src="img/brain result.png">
            <span class="fw-bold">COMPLETE HTML QUIZ</span>
        </div>
        <div class="d-flex justify-content-between gap-3 fw-bold mb-3">
            <span class="text-orange">YOUR SCORE</span>
            <p>${points}/${currentQuestionPack.length}</p>
        </div>
        <button id="replay" class="btn btn-primary">REPLAY</button>
    `;
}


let cssQuestions = [
    {
        "question": "Für was steht die Abkürzung 'CSS'?",
        "answer_1": "Counter-Strike: Source",
        "answer_2": "Cool Styling Stuff",
        "answer_3": "Cascading Style Sheets",
        "answer_4": "",
        "correct_answer": 2,
    },
    {
        "question": "Wer ist für die Web standards zuständig?",
        "answer_1": "Mozilla",
        "answer_2": "The World Wide Web Consortium (W3C)",
        "answer_3": "Google",
        "answer_4": "Microsoft",
        "correct_answer": 2,
    },
    {
        "question": "Mit welchem HTML Element erstellt man eine numerierte Liste?",
        "answer_1": '<nl>',
        "answer_2": '<ul>',
        "answer_3": '<list>',
        "answer_4": '<ol>',
        "correct_answer": 4,
    },
    {
        "question": "Wie öffnet man einen Link in einem neuen Tab?",
        "answer_1": "<a href='url' target='_blank'>",
        "answer_2": "<a href='url' target='new'>",
        "answer_3": "<a href='url' target='new_tab'>",
        "answer_4": "<a href='url' new>",
        "correct_answer": 1,
    },
    {
        "question": "Wie heißt der Erfinder von HTML?",
        "answer_1": "Tim Berners-Lee",
        "answer_2": "Jeff Bezoz",
        "answer_3": "Brendan Eich",
        "answer_4": "Bill Gates",
        "correct_answer": 1,
    },
];

let jsQuestions = [
    {
        "question": "Was is Javascript?",
        "answer_1": "Counter-Strike: Source",
        "answer_2": "Cool Styling Stuff",
        "answer_3": "Cascading Style Sheets",
        "answer_4": "",
        "correct_answer": 2,
    },
    {
        "question": "Wer ist für die Web standards zuständig?",
        "answer_1": "Mozilla",
        "answer_2": "The World Wide Web Consortium (W3C)",
        "answer_3": "Google",
        "answer_4": "Microsoft",
        "correct_answer": 2,
    },
    {
        "question": "Mit welchem HTML Element erstellt man eine numerierte Liste?",
        "answer_1": '<nl>',
        "answer_2": '<ul>',
        "answer_3": '<list>',
        "answer_4": '<ol>',
        "correct_answer": 4,
    },
    {
        "question": "Wie öffnet man einen Link in einem neuen Tab?",
        "answer_1": "<a href='url' target='_blank'>",
        "answer_2": "<a href='url' target='new'>",
        "answer_3": "<a href='url' target='new_tab'>",
        "answer_4": "<a href='url' new>",
        "correct_answer": 1,
    },
    {
        "question": "Wie heißt der Erfinder von HTML?",
        "answer_1": "Tim Berners-Lee",
        "answer_2": "Jeff Bezoz",
        "answer_3": "Brendan Eich",
        "answer_4": "Bill Gates",
        "correct_answer": 1,
    },
];

function generateStartPage(quizName){
    let card = document.getElementById('mainCard');
    card.innerHTML = `
        <h1 class="mt-5">Welcome to the Awesome ${quizName} Quiz</h1>
        <p class="card-text">Ready for the Challenge?</p>
        
        <button 
            class="btn text-white position-absolute d-flex justify-content-center align-items-center" 
            id="start-btn" onclick="showQuestion()">
            Start Now
        </button>
    `
    checkQuestionPack(quizName)
    reset();
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