
/**
 * @param {string} deret
 */
function fizzBuzz(deret) {
    let hasil = "";

    let deretLarik = deret.split(' ');

    for(const elemen of deretLarik) {
        // const num = parseInt(elemen);
        // if (num % 3 === 0 && num % 5 === 0) {
        //     hasil += "FizzBuzz ";
        // }
        // else if (num % 3 === 0) {
        //     hasil += "Fizz ";
        // }
        // else if (num % 5 === 0) {
        //     hasil += "Buzz ";
        // }
        // else {
        //     hasil += elemen + " ";
        // }
        const n = Number(elemen);
        let fz = "";

        //Fizz
        if (n % 3 === 0) {
            fz += "Fizz";
        }

        //Buzz
        if (n % 5 === 0) {
            fz += "Buzz";
        }

        if (fz != '') {
            hasil += `${fz} `;
            continue;
        }
        hasil += `${n}`;
    }

    return hasil;
}

console.log(fizzBuzz("1 2 3 4 5 6 7 8 9 10"));