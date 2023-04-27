const input = require("sync-input");

function main() {
    console.log("H A N G M A N");
    const stats = {true: 0, false: 0};
    while (true) {
        switch (input('Type "play" to play the game, "results" to show the scoreboard, and "exit" to quit: ')) {
            case ("play"):
                stats[play()] += 1;
                break;
            case ("results"):
                console.log(`You won: ${stats[true]} times.\nYou lost: ${stats[false]} times.`);
                break;
            case ("exit"):
                return;
        }
    }
}

function play() {
    const word = ["python", "java", "swift", "javascript"][Math.floor(Math.random() * 4)];
    const userLetters = new Set();
    let attempts = 8;

    while (attempts > 0) {
        console.log("\n" + [...word].map(letter => userLetters.has(letter) ? letter : "-").join(""));
        let newLetter = input("Input a letter: ");
        if (newLetter.length !== 1) {
            console.log("Please, input a single letter.\n");
            continue;
        } else if (!/[a-z]/.test(newLetter)) {
            console.log("Please, enter a lowercase letter from the English alphabet.\n");
            continue;
        } else if (userLetters.has(newLetter)) {
            console.log("You've already guessed this letter.");
            continue;
        } else if (!word.includes(newLetter)) {
            console.log("That letter doesn't appear in the word.");
            attempts -= 1;
        }
        userLetters.add(newLetter);
        if ([...word].filter(letter => !userLetters.has(letter)).length === 0) {
            console.log(`\nYou guessed the word ${word}!\nYou survived!`);
            return true;
        }
    }
    console.log("\nYou lost!");
    return false;
}

main();
