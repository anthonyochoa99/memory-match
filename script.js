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
                  'Raccoon', 'Raccoon',
                  'Octopus', 'Octopus',
                  'Stingray', 'Stingray',
                  'Jellyfish', 'Jellyfish',
                  'Shark', 'Shark',
                  'Dolphin', 'Dolphin'
                ];
let usedWords = [];

const startBtn = document.querySelector('.start-btn');
startBtn.addEventListener('click', disableStartBtn);
startBtn.addEventListener('click', generateCards);

function disableStartBtn() {
    startBtn.disabled = true;
}

function generateCards() {
    let gameBoard = document.querySelector('.game-board');

    for (let i = 1; i < 56; i++) {
        let randomWord = wordBank.splice([Math.floor(Math.random() * wordBank.length)], 1);
        usedWords.push(randomWord.join());

        let flipContainer = document.createElement('div');
        flipContainer.classList.add('flip-container');
        gameBoard.appendChild(flipContainer);

        let flipCardInner = document.createElement('div');
        flipCardInner.classList.add('flip-card-inner');
        flipContainer.appendChild(flipCardInner);

        let flipCardFront = document.createElement('div');
        flipCardFront.classList.add('flip-card-front');
        flipCardInner.appendChild(flipCardFront);

        let flipCardBack = document.createElement('div');
        flipCardBack.classList.add('flip-card-back');
        flipCardInner.appendChild(flipCardBack);

        let card = document.createElement('div');
        card.classList.add(`card-${i}`);
        card.id = `${randomWord}`;
        card.innerHTML = randomWord;
        flipCardBack.appendChild(card);
    }
}