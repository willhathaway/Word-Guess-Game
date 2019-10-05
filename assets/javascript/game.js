window.addEventListener('DOMContentLoaded', function () {

    const genres = ['rock', 'pop', 'jazz', 'indie',
        'hiphop', 'country', 'dance', 'folk', 'soul',
        'metal', 'reggae', 'punk', 'funk'
    ];

    let mysteryWord = genres[Math.floor(Math.random() * genres.length)].split('');
    let remainingGuess = 10;
    let numberOfSuccessfulGuesses = 0;

    console.log(mysteryWord);

    document.onkeyup = function () {

        //from https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_event_key_keycode:

        let userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    
        console.log(userGuess);

        if ((mysteryWord.includes(userGuess)) && (remainingGuess > 0)) {

            for (let i = 0; i < mysteryWord.length; i++) {

                console.log("for loop working");

                

            }
            //https://www.homeandlearn.co.uk/javascript/create_html_elements.html
            
            let letter = document.createElement('p');
            let text = document.createTextNode(userGuess);
            letter.appendChild(text);
            let position = document.getElementById("word");
            document.body.insertBefore(text, position);
            numberOfSuccessfulGuesses = numberOfSuccessfulGuesses + 1;

        } else {
            
            let wrongGuess = document.createElement('p');
            let text = document.createTextNode(userGuess);
            wrongGuess.appendChild(text);
            let position = document.getElementById("wrong");
            document.body.insertBefore(text, position);
            remainingGuess = remainingGuess - 1;
        }

        console.log(mysteryWord.length);

        if (numberOfSuccessfulGuesses === mysteryWord.length) {
            let win = document.createElement('p');
            let text = document.createTextNode("win");
            win.appendChild(text);
            let position = document.getElementById("result");
            document.body.insertBefore(text, position);
        }

        if (remainingGuess < 1){
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