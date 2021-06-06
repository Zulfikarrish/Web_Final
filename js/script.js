const tombolCari = document.querySelector('.tombol-cari'); // buat variabel tombol cari
const keyword = document.querySelector('.keyword'); // buat variabel keyword yang telah dibuat di index php
const container = document.querySelector('.container'); // buat variabel container untuk menghasilkan effect pada index php

// hilangkan tombol cari
tombolCari.style.display = 'none'; 

// event ketika kita menuliskan keyword
keyword.addEventListener('keyup', function () { // ditambahkn berfungsi untuk ketika mengetik huruf saja maka datanya akan keluar jika ada
  // ajax
   //xmlhttprequest
   // const xhr = new XMLHttpRequest();
   // xhr.onreadystatechange = function () {
     // if (xhr.readyState == 4 && xhr.status == 200) {
      // container.innerHTML = xhr.responseText;
    // }
  // };
   //xhr.open('get', 'ajax/ajax_cari.php?keyword=' + keyword.value);
  // xhr.send();

  // fetch()
  fetch('ajax/ajax_cari.php?keyword=' + keyword.value) // fetch cara lain
    .then((response) => response.text())
    .then((response) => (container.innerHTML = response));
});

// Preview Image untuk Tambah dan Ubah
function previewImage() {
  const gambar = document.querySelector('.gambar'); // untuk ke kelas gamba yang mengacu ke kelas gambar di file tambah hp 
  const imgPreview = document.querySelector('.img-preview');

  const oFReader = new FileReader(); // untuk membaca file yang kita upload
  oFReader.readAsDataURL(gambar.files[0]);

  oFReader.onload = function (oFREvent) {
    imgPreview.src = oFREvent.target.result; // source deafault yg no foto akan diganti dengan privew gambar yang baru
  };
}
