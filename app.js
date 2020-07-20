//start code
//20 Jul 2020
//Al Nahian | https://alnahian.xyz

const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})
// //function to disappear welcome message
document.querySelector(".start-btn").addEventListener("click", disappear);

function disappear() {
    document.querySelector(".welcome-message").style.display = "none";
}

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [{
        question: "How many countries in the world?",
        answers: [{
                text: '313',
                correct: false
            },
            {
                text: '212',
                correct: false
            },
            {
                text: '256',
                correct: false
            },
            {
                text: '195',
                correct: true
            }
        ]
    },
    {
        question: 'When is National Mother Language Day?',
        answers: [{
                text: '5 January',
                correct: false
            },
            {
                text: '16 December',
                correct: false
            },
            {
                text: '21 February',
                correct: true
            },
            {
                text: '6 March',
                correct: false
            }
        ]
    },
    {
        question: 'Where "The Holy Kaaba" is located?',
        answers: [{
                text: 'Saudi Arabia',
                correct: true
            },
            {
                text: 'Morocco',
                correct: false
            },
            {
                text: 'Italy',
                correct: false
            },
            {
                text: 'German',
                correct: false
            }
        ]
    },
    {
        question: 'What is the sweetest language in the world?',
        answers: [{
                text: 'French',
                correct: false
            },
            {
                text: 'English',
                correct: false
            },
            {
                text: 'Bengali',
                correct: true
            },
            {
                text: 'Polish',
                correct: false
            }
        ]
    },
    {
        question: 'Do you love Web Development?',
        answers: [{
                text: 'Yes, Of course',
                correct: true
            },
            {
                text: 'Neutral',
                correct: true
            },
            {
                text: 'No',
                correct: true
            },
            {
                text: "I'm Not Sure",
                correct: true
            }
        ]
    }
]

//special thanks to Dev Ed