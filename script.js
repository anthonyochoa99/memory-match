const wordBank = ['Lion', 'Lion',
                  'Tiger', 'Tiger',
                  'Elephant', 'Elephant',
                  'Giraffe', 'Giraffe',
                  'Zebra', 'Zebra', 
                  'Panda', 'Panda',
                  'Monkey', 'Monkey', 
                  'Kangaroo', 'Kangaroo',
                  'Bear', 'Bear', 
                  'Wolf', 'Wolf',
                  'Fox', 'Fox', 
                  'Deer', 'Deer',
                  'Rabbit', 'Rabbit', 
                  'Otter', 'Otter',
                  'Hippopotamus', 'Hippopotamus', 
                  'Rhinoceros', 'Rhinoceros',
                  'Dog', 'Dog',
                  'Cat', 'Cat',
                  'Hamster', 'Hamster',
                  'Sloth', 'Sloth',
                  'Dinosaur', 'Dinosaur',
                  'Lizard', 'Lizard',
                  'Camel', 'Camel',
                  'Koala', 'Koala',
                  'Raccoon', 'Raccoon'
                ];

const startBtn = document.querySelector('.start-btn');
startBtn.addEventListener('click', disableStartBtn);
startBtn.addEventListener('click', generateCards);

function disableStartBtn() {
    startBtn.disabled = true;
}

function generateCards() {
    let gameBoard = document.querySelector('.game-board');

    for (let i = 1; i < 51; i++) {
        let card = document.createElement('div');
        card.classList.add(`card-${i}`);
        card.innerHTML = 'test';
        gameBoard.appendChild(card);
    }
}