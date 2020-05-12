
// HTML Elements

const quiz_form = document.querySelector('#quiz-form');
const questions_h2 = document.querySelectorAll('#quiz-form h2');
const questions_label = document.querySelectorAll('#quiz-form label');

// Database

const database = [
    {
        question: "Which actor played Richard III in the 1995 British film drama of the same title?",
        correct: "A",
        choices: [
            "Ian McKellen", "Partrick Stewart", "Elijah Wood"
        ]
    },
    {
        question: "Which English football club play at Roots Hall?",
        correct: "B",
        choices: [
            "Liverpool", "Southend United", "Wolverhampton"
        ]
    },
    {
        question: "Which Marvel superhero, also known as Steve Rogers, made his first appearance in March 1941?",
        correct: "B",
        choices: [
            "Spiderman", "Hulk", "Captain America"
        ]
    },
    {
        question: "Which planet in our solar system is closest to the sun?",
        correct: "A",
        choices: [
            "Mercury",
            "Earth",
            "March"
        ]
    },
    {
        question: "Best programmer ever?",
        correct: "B",
        choices: [
            "Ali",
            "Mustapha",
            "Ahmed"
        ]
    }
];

// Show Questions

let i=0, n=0;
while (i < questions_label.length) {
    questions_h2[n].textContent = database[n]['question'];
    for (let j=0; j<database[n]['choices'].length; j++) {
        questions_label[i + j].textContent = database[n]['choices'][j];
    }
    i += database[n]['choices'].length;
    n++;
}

// Submit Event

quiz_form.addEventListener('submit', e => {
    e.preventDefault();

    // user answers
    let answers = [quiz_form.q1.value, quiz_form.q2.value, quiz_form.q3.value, quiz_form.q4.value, quiz_form.q5.value];

    // check answers
    let score = 0;
    for (let i=0; i<database.length; i++) {
        if (answers[i] === database[i]['correct']) {
            score += 20;
        }
    }

    // show model
    document.querySelector('.model h1').textContent = 'Your Score : ' + score + '%';
    document.querySelector('.overlay').style.display = 'block';
    document.querySelector('.model').style.display = 'block';
    
});

// Hide Model

document.querySelector('.close').addEventListener('click' , () => {
    quiz_form.reset()
    document.querySelector('.model').style.display = 'none';
    document.querySelector('.overlay').style.display = 'none';
});

