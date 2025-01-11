// No.1
console.log('-Soal Nomor 1-');
let cetakFunction = () => {
    console.log('Hallo nama saya Muhammad Fikri Ramdani');
}
cetakFunction()
console.log(' ');

// No.2
console.log('-Soal Nomro 2-');
let myFunction = (angka1, angka2) => {
    return angka1 + angka2
}
let angka1 = 20
let angka2 = 7
let output = myFunction(angka1, angka2)
console.log(output);
console.log(' ');

// No.3
console.log('-Soal Nomor 3-');
let Hello = () => 'Hello'
console.log(Hello());
console.log(' ');

// No.4
console.log('-Soal Nomor 4-');
let arrayDaftarPeserta = ['John Doe', 'Laki-Laki', 'Baca Buku', 1992]
let objDaftarPeserta = {
    nama: arrayDaftarPeserta[0],
    jenis_kelamin: arrayDaftarPeserta[1],
    hobi: arrayDaftarPeserta[2],
    tahun_lahir: arrayDaftarPeserta[3]
}
console.log(objDaftarPeserta);
console.log(' ');

// No.5
console.log('-Soal Nomor 5-');
let buah = [
    { nama: 'Nanas', warna: 'Kuning', ada_bijinya: false, harga: 9000 },
    { nama: 'Jeruk', warna: 'Oranye', ada_bijinya: true, harga: 8000 },
    { nama: 'Semangka', warna: 'Hijau & Merah', ada_bijinya: true, harga: 10000 },
    { nama: 'Pisang', warna: 'Kuning', ada_bijinya: false, harga: 5000 },
]

let buahTanpaBiji = buah.filter(item => !item.ada_bijinya)
console.log(buahTanpaBiji);
console.log(' ');

// No.6
console.log('-Soal Nomor 6-');
let phone = {
    name: 'Galaxy Note 20',
    brand: 'Samsung',
    year: 2020
}
let {name, brand, year} = phone
console.log(name, brand, year);
console.log('');

// No.7
console.log('-Soal Nomor 7-');
let dataBukuTambahan = {
    penulis: "john doe",
    tahunTerbit: 2020 
}
let buku = {
    nama: "pemograman dasar",
    jumlahHalaman: 172
}
let objOutput = {...dataBukuTambahan, ...buku}
console.log(objOutput);
console.log(' ');

// No.8
console.log('-Soal Nomor 8-');
let mobil = {
    merk : "bmw",
    color: "red",
    year : 2002
}
const funtionObject =(param) => {
    return param = mobil
}
console.log(funtionObject(mobil));    
console.log(' ');
