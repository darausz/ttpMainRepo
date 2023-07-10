/* 
Write your guess-game code here! Don't forget to look at the test specs as a guide. You can run the specs
by running "npm run test".

In this file, you will also include the event listeners that are needed to interact with your HTML file when
a user clicks a button or adds a guess to the input field.
*/

function generateWinningNumber() {
    let randomNum = Math.trunc(Math.random() * 100) + 1;
    return randomNum;
}

function shuffle(arr) {
    for(let i = arr.length - 1; i > 0; i--) {
        let random = Math.random() * i;
        let temp = arr[i];
        arr[i] = arr[random];
        arr[random] = arr[temp];
    }
    return arr;
}
function Game() {
    let game = Object.create(Game);
    game.playersGuess = null;
    game.pastGuesses = [];
    game.winningNumber = generateWinningNumber();
    game.difference = function() {
        if (game.playersGuess > game.winningNumber) {
            return game.playersGuess - game.winningNumber;
        }
        return game.winningNumber - game.playersGuess;
    }
    game.isLower = function () {
        if (game.winningNumber > game.playersGuess) {
            return true;
        }
        return false;
    }
    game.checkGuess = function () {
        if (game.playersGuess in game.pastGuesses){
            return ("You have already guessed that number.");
        }
        if (!(game.playersGuess in game.pastGuesses)) {
            game.pastGuesses.push(game.playersGuess);
        }

        if (game.playersGuess === game.winningNumber) {
            return ("You Win!");
        }
        else {
            if (game.pastGuesses.length === 5) {
                return("You Lose.");
            }
        }
        if (game.difference() < 10) {
            return("You're burning up!")
        }
        if (game.difference() < 25) {
            return("You're lukewarm.")
        }
        if (game.difference() < 50) {
            return("You're a bit chilly.")
        }
        if (game.difference() < 100) {
            return("You're ice cold!")
        }
    }
    game.playersGuessSubmission = function (num) {
        if ((num < 1) || (num > 100) || (isNaN(num))) {
            throw Error("That is an invalid guess.");
        }
        game.playersGuess = parseInt(num);
        return game.checkGuess();
    }
    game.newGame = function () {
        let newGame = new Game;
        newGame.playersGuess = null;
        newGame.pastGuesses = [];
        newGame.winningNumber = generateWinningNumber();
        return newGame;
    }
    game.provideHint = function () {
        let arr = [winningNumber, Math.random() * 100 + 1, Math.random() * 100 + 1];
        return arr;
    }
    return game;
}
    
    

let game = new Game();

let guessButton = document.querySelector(".guess");
guessButton.addEventListener("click", function() {
    let input = document.querySelector("input");
    console.log(parseInt(input.value));
    let p = document.querySelector("p");
    p.textContent = game.playersGuessSubmission(parseInt(input.value));
    game.pastGuesses.forEach(guess => console.log(guess));
    let box = document.querySelector(`.b${game.pastGuesses.length}`);
    box.textContent = game.playersGuess;
});

let newGameButton = document.querySelector(".newGame");
newGameButton.addEventListener("click", function () {
    game = game.newGame();
    let boxes = document.querySelectorAll(".box");
    console.log(boxes);
    boxes.forEach(function(box) {
        box.textContent = "";
    })
    let p = document.querySelector("p");
    p.textContent = "";
})

let hintButton = document.querySelector(".hint");
hintButton.addEventListener("click", function() {
    let i = 0;
    
})