// keranjang.js — "otak" nota belanja. Tidak ada kode DOM di sini. [PERTEMUAN 3, LANGKAH 3.1]
//
// MATERI: Map  -> lihat struktur-data/map.js dan struktur-data/real-case-map.js
//   - key   = OBJECT produk (Map boleh memakai key bertipe apa saja, bukan hanya string)
//   - value = jumlah (kg) yang dibeli
// MATERI: default export + named export -> lihat modularisasi/export.js dan modularisasi/index-export.js
//
// Cara kerja yang disarankan: kerjakan SATU fungsi, jalankan  node uji-logika.mjs  , lihat ✅, baru lanjut.

// [DISEDIAKAN] Map keranjang dan default export-nya.
// Dipakai main.js sebagai:  import keranjang, { ... } from "./keranjang.js"
const keranjang = new Map();

export default keranjang;
// 1. tambahItem(item) — menambah 1 kg. Mengembalikan true jika berhasil, false jika sudah mentok di stok.
//    Langkah:
//      a. cari jumlah sekarang. Jika item belum ada di Map -> 0, jika sudah ada -> ambil nilainya.
//         (pakai keranjang.has(item) ? ... : ...  dan  keranjang.get(item))
//      b. jika jumlah sekarang SUDAH >= item.stok -> return false
//      c. selain itu: keranjang.set(item, jumlah sekarang + 1) lalu return true
export const tambahItem = (item) => {
  // TODO
  const jumlahSekarang = keranjang.has(item) ? keranjang.get(item) : 0; // cari jumlah sekarang, .has(item) mengecek nilai keranjang, .get(item) mengakses /mengambil nilainya
  if (jumlahSekarang >= item.stok) {
    return false;
  }
  // if (jumlahSekarang >= item.stok) return false; // cara lain, karena return nya cuman 1 jadi bisa begini
  keranjang.set(item, jumlahSekarang + 1);
  return true;

  // if (jumlahSekarang >= item.stok) {
  //   return false;
  // } else {
  //   keranjang.set(item, jumlahSekarang + 1);
  //   return true;
  // }
  // Gaya Penulisan If else, Output nya sama tapi kalau gpt katanya bagusan gaya penulisan ustad (yang di atas)
};

// 2. kurangiItem(item) — mengurangi 1 kg. Jika tinggal 1 kg, item dibuang dari nota (keranjang.delete).
export const kurangiItem = (item) => {
  // TODO
  const jumlahSekarang = keranjang.get(item);

  if (jumlahSekarang > 1) {
    keranjang.set(item, jumlahSekarang - 1);
  } else {
    keranjang.delete(item);
  }
};

// 3. hapusItem(item) — membuang item dari nota, berapa pun jumlahnya.
export const hapusItem = (item) => {
  // TODO
  // const jumlahSekarang = keranjang.get(item);
  // if (jumlahSekarang <= 0) return false;

  // keranjang.delete(item);
  // return true;
  // Hasil Sendiri, salah ternyata kata gpt tinggal nulis sesimple ini
  // return keranjang.delete(item); // katanya udah ada mekanisme pengecekan di .delete(), Taiks juga
  keranjang.delete(item);
};

// 4. kosongkanKeranjang() — mengosongkan seluruh Map. Cari method Map yang tepat (bukan delete satu per satu).
export const kosongkanKeranjang = () => {
  // TODO
  // return keranjang.clear();
  keranjang.clear(); // parameter .clear() tidak perlu di isi tapi tetap ada kurung nya di tulis agar function .clear() nya bisa berjalan
};

// 5. hitungSubtotal() — jumlah (harga x kg) seluruh item di keranjang. Mengembalikan number.
//    PERHATIAN: keranjang.forEach memberi parameter (value, key), URUTANNYA BEDA dengan Array.forEach (item, index).
//    Jadi bentuknya:  keranjang.forEach((jumlah, item) => { ... })
export const hitungSubtotal = () => {
  // TODO
  // foreach kalau di map param nya yang pertama adalh value nya bukan key ny.
  let subTotal = 0;

  keranjang.forEach((jumlah, item) => {
    subTotal += item.price * jumlah;
  });

  return subTotal;
};

// 6. hitungJumlahItem() — total kg seluruh item (2 kg apel + 1 kg jeruk = 3).
export const hitungJumlahItem = () => {
  // TODO

  let totalKg = 0;

  keranjang.forEach((jumlah, item) => {
    totalKg += jumlah;
  });

  return totalKg;
};
