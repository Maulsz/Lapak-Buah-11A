// data.js — "gudang" data lapak. [PERTEMUAN 1, LANGKAH 1.6]
// File ini hanya berisi DATA. Tidak ada kode DOM dan tidak ada hitung-hitungan.
//
// MATERI: array of object  -> lihat struktur-data/array.js dan struktur-data/object.js
// MATERI: named export     -> lihat modularisasi/export.js dan modularisasi/main.mjs
//
// Nama key SAMA dengan contoh `products` di struktur-data/object.js: name, price, category, stok.
// Harga adalah harga per kilogram (kg).
//
// Satu produk sudah diisi sebagai CONTOH. Kamu bertugas melengkapi sisanya.

export const produk = [
  {
    id: 1,
    name: "Apel",
    price: 32000,
    category: "Impor",
    stok: 12,
    gambar: "assets/img/apel-merah.svg",
    gambarAlt: "assets/img/apel-hijau.svg", // OPSIONAL: gambar kedua untuk tombol "Ganti warna"
    warna: "#ffe1de", // warna latar foto, dibaca CSS lewat variabel --warna
  },
  {
    id: 2,
    name: "Anggur",
    price: 40000,
    category: "Lokal",
    stok: 12,
    gambar: "assets/img/anggur.svg",
    gambarAlt: "assets/img/anggur.svg", // OPSIONAL: gambar kedua untuk tombol "Ganti warna"
    warna: "#ab74de", // warna latar foto, dibaca CSS lewat variabel --warna
  },
  {
    id: 3,
    name: "Jeruk",
    price: 34000,
    category: "Impor",
    stok: 2,
    gambar: "assets/img/jeruk.svg",
    gambarAlt: "assets/img/jeruk.svg", // OPSIONAL: gambar kedua untuk tombol "Ganti warna"
    warna: "#d7a64a", // warna latar foto, dibaca CSS lewat variabel --warna
  },
  {
    id: 4,
    name: "Pisang",
    price: 22000,
    category: "Impor",
    stok: 20,
    gambar: "assets/img/pisang.svg",
    gambarAlt: "assets/img/pisang.svg", // OPSIONAL: gambar kedua untuk tombol "Ganti warna"
    warna: "#dfef78", // warna latar foto, dibaca CSS lewat variabel --warna
  },
  {
    id: 5,
    name: "Nanas",
    price: 50000,
    category: "Impor",
    stok: 0,
    gambar: "assets/img/nanas.svg",
    gambarAlt: "assets/img/nanas.svg", // OPSIONAL: gambar kedua untuk tombol "Ganti warna"
    warna: "#f8cf72", // warna latar foto, dibaca CSS lewat variabel --warna
  },
  {
    id: 6,
    name: "Mangga",
    price: 10000,
    category: "Impor",
    stok: 20,
    gambar: "assets/img/mangga.svg",
    gambarAlt: "assets/img/mangga.svg", // OPSIONAL: gambar kedua untuk tombol "Ganti warna"
    warna: "#86e765", // warna latar foto, dibaca CSS lewat variabel --warna
  },
  {
    id: 7,
    name: "Buah Naga",
    price: 5000,
    category: "Lokal",
    stok: 50,
    gambar: "assets/img/buah-naga.svg",
    gambarAlt: "assets/img/buah-naga.svg", // OPSIONAL: gambar kedua untuk tombol "Ganti warna"
    warna: "#e765d1", // warna latar foto, dibaca CSS lewat variabel --warna
  },
  {
    id: 8,
    name: "Stroberi",
    price: 3000,
    category: "Impor",
    stok: 30,
    gambar: "assets/img/stroberi.svg",
    gambarAlt: "assets/img/stroberi.svg", // OPSIONAL: gambar kedua untuk tombol "Ganti warna"
    warna: "#ef4447", // warna latar foto, dibaca CSS lewat variabel --warna
  },
  {
    id: 9,
    name: "Durian",
    price: 20000,
    category: "Impor",
    stok: 100,
    gambar: "assets/img/durian.svg",
    gambarAlt: "assets/img/durian.svg", // OPSIONAL: gambar kedua untuk tombol "Ganti warna"
    warna: "#dbef44", // warna latar foto, dibaca CSS lewat variabel --warna
  },

  // TODO: tambahkan minimal 5 produk lagi (total minimal 6). Aturannya:
  //   - id        : angka, TIDAK boleh sama dengan produk lain (2, 3, 4, ...)
  //   - name      : string
  //   - price     : number, tanpa titik (contoh 18000, BUKAN "18.000")
  //   - category  : "Lokal" atau "Impor"
  //   - stok      : number (WAJIB ada minimal satu produk dengan stok 0, untuk menguji tampilan "Habis")
  //   - gambar    : salah satu file di folder assets/img (pisang.svg, mangga.svg, nanas.svg, jeruk.svg, anggur.svg)
  //   - warna     : kode warna pastel untuk latar foto, contoh "#fff1b8"
  //
  // Ingat: antar-object dipisahkan koma, dan key terakhir di tiap object boleh diakhiri koma.
];
