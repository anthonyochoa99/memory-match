const wordBank = ['Lion', 'Lion',
                  'Tiger', 'Tiger',
                  'Elephant', 'Elephant',
                  'Giraffe', 'Giraffe',
                  'Zebra', 'Zebra', 
                  'Panda', 'Panda',
                  'Monkey', 'Monkey', 
                  'Bear', 'Bear', 
                  'Wolf', 'Wolf',
                  'Fox', 'Fox', 
                  'Deer', 'Deer',
                  'Rabbit', 'Rabbit', 
                  'Otter', 'Otter',
                  'Hippopotamus', 'Hippopotamus', 
                  'Dog', 'Dog',
                  'Cat', 'Cat',
                  'Hamster', 'Hamster',
                  'Sloth', 'Sloth',
                  'Dinosaur', 'Dinosaur',
                  'Raccoon', 'Raccoon',
                  'Octopus', 'Octopus',
                  'Stingray', 'Stingray',
                  'Jellyfish', 'Jellyfish',
                  'Shark', 'Shark',
                  'Dolphin', 'Dolphin'
                ];

let usedWords = [];
let numOfSelectedCards = 0;
let firstSelectedCard = '';
let secondSelectedCard = '';
let firstSelectedElement = null;
let secondSelectedElement = null;

const startBtn = document.querySelector('.start-btn');
startBtn.addEventListener('click', disableStartBtn);
startBtn.addEventListener('click', generateCards);

function getCardValues(event) {
    if (numOfSelectedCards >= 2) {
        return;
    }

    if (firstSelectedCard === '') {
        firstSelectedElement= event.currentTarget;
        firstSelectedElement.classList.toggle('flipped');
        firstSelectedCard = event.currentTarget.id;
        numOfSelectedCards++;
    } else {
        secondSelectedElement = event.currentTarget;
        secondSelectedElement.classList.toggle('flipped');
        secondSelectedCard = event.currentTarget.id;
        numOfSelectedCards++;
    }

    if (numOfSelectedCards === 2) {
        setTimeout(checkMatch, 1500);
    }
}

function checkMatch() {
    if (firstSelectedCard === secondSelectedCard) {
        numOfSelectedCards = 0;
        firstSelectedCard = '';
        secondSelectedCard = '';
        firstSelectedElement.style.visibility = 'hidden';
        secondSelectedElement.style.visibility = 'hidden';
    } else {
        numOfSelectedCards = 0;
        firstSelectedCard = '';
        secondSelectedCard = '';
        firstSelectedElement.classList.toggle('flipped');
        secondSelectedElement.classList.toggle('flipped');
    }
}

function disableStartBtn() {
    startBtn.disabled = true;
}

function generateCards() {
    let gameBoard = document.querySelector('.game-board');

    for (let i = 0; i < 50; i++) {
        let randomWord = wordBank.splice([Math.floor(Math.random() * wordBank.length)], 1);
        usedWords.push(randomWord.join());

        let flipContainer = document.createElement('div');
        flipContainer.classList.add('flip-container');
        flipContainer.id = `${randomWord}`;
        flipContainer.addEventListener('click', getCardValues);
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
        card.innerHTML = randomWord;
        flipCardBack.appendChild(card);
    }
}