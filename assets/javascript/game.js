window.addEventListener('DOMContentLoaded', function () {

    const genres = ['rock', 'pop', 'jazz', 'indie',
        'hiphop', 'country', 'dance', 'folk', 'soul',
        'metal', 'reggae', 'punk', 'funk'
    ];

    let mysteryWord = genres[Math.floor(Math.random() * genres.length)].split('');
    let remainingGuess = 10;
    let numberOfSuccessfulGuesses = 0;
    let guessArray = new Array(mysteryWord.length);
    let index = 0;

    console.log(mysteryWord);

    document.onkeyup = function () {

        //from https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_event_key_keycode:

        let userGuess = String.fromCharCode(event.keyCode).toLowerCase();

        console.log('mysterword len:', mysteryWord.length);

        if ((mysteryWord.includes(userGuess)) && (remainingGuess > 0)) {

            for (let i = 0; i < mysteryWord.length; i++) {

                if (userGuess == mysteryWord[i]) {
                    index = i;
                    guessArray.splice(index, index, userGuess);
                } else {
                    guessArray.splice(i, i, '_');
                }
            };

            //https://www.homeandlearn.co.uk/javascript/create_html_elements.html

            console.log('mysteryword', mysteryWord);
            console.log('userguess', userGuess);
            console.log('guessarray', guessArray);



            let letter = document.createElement('p');

            console.log('letter', letter);
            let text = document.createTextNode(guessArray.join(''));
            console.log('text', text);
            letter.appendChild(text);
            let position = document.getElementById("word");
            console.log('position', position);
            document.body.insertBefore(text, position);
            numberOfSuccessfulGuesses = numberOfSuccessfulGuesses + 1;

            //let letter = document.createElement('p');
            //let text = document.createTextNode(userGuess);
            //letter.appendChild(text);
            //let position = document.getElementById("word");
            //document.body.insertBefore(text, position);
            //numberOfSuccessfulGuesses = numberOfSuccessfulGuesses + 1;

        } else {

            let wrongGuess = document.createElement('p');
            let text = document.createTextNode(userGuess);
            wrongGuess.appendChild(text);
            let position = document.getElementById("wrong");
            document.body.insertBefore(text, position);
            remainingGuess = remainingGuess - 1;
        }

        console.log(mysteryWord.length);

        if (numberOfSuccessfulGuesses >= mysteryWord.length) {
            let win = document.createElement('p');
            let text = document.createTextNode("win");
            win.appendChild(text);
            let position = document.getElementById("result");
            document.body.insertBefore(text, position);
        }

        if (remainingGuess < 1) {
            let lose = document.createElement('p');
            let text = document.createTextNode("lose");
            lose.appendChild(text);
            let position = document.getElementById("result");
            document.body.insertBefore(text, position);
            //location.reload();
        }
        console.log(numberOfSuccessfulGuesses);

        let guessHTML = "<p>remaining guesses: " + remainingGuess + "</p>";

        document.querySelector('#guessDiv').innerHTML = guessHTML;

    }
});