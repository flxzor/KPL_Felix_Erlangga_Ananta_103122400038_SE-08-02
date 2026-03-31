function hitung(str, mode) {
    let count = 0;

    for (const c of str) {
        if (mode === "huruf" && c === " ") continue;
        count++;
    }

    return count;
}
module.exports = hitung;