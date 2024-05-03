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

const questions = [

  {

    question: 'Who wrote Hamilton?',

    answers: [

      { text: 'Lin-Manuel Miranda', correct: true },

      { text: 'Alan Menken', correct: false },

      { text: 'Alex Lacamore', correct: false },
    ]

  },

  {

    question: 'How many songs are there?',

    answers: [

      { text: '47', correct: true },

      { text: '46', correct: false },

      { text: '50', correct: false },

      { text: '38', correct: false }

    ]

  },

  {

    question: 'Who started singinig its quiet uptown',

    answers: [

      { text: 'Angelica', correct: true },

      { text: 'Eliza', correct: false },

      { text: 'Hamilton', correct: false },

      { text: 'Burr', correct: false }

    ]

  },

  {

    question: 'What was Elizas proudest achivement?',
    answers: [

      { text: 'Being a mother', correct: false },

      { text: 'Establishing the first private orphanage', correct: true },

      { text : 'Raising funds for the Washington Monument', correct: false},

      { text : 'Being able to have more time', correct: false }

    ]

  },

  {
  question: 'Ham4Ham is a lottery system in which cast members sell front-row tickets for what amount of money?',
  answers: [


    { text: '$10', correct: true },

    { text : '$25', correct: false},

    { text : '$5', correct: false },

    { text : '$50', correct: false },

  ]

  },

]
