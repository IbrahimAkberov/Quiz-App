class Question {
    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }

    isCorrectAnswer(choice) {
        return this.answer === choice;
    }
}

let questionsAll = [
    new Question("1-Which is the javascript package management application?", { a: "Node.js", b: "Typescript", c: "Npm" }, "a"),
    new Question("2-Which is the most popular language in the world right now?", { a: "Java Script", b: "Python", c: "Java" }, "a"),
    new Question("3-Which one is used for clean code?", { a: "Angular", b: "Typescript", c: "React" }, "b"),
    new Question("4-What language does the Macos operating system use?", { a: "Java", b: "C++", c: "Swift" }, "c"),
    new Question("5-When was the java language created?", { a: "1997", b: "1995", c: "1993" }, "b")
];

let currentQuestionIndex = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;
let username = '';

document.getElementById('start-btn').addEventListener('click', () => {
    username = document.getElementById('username').value.trim();
    if (username) {
        document.getElementById('start-screen').classList.add('hidden');
        document.getElementById('quiz-screen').classList.remove('hidden');
        showQuestion();
    } else {
        alert('Please enter your name');
    }
});


function showQuestion() {
    const question = questionsAll[currentQuestionIndex];
    document.getElementById('question-text').textContent = question.text;
    document.getElementById('option-a').textContent = question.choices.a;
    document.getElementById('option-b').textContent = question.choices.b;
    document.getElementById('option-c').textContent = question.choices.c;
    document.getElementById('question-number').textContent = `Question ${currentQuestionIndex + 1} / ${questionsAll.length}`;
}

document.querySelectorAll('.option-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const selectedOption = e.target.id.split('-')[1];
        if (questionsAll[currentQuestionIndex].isCorrectAnswer(selectedOption)) {
           alert ( "Correct ",correctAnswers++);
        } else {
           alert ('Incorrect', incorrectAnswers++);
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < questionsAll.length) {
            showQuestion();
        } else {
            showResults();
        }
    });
});

function showResults() {
    document.getElementById('quiz-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');
    document.getElementById('result-text').textContent = `${username}, you got ${correctAnswers} correct answers and ${incorrectAnswers} incorrect answers.`;
}

document.getElementById('restart-btn').addEventListener('click', () => {
    currentQuestionIndex = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;
    document.getElementById('result-screen').classList.add('hidden');
    document.getElementById('start-screen').classList.remove('hidden');
});

