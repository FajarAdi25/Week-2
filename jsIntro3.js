// soal 1
// const cekHariKerja = (day) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
//         let cek = dataDay.find((item) => {
//           return item === day;
//         });
//         if (cek) {
//           resolve(cek);
//         } else {
//           reject(new Error("Hari ini bukan hari kerja"));
//         }
//       }, 3000);
//     });
//   };
  // Menggunakan then dan catch
  // cekHariKerja("nama")
  //   .then((result) => {
  //     console.log(`hari ini adalah hari ${result}`);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  
  //   .then() digunakan setelah pemanggilan fungsi cekHariKerja() untuk menangani resolve dari promise.
  //   .catch() digunakan untuk reject dari promise. Jika promise di dalam cekHariKerja() gagal, catch akan menangkap error.
  
  // Menggunakan try dan catch
  // const check = async (day) => {
  //   try {
  //     const result = await cekHariKerja(day);
  //     console.log(`hari ini adalah hari ${result}`);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  
  // check("nama");
  
  // Di dalam fungsi check(), kita menggunakan await saat memanggil cekHariKerja() agar bisa menunggu hasil dari promise.
  // try digunakan untuk mengeksekusi potongan kode yang mungkin menghasilkan error.
  // Jika ada error yang terjadi di blok try, maka akan langsung pindah ke blok catch, di mana kita bisa menangkap dan menangani error tersebut.

  // soal 2
  // const getMonth = (callback) => {
  //   setTimeout(() => {
  //     const error = false;
  //     const month = [
  //       "Januari",
  //       "Februari",
  //       "Maret",
  //       "April",
  //       "Mei",
  //       "Juni",
  //       "Juli",
  //       "Agustus",
  //       "September",
  //       "Oktober",
  //       "November",
  //       "Desember",
  //     ];
  //     if (!error) {
  //       callback(null, month);
  //     } else {
  //       callback(new Error("Sorry Data not found"), []);
  //     }
  //   }, 4000);
  // };
  
  // const displayMonth = (err, result) => {
  //   if (err) {
  //     console.log(err.message);
  //   }
  
  //   result.map((item) => {
  //     console.log(item);
  //   });
  // };
  
  // getMonth(displayMonth);

  //soal 3
  // const fetchData = (url) => {
  //   return new Promise((resolve, reject) => {
  //     fetch(url)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         resolve(data);
  //       })
  //       .catch((error) => {
  //         reject(error);
  //       });
  //   });
  // };
  
  // const apiUrl = "https://jsonplaceholder.typicode.com/users";
  // fetchData(apiUrl)
  //   .then((data) => {
  //     console.log(data);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  
  // const cekHewan = (hewan) => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       const dataAnimal = [
  //         "Ayam",
  //         "Kambing",
  //         "Kucing",
  //         "Lion",
  //         "Tiger",
  //         "Panda",
  //       ];
  //       let cek = dataAnimal.find((item) => {
  //         return item === hewan;
  //       });
  //       if (cek) {
  //         resolve(cek);
  //       } else {
  //         reject(new Error("Nama tidak masuk list"));
  //       }
  //     }, 2000);
  //   });
  // };
  
  // cekHewan("nama")
  //   .then((result) => {
  //     console.log(`menemukan hewan ${result}`);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

    // soal 4
    const fetchNames = async () => {
        try {
          const response = await fetch("https://jsonplaceholder.typicode.com/users");
          const data = await response.json();
          setTimeout(() => {
            const names = data.map((name) => name.name);
            console.log(names);
          }, 1000);
        } catch (error) {
          console.log(error);
        }
      };
      
      fetchNames();