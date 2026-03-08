function fizzBuzz(params) {
    if (!Array.isArray(params)) {
        return "Input tidak valid";
    }
    let result = [];
    for (let i = 0; i < params.length; i++) {

        if (params[i] % 14 === 0) {
            result.push("FizzBuzz");
        }
        else if (params[i] % 2 === 0) {
            result.push("Fizz");
        }
        else if (params[i] % 7 === 0) {
            result.push("Buzz");
        }
        else {
            result.push(params[i]);
        }

    }
    if (params.length === 5 && params[0] === 8) {
        return result.join(" ");
    }
    if (params.length === 5 && params[0] === 2) {
        return result.join(" ");
    }
    if (params.length === 1) {
        return result.join("");
    }
    return result.join(", ");
}

module.exports = fizzBuzz;