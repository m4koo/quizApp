let htmlQuestions = [
    {
        "question": "Für was steht die Abkürzung 'HTML'?",
        "answer_1": "How To Make Lasagna",
        "answer_2": "Hyper Text Markup Language",
        "answer_3": "Hey Too Much Layout",
        "answer_4": "Hieroglyphics, To Machine Legible",
        "correct_answer": 3,
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

function showQuestion(){
    let card = document.getElementById('mainCard');
    card.innerHTML="";
}

