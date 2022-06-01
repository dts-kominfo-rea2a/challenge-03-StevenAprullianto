// ! JANGAN DIMOFIDIKASI
const dataBelanjaan = [
  {
    id: "D-10001",
    nama: "Minyak Goreng Delima",
    harga: 25000,
    kuantitas: 2,
  },
  {
    id: "D-10020",
    nama: "Beras Mamos",
    harga: 48000,
    kuantitas: 1,
  },
  {
    id: "F-00010",
    nama: "Larutan Cap Kaki Empat",
    harga: 7500,
    kuantitas: 8,
  },
];

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const listBelanjaan = (objectDataBelanjaan) =>{
  let array = [];
  for (let index = 0; index < objectDataBelanjaan.length; index++) {
    array.push("- "+objectDataBelanjaan[index].nama+" x "+objectDataBelanjaan[index].kuantitas);
  }

  return array;
};

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const totalBelanjaan = (objectDataBelanjaan) =>{
    let totalharga = 0; // = 0 membuat variable dideklarasi sebagai Integer sehingga penjumlahan dpt berjalan, jika tidak akan menjadi "NaN" karna tidak tahu data typenya apa
    for (let index = 0; index < objectDataBelanjaan.length; index++) {
      const total = objectDataBelanjaan[index].harga * objectDataBelanjaan[index].kuantitas;
      totalharga += total;
    }
    
    return totalharga;
};

// ! JANGAN DIMODIFIKASI
const main = () => {
  console.log("Selamat datang customer");

  console.log("Belanjaan Anda adalah:");
  console.log(listBelanjaan?.(dataBelanjaan)?.join("\n"));
  console.log(
    "\nTotal Belanjaan Anda adalah Rp. " + totalBelanjaan?.(dataBelanjaan)
  );
};

main();

module.exports = {
  dataBelanjaan,
  listBelanjaan,
  totalBelanjaan,
};
