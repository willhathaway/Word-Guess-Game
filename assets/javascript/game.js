
//defining variables

const genres = ['rock','pop','jazz','indie','hiphop','country','dance','folk','soul','metal','reggae','punk','funk'];

let mysteryWord = genres[Math.floor(Math.random() * genres.length)];

let remainingGuesses = 15;

let mysteryArray = mysteryWord.split("");

let wordDiv = document.getElementById('word');

console.log(mysteryWord);
console.log(remainingGuesses);
console.log(mysteryArray);

function displayWord() {

    for (let i = 0; i < mysteryArray.length; i++){

        const p = document.createElement('p');
        p.textContent = mysteryArray[i];
        wordDiv.appendChild(p);

    }
}

displayWord(mysteryArray);