window.addEventListener('DOMContentLoaded', function(event) {

//defining the mystery words:

const genres = ['rock','pop','jazz','indie','hiphop','country','dance','folk','soul','metal','reggae','punk','funk'];

//defining the randomly chosen word:

let mysteryWord = genres[Math.floor(Math.random() * genres.length)];

//breaking the mystery word into an array of its individual letters:

let mysteryArray = mysteryWord.split('');

//defining a variable for a div with id='word' in the body of my HTML:

let wordDiv = document.getElementById('word');

//logging to console to confirm that the above variables work:

console.log(mysteryWord);
console.log(mysteryArray);

//function to loop through the array of the letters of the mystery word 
//and display them in HTML as <p> paragraphs:

document.onkeyup = function () {
    
function displayWord(mysteryArray, event) {

    for (let i = 0; i < mysteryArray.length; i++){

        let userGuess = String.fromCharCode(event.keyCode).toLowerCase();

        if (mysteryArray[i] = userGuess) {
        let p = document.createElement('p');
        p.textContent = mysteryArray[i];
        console.log(mysteryArray[i])
        wordDiv.appendChild(p);

        }

    }
}

displayWord(mysteryArray);

}

    console.log('DOM fully loaded and parsed');
});