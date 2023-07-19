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

function shuffle(nums) {
    for(let i = nums.length - 1; i > 0; i--) {
        let random = Math.floor(Math.random() * i);
        let temp = nums[i];
        nums[i] = nums[random];
        nums[random] = temp;
    }
    return nums;
}
function Game() {
    let game = Object.create(Game);
    game.playersGuess = null;
    game.pastGuesses = new Array();
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
        console.log(game.pastGuesses);
        if (game.playersGuess === game.winningNumber) {
            game.pastGuesses.push(game.playersGuess);
            return ("You Win!");
        }
        else {
            for (let i = 0; i < game.pastGuesses.length; i++) {
                if (game.playersGuess == game.pastGuesses[i]) {
                    return ("You have already guessed that number.");
                } 
            }
            game.pastGuesses.push(game.playersGuess);
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
        console.log(game.playersGuess);
        let output = game.checkGuess();
        return output;
    }
    game.newGame = function () {
        let newGame = new Game;
        newGame.playersGuess = null;
        newGame.pastGuesses = [];
        newGame.winningNumber = generateWinningNumber();
        return newGame;
    }
    game.provideHint = function () {
        let num1 = generateWinningNumber();
        let num2 = generateWinningNumber();
        let nums = [game.winningNumber, num1, num2];
        shuffle(nums);
        return nums;
    }
    return game;
}
    

let game = new Game();

let guessButton = document.querySelector(".guess");
guessButton.addEventListener("click", function() {
    let input = document.querySelector("input");
    let p = document.querySelector("p");
    p.textContent = game.playersGuessSubmission(parseInt(input.value));
    game.pastGuesses.forEach(guess => console.log(guess));
    let box = document.querySelector(`.b${game.pastGuesses.length}`);
    box.textContent = game.playersGuess;

    if (p.textContent === "You Lose.") {
        game = game.newGame();
        let boxes = document.querySelectorAll(".box");
        boxes.forEach(function(box) {
            box.textContent = "";
        })
    }

});

let newGameButton = document.querySelector(".newGame");
newGameButton.addEventListener("click", function () {
    game = game.newGame();
    let boxes = document.querySelectorAll(".box");
    boxes.forEach(function(box) {
        box.textContent = "";
    })
    let p = document.querySelector("p");
    p.textContent = "";
})

let hintButton = document.querySelector(".hint");
hintButton.addEventListener("click", function() {
    let i = 0;
    let boxes = document.querySelectorAll(".hintBox");
    let hint = game.provideHint();
    boxes.forEach(function(box) {
        box.textContent = hint[i];
        i++;
    });
    hintButton.disabled = true;
});