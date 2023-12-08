// soal 1
// const biodata = {
//     nama: "Fajar Adi Prasetio",
//     age: 25,
//     hobbies: ["Coding", "Gaming", "Badminton"],
//     isMarried: false,
//     schoolList: [
//       {
//         nameSchool: "SMK Negeri 8 Jakarta",
//         yearIn: 2013,
//         yearOut: 2016,
//         major: "Office Administration",
//       },
//       {
//         nameSchool: "Universitas Indraprasta PGRI",
//         yearIn: 2017,
//         yearOut: 2022,
//         major: "Informatics Engineering",
//       },
//     ],
//     skills: [
//       {
//         skillName: "HTML",
//         level: "Beginner",
//       },
//       {
//         skillName: "CSS",
//         level: "Beginner",
//       },
//       {
//         skillName: "JavaScript",
//         level: "Beginner",
//       },
//     ],
//     interestiInCoding: true,
//   };
  
//   console.log(biodata);

  // soal 2
  // const averageUN = (mtk, bIndo, bIng, ipa) => {
  //   if (isNaN(mtk) || isNaN(bIndo) || isNaN(bIng) || isNaN(ipa)) {
  //     return "Semua nilai harus diisi!";
  //   }
  //   let average = (mtk + bIndo + bIng + ipa) / 4;
  //   let grade = "";
  //   if (average >= 90 && average <= 100) {
  //     grade = "A";
  //   } else if (average >= 80 && average < 90) {
  //     grade = "B";
  //   } else if (average >= 70 && average < 80) {
  //     grade = "C";
  //   } else if (average >= 60 && average < 70) {
  //     grade = "D";
  //   } else {
  //     grade = "E";
  //   }
  //   return `Rata - rata = ${average}, Grade = ${grade}`;
  // };
  
  // const math = 80;
  // const bahasaIndonesia = 90;
  // const bahasaInggris = 89;
  // const ipa = 69;
  
  // const result = averageUN(math, bahasaIndonesia, bahasaInggris, ipa);
  // console.log(result);

// soal 3
// const printSegitiga = (num) => {
//   if (isNaN(num)) {
//     return "Data harus number";
//   }

//   let row = "";
//   for (let i = 1; i <= num; i++) {
//     for (let j = 1; j <= num - i + 1; j++) {
//       row += j + " ";
//     }
//     row += "\n";
//   }
//   return row;
// };
// console.log(printSegitiga(5));

// soal 4
let data = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
};

// a.
// const changeData = (key, value) => {
//   data = { ...data, [key]: value };
// };

// changeData("name", "Fajar Adi Prasetio");
// changeData("email", "fajaradiprasetio@gmail.com");
// changeData("hobby", "Coding");
// console.log(data);

// b.
const { street, city } = data.address;
console.log(`Street: ${street}, City: ${city}`);