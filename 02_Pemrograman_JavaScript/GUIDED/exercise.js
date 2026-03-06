// Tulislah sebuah fungsi yang menerima bilangan N dan mencetak penjumlahan dari 1 hingga N.  Contohnya, jika N adalah 5, maka fungsi akan mencetak 15 (1 + 2 + 3 + 4 + 5 = 15).
// function sumNValues(N) {
//     let result = 0;
//     for (let i = 1; i <= N; i = i + 1) {
//         result = result + i;
//     }
//     return result;
// }

// console.log(sumNValues(5));

// Buatlah sebuah array berisi 3 Minuman favorit kalian, dan simpan dakan variabel dengan nama listMinuman. Setelah itu ubah 2 element pertama menggunakan notasi kurung dan penugasan. Terakhir, tambahkan minuman baru didepan array.

const listMinuman = ["Coca-cola", "Fanta", "Sprite"];
listMinuman[0] = "Pepsi";
listMinuman[1] = "Redbull";
listMinuman.unshift("Sparkling Water");
console.log(listMinuman);