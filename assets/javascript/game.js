window.addEventListener('DOMContentLoaded', function (event) {

            const genres = ['rock', 'pop', 'jazz', 'indie',
                'hiphop', 'country', 'dance', 'folk', 'soul',
                'metal', 'reggae', 'punk', 'funk'
            ];
            let mysteryWord = genres[Math.floor(Math.random() * genres.length)].split('');
            let remainingGuess = 10;
            let wordDiv = document.getElementById('word');
            
            console.log(mysteryWord);

            document.onkeyup = function () {

                //from https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_event_key_keycode:

                let userGuess = String.fromCharCode(event.keyCode).toLowerCase();

                console.log(userGuess);

                //function displayWord(array, event) {

                let i = 0

                for (i; i < mysteryWord.length; i++) {
                    if (mysteryWord[i] === userGuess) {
                        const letter = document.createElement('p');
                        letter.textContent = mysteryWord[i];
                        wordDiv.appendChild(p);
                        console.log(mysteryWord[i]);
                        alert("Good!");
                    }
                }
                if (mysteryWord[i] != userGuess) {
                    remainingGuess = remainingGuess - 1;
                }
                    // }

                    let guessHTML = "<p>remaining guesses: " + remainingGuess + "</p>";

                    document.querySelector('#guessDiv').innerHTML = guessHTML;
                    //document.querySelector('#word').innerHTML = letter;

                    console.log('DOM fully loaded and parsed');

                }
            });