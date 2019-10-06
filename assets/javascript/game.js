window.addEventListener('DOMContentLoaded', function () {

    //define the array containing the available mystery words

    const genres = ['rock', 'pop', 'jazz', 'indie',
        'hiphop', 'country', 'dance', 'folk', 'soul',
        'metal', 'reggae', 'punk', 'funk'
    ];

    //setting global variables

    let mysteryWord = genres[Math.floor(Math.random() * genres.length)].split('');
    let remainingGuess = 10;
    let numberOfSuccessfulGuesses = 0;
    let guessArray = new Array(mysteryWord.length);
    let index = 0;
 

    console.log(mysteryWord);

    //onkey up function:

    document.onkeyup = function () {

        //from https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_event_key_keycode:

        //takes the key pressed by the user and sets it to variable userGuess:

        let userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        console.log(userGuess);

        //if function checking whether the guess was correct:

        if ((mysteryWord.includes(userGuess)) && (remainingGuess > 0)) {

            //a function to compare the guess array (an empty array with userGuess spliced to the correct index) and 
            //the mysteryWord array. returns the guessArray, which is meant to contain successful guesses (if guess == word[i])
            //and placeholders (else):

            function compareArrays(word, guess, guessarray) {
                for (let i = 0; i < word.length; i++) {
                    guessarray.splice(i, i, '_');
                    if (guess == word[i]) {
                        index = i;
                        guessarray.splice(index, index, guess);
                        localStorage.setItem("guessArray", guessarray.toString());
                    }
                }
            };

            //calls the compareArrays function on the mysteryWord, userGuess, and guessArray:

            compareArrays(mysteryWord, userGuess, guessArray);

            //debugging:

            console.log('mystery word', mysteryWord);
            console.log('user guess', userGuess);
            console.log('guess array', guessArray);
            console.log('mystery word length:', mysteryWord.length);

            //taken from https://www.homeandlearn.co.uk/javascript/create_html_elements.html
            //code to create an html element containing the result of the compareArrays function:

            let letter = document.createElement('p');
            console.log('letter', letter);
            let text = document.createTextNode(guessArray.join(''));
            console.log('text', text);
            letter.appendChild(text);
            let position = document.getElementById("word");
            console.log('position', position);
            document.body.insertBefore(text, position);
            numberOfSuccessfulGuesses = numberOfSuccessfulGuesses + 1;

            //if the guess was incorrect:
        } else {

            let wrongGuess = document.createElement('p');
            let text = document.createTextNode(userGuess);
            wrongGuess.appendChild(text);
            let position = document.getElementById("wrong");
            document.body.insertBefore(text, position);
            remainingGuess = remainingGuess - 1;
        }

        //if the user guesses the whole word correctly:

        if ((guessArray === mysteryWord) || (numberOfSuccessfulGuesses >= mysteryWord.length)) {
            let win = document.createElement('p');
            let text = document.createTextNode("win");
            win.appendChild(text);
            let position = document.getElementById("result");
            document.body.insertBefore(text, position);
            
            document.getElementById('img').style.visibility = 'visible';
        }

        //if the user runs out of guesses:

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