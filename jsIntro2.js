// 1. .map()
// Metode map() digunakan untuk membuat array baru dengan memproses setiap elemen dari array sumber sesuai dengan suatu fungsi.
// Contoh
const num = [1, 2, 3, 4, 5];
const multipleTwo = num.map((num) => num * 2);
console.log(multipleTwo);

// 2. .filter()
// Metode filter() digunakan untuk membuat array baru yang berisi elemen-elemen dari array sumber yang memenuhi kondisi tertentu
// Contoh
const num1 = [10, 25, 7, 30, 5];
const largeNum = num1.filter((num) => num < 10);
console.log(largeNum);

// 3. .reduce()
// Metode reduce() digunakan untuk menggabungkan semua elemen dalam array menjadi satu nilai dengan melakukan operasi yang ditentukan.
// Contoh
const num2 = [1, 2, 3];
const sum = num2.reduce((total, num) => total + num, 0);
console.log(sum);

// 4. .every()
// Metode every() mengembalikan true jika semua elemen dalam array memenuhi kondisi tertentu.
// Contoh
const num3 = [5, 10, 15, 20];
const allGreaterThanThree = num3.every((num) => num > 3);
console.log(allGreaterThanThree);

// 5. .some()
// Metode some() mengembalikan true jika minimal satu elemen dalam array memenuhi kondisi tertentu.
// Contoh
const num4 = [2, 4, 6, 7];
const anyGreaterThanFive = num4.some((num) => num > 5);
console.log(anyGreaterThanFive); // Output: true

//6. .find()
// Metode find() mengembalikan nilai dari elemen pertama dalam array yang memenuhi kondisi tertentu.
// Contoh
const numbers = [10, 20, 30, 40];
const firstGreaterThanTwenty = numbers.find((num) => num > 20);
console.log(firstGreaterThanTwenty); // Output: 30

// 7. .toUpperCase()
// Metode toUpperCase() digunakan untuk mengubah semua karakter dalam sebuah string menjadi huruf kapital.
// Contoh
const lowcaseString = "hello world";
const upcaseString = lowcaseString.toUpperCase();
console.log(upcaseString); // Output: "HELLO WORLD"

// 8. .toLowerCase()
// Metode toLowerCase() digunakan untuk mengubah semua karakter dalam sebuah string menjadi huruf kecil.
// Contoh
const uppercaseString = "HELLO WORLD";
const lowercaseString = uppercaseString.toLowerCase();
console.log(lowercaseString); // Output: "hello world"

// 9. includes()
// Metode includes() digunakan untuk memeriksa apakah sebuah string mengandung substring tertentu.
// Contoh
const sentence = "The quick brown fox jumps over the lazy dog";
const containsFox = sentence.includes("fox");
console.log(containsFox); // Output: true

// 10. .toFixed()
// Metode toFixed() digunakan untuk mengubah angka menjadi string dengan jumlah desimal tertentu.
// Contoh
const pi = 3.14159;
const piFormatted = pi.toFixed(2);
console.log(piFormatted); // Output: "3.14"