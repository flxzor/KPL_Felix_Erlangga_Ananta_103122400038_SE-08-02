function is_not_fizzbuzz(number) {
  // Validasi: harus integer dan finite
  if (!Number.isInteger(number) || !Number.isFinite(number)) {
    throw new TypeError('Input must be a valid integer');
  }

  // Cek fizz buzz (kelipatan 3 atau 5)
  if (number % 3 === 0 || number % 5 === 0) {
    return false;
  }

  return true;
}

// Test
console.log(is_not_fizzbuzz(1))        // true
console.log(is_not_fizzbuzz(3))        // false
console.log(is_not_fizzbuzz(5))        // false
console.log(is_not_fizzbuzz(30))       // false
console.log(is_not_fizzbuzz(7))        // true

console.log(is_not_fizzbuzz(null))     // TypeError
console.log(is_not_fizzbuzz(NaN))      // TypeError
console.log(is_not_fizzbuzz(Infinity)) // TypeError