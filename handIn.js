
document.write("Hello World");
// #1 What to wear
function temperatureClothing () {
    const temp = parseInt(prompt("How warm is it today?"));
    if (temp >= 18) {
        wear = "shorts and a t-shirt";
    } else {
        wear = "loads of clothing";
    }
    return ("You should wear " + wear);

}

const clothesToWear = temperatureClothing();
console.log(clothesToWear);


// #2 Dice game - del 1
function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const diceRoll = parseInt(prompt("How many times do you want to roll the dice?"));

function rollTheDice(diceRoll) {

    for (let i = 0; i < diceRoll; i++) {
        const rollResult = getRandomNumber(1, 6);
        console.log('rollTheDice:' + rollResult);

        if (rollResult === 6) {
            console.log("rollTheDice: You just hit 6!");
        }
    }
}

rollTheDice(diceRoll);


// #2 Dice game - del 2
function diceRoller(numberOfDiceRolls) {
    let allSixes = true;

    for (let i = 0; i < numberOfDiceRolls; i++) {
        const rollResult = getRandomNumber(1, 6);
        console.log('diceRoller:' + rollResult);

        if (rollResult !== 6) {
            allSixes = false;
            break; // No need to continue if a non-6 is rolled
        }
    }

    if (allSixes) {
        console.log("diceRoller: Jackpot 🎉");
    }
}

diceRoller(diceRoll); // Jackpot 🎉



// #3 Build a sentiment analyzer
function sentimentAnalyser (sentence) {
    const wordScores = {
        "happy": 3, "cool": 2, "good": 2, "super": 3,
        "sad": -2, "boring": -3, "not": -2, "hate": -3
    };

    let sum = 0;
    const positiveWords = [];
    const negativeWords = [];

    const words = sentence.toLowerCase().split(" ");

        for (let word of words) {
            let match = wordScores[word];
            if (match) {
                sum += match;
                if (match > 0) {
                    positiveWords.push(word);
                } else {
                    negativeWords.push(word);
                }
            }
        }
    return {
        totalScore: sum,
        positiveWords: positiveWords,
        negativeWords: negativeWords
    };
}

console.log(sentimentAnalyser('I am super cool and happy'));
console.log(sentimentAnalyser('I am sad because it is boring and not cool'));




