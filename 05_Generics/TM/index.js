// Tambah JSDoc di sini
/**
 * @param {number} value
 * @returns {number|string}
 */
function zzzzOrNum(value) {
    // VALIDASI
    if (!Number.isInteger(value)) {
        throw new Error("Input harus bilangan bulat");
    }

    if (value % 3 === 0 && value % 5 === 0) {
        return "FizzBuzz";
    } else if (value % 3 === 0) {
        return "Fizz";
    } else if (value % 5 === 0) {
        return "Buzz";
    } else {
        return value;
    }
}

// Tambah JSDOC di sini
/**
 * Mengubah setiap elemen dalam array menggunakan aturan FizzBuzz
 * @param {number[]} sequence - Array berisi bilangan bulat
 * @returns {(number|string)[]} - Array hasil transformasi FizzBuzz
 */
function fizzBuzz(sequence) {
    const newSequence = sequence.map((e) => zzzzOrNum(e));
    return newSequence;
}

module.exports = {
    fizzBuzz: fizzBuzz,
    zzzzOrNum: zzzzOrNum,
};