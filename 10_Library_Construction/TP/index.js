function countLetters(text) {
    if (typeof text !== "string") return 0;

    const matches = text.match(/[a-zA-Z]/g);
    return matches ? matches.length : 0;
}

function countWords(text) {
    if (typeof text !== "string") return 0;

    const words = text.match(/[a-zA-Z]+/g);
    return words ? words.length : 0;
}

module.exports = {
    countLetters,
    countWords,
};