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