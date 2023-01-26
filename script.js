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
        "answer_1": "<nl>",
        "answer_2": "<ul>",
        "answer_3": "<list>",
        "answer_4": "<ol>",
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

function showQuestion(){
    let card = document.getElementById('mainCard');
    card.innerHTML="";
    generateQuestionHTML(card);
}

function answerSelection(id){
    let selected = document.getElementById(id);
    let rightAnswer = "answer_" + htmlQuestions[currentQuestion]['correct_answer']
    console.log(rightAnswer);
    // let answer = id.slice(-1);
    if (id == rightAnswer){
        console.log("yes");
        selected.style.backgroundColor = "rgb(197, 244, 163)";
        animRight(selected);
    }else{
        console.log("no");
        selected.style.backgroundColor = "rgb(243, 167, 166)";
        animWrong(selected);
        document.getElementById(rightAnswer).style.background = "rgb(197, 244, 163)"
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
    <h2 class="my-5 fw-bold">${htmlQuestions[currentQuestion]['question']}</h2>
    <div class="d-flex gap-4 answer-choice" id="answer_1" onclick="answerSelection('answer_1')">
        <span>A</span>
        <p>${htmlQuestions[currentQuestion]['answer_1']}</p>
     </div>
    <div class="d-flex gap-4 answer-choice" id="answer_2" onclick="answerSelection('answer_2')">
        <span>B</span>
        <p>${htmlQuestions[currentQuestion]['answer_2']}</p>
    </div>
    <div class="d-flex gap-4 answer-choice" id="answer_3" onclick="answerSelection('answer_3')">
        <span>C</span>
        <p>${htmlQuestions[currentQuestion]['answer_3']}</p>
    </div>
    <div class="d-flex gap-4 answer-choice" id="answer_4" onclick="answerSelection('answer_4')">
        <span>D</span>
        <p>${htmlQuestions[currentQuestion]['answer_4']}</p>
    </div>
    `
}

