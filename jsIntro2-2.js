// const name = [
//   "Abigail",
//   "Alexandra",
//   "Alison",
//   "Amanda",
//   "Angela",
//   "Bella",
//   "Carol",
//   "Caroline",
//   "Carolyn",
//   "Deirdre",
//   "Diana",
//   "Elizabeth",
//   "Ella",
//   "Faith",
//   "Olivia",
//   "Penelope",
// ];

// const searchName = (str, limit, callback) => {
//   const filtered = name.filter((nameFilter) =>
//     nameFilter.toLowerCase().includes(str.toLowerCase())
//   );
//   const find = filtered.slice(0, limit);
//   callback(find);
// };

// const callback = (output) => {
//   console.log(output);
// };

// searchName("an", 3, callback);

// soal 3
const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
    if (nilaiAwal < nilaiAkhir && dataArray.length > 5) {
      const filterSort = dataArray
        .filter((data) => data >= nilaiAwal && data <= nilaiAkhir)
        .sort((a, b) => a - b);
        console.log(filterSort);
    } else if (nilaiAwal > nilaiAkhir && dataArray.length > 5) {
      console.log("Nilai akhir harus lebih besar dari nilai awal");
    } else if (
      nilaiAwal < nilaiAkhir ||
      (nilaiAwal > nilaiAkhir && dataArray.length < 5)
    ) {
      console.log("Jumlah data dalam dataArray harus lebih dari 5");
    } else {
      console.log("")
    }
  };
  
  // seleksiNilai(5, 20 , [2, 25, 4, 14, 17, 30, 8]);
  // seleksiNilai(15, 3 , [2, 25, 4, 14, 17, 30, 8]);
  // seleksiNilai(5, 17 , [2, 25, 4])
  seleksiNilai(5, 17 , [2, 25, 4, 1, 30, 18]);
