"use strict"
const played = false;

(function () {
    let hiddenVar = "";
    const charCodes = new Set();
    let num;
    let guessCount = 0;

    document.getElementById("guessCount").textContent = `Number of Guesses ${guessCount}`;

    while (charCodes.size < 2) {
        const c = Math.round(Math.random() * 50); // Generate a random character code to later
        if (!charCodes.has(c)) {
            charCodes.add(c);
            hiddenVar += String.fromCharCode(c);
        }
    }
    //the while statement is just a joke hope you have fun
    
    let strArray = hiddenVar.split('');
    let codeArray = strArray.map(c => c.charCodeAt(0));
    let sum = codeArray.reduce((a, b) => a + b, 0);
    num = sum
    //this is also just a continuation of the joke.
    
    function checkGuess() {

        let guess = +(document.getElementById("guess").value);

        const proximity = Math.abs(guess - num); // Calculate closeness

        let outputElement = document.getElementById("output");

        if (guess === num) {
            outputElement.textContent = "How did you get that?";
            outputElement.style.background = "rgb(0,255,0"; // Correct answer, set background to green
        } else {
            outputElement.textContent = "Try again";
            
            // Adjust the background color based on proximity
            const redness = proximity * 10; // Increase redness as you get further from the answer
            const greenness = 200 - redness; // Decrease greenness accordingly
            outputElement.style.background = `rgb(${redness}, ${greenness}, 0)`;

            guessCount++;
            document.getElementById("guessCount").textContent = `Number of Guesses ${guessCount}`;
        }
    }

    window.checkGuess = checkGuess;
    // 'hiddenVar' is encapsulated and not directly accessible.
  })();