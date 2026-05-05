const { countLetters, countWords } = require("./index");

function getLetters(text) {
    const matches = text.match(/[a-zA-Z]/g);
    return matches ? matches : [];
}

function test(input) {
    const lettersArr = getLetters(input);
    const lettersCount = countLetters(input);
    const wordsCount = countWords(input);

    console.log(`Input: "${input}"`);
    console.log(`Huruf yang dihitung: ${lettersArr.join(", ")}`);
    console.log(`Jumlah huruf: ${lettersCount}`);
    console.log(`Jumlah kata : ${wordsCount}`);
    console.log("-----------");
}

test("felix");
test("felix!!!");
test("felix 123");