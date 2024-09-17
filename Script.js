const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Jupiter", "Mars", "Saturn"],
        answer: "Jupiter"
    }
];

const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const resultContainer = document.getElementById('result');

function loadQuiz() {
    quizContainer.innerHTML = '';

    quizData.forEach((data, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = <h2>${index + 1}. ${data.question}</h2>;
        
        const optionsDiv = document.createElement('div');
        optionsDiv.classList.add('options');
        
        data.options.forEach(option => {
            optionsDiv.innerHTML += `
                <label>
                    <input type="radio" name="q${index}" value="${option}">
                    ${option}
                </label>
            `;
        });
        
        questionDiv.appendChild(optionsDiv);
        quizContainer.appendChild(questionDiv);
    });
}

function calculateScore() {
    let score = 0;
    quizData.forEach((data, index) => {
        const selectedOption = document.querySelector(input[name="q${index}"]:checked);
        if (selectedOption && selectedOption.value === data.answer) {
            score++;
        }
    });
    resultContainer.textContent = You scored ${score} out of ${quizData.length};
}

submitButton.addEventListener('click', calculateScore);

loadQuiz();