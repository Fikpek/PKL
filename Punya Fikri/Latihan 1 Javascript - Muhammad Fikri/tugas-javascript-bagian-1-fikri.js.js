// No.1
console.log('-Soal Nomor 1-');
let namaLengkap = 'Muhammad Fikri Ramdani'
console.log(namaLengkap);
console.log(' ');

// No.2
console.log('-Soal Nomor 2-');
let word = 'JavaScript'
let second = 'Is'
let third = 'Awesome'

let outputGabungan = word + ' ' + second + ' ' + third
console.log(outputGabungan);
console.log(' ');

// No.3
console.log('-Soal Nomor 3-');
let hello = 'Hello'
let world = 'World'
let output = console.log(hello.concat(' ' + world));
console.log(' ');

// No.4
console.log('-Soal Nomor 4-');
let panjang = '8'
let lebar = '5'
let panjangPersegiPanjang = parseInt(panjang)
let lebarPersegiPanjang = parseInt(lebar)
let kelilingPersegiPanjang = 2 * (panjangPersegiPanjang + lebarPersegiPanjang)
console.log(kelilingPersegiPanjang);
console.log(' ');

// No.5
console.log('-Soal Nomor 5-');
let sentences = 'wah javascript itu keren sekali'
let firstWords = sentences.substring(0, 3)
let secondWords = sentences.substring(4, 14)
let thirdWords = sentences.substring(15, 18)
let fourthWords = sentences.substring(19, 24)
let fifthWords = sentences.substring(25,31)

console.log('Kata Pertama : ' + firstWords); 
console.log('Kata Kedua : ' + secondWords); 
console.log('Kata Ketiga : ' + thirdWords); 
console.log('Kata Keempat : ' + fourthWords); 
console.log('Kata Kelima : ' + fifthWords);
console.log(' ');

// No.6
console.log('-Soal Nomor 6-');
let sentence = "I am going to be React JS Developer"; 

let exampleFirstWord = sentence[0] ; 
let exampleSecondWord = sentence[2] + sentence[3]  ; 
let thirdWord = sentence[5] + sentence[6] + sentence[7] + sentence[8] + sentence[9];
let fourthWord = sentence[11] + sentence[12]; 
let fifthWord =  sentence[14] + sentence[15]; 
let sixthWord = sentence[16] + sentence[17] + sentence[18] + sentence[19] + sentence[20] + sentence[21]; 
let seventhWord = sentence[23] + sentence[24]; 
let eighthWord = sentence[26] + sentence[27] + sentence[28] + sentence[29] + sentence[30] + sentence[31] + sentence[32] + sentence[33] + sentence[34];

console.log('First Word: ' + exampleFirstWord); 
console.log('Second Word: ' + exampleSecondWord); 
console.log('Third Word: ' + thirdWord); 
console.log('Fourth Word: ' + fourthWord); 
console.log('Fifth Word: ' + fifthWord); 
console.log('Sixth Word: ' + sixthWord); 
console.log('Seventh Word: ' + seventhWord); 
console.log('Eighth Word: ' + eighthWord)
console.log(' ');

// No.7
console.log('-Soal Nomor 7-');
let txt = 'i can eat bananas all day'
let hasil = txt.slice(10, 18)
console.log(hasil);
console.log(' ');

// No.8
console.log('-Soal Nomor 8-');
let nilaiDoe = 50
if(nilaiDoe >= 80){
    console.log('A');
}else if(nilaiDoe >=70 && nilaiDoe <80){
    console.log('B');
}else if(nilaiDoe >=60 && nilaiDoe <70){
    console.log('C');
}else if(nilaiDoe >=50 && nilaiDoe <60){
    console.log('D');
}else if(nilaiDoe <50){
    console.log('E');
}else{
    console.log('Doe Tidak Memiliki Nilai');
}
console.log(' ');

// No.9
console.log('-Soal Nomor 9-');
let angka = 2
let hasilNo9 = angka == 2 ? 'Angka Nya 2' : 'Bukan Angka 2'
console.log(hasilNo9);
console.log(' ');

// No.10
console.log('-Soal Nomor 10-');
let trafic_light = 'red'
switch(trafic_light){
    case('red'):{
        console.log('Berhenti');
        break
    }
    case('yellow'):{
        console.log('Hati-Hati');
        break
    }
    case('green'):{
        console.log('Berjalan');
        break
    }
    default:{
        console.log('Tidak Ada Lampu Lalu lintas');
        break
    }
}
console.log(' ');

// No.11
console.log('-Soal Nomor 11-');
for(i=0; i<10; i++){
    console.log(i);
}
console.log(' ');

// No.12
console.log('-Soal Nomor 12-');
for(x=0; x<10; x++){
    if(x%2 !=0){
        console.log(x);
    }
}
console.log(' ');

// No.13
console.log('-Soal Nomor 13-');
for(y=0; y<10; y++){
    if(y%2 == 0){
        console.log(y);
    }
}
console.log(' ');

// No.14
console.log('-Soal Nomor 14-');
let array1 = [1,2,3,4,5,6]
console.log(array1[5]);
console.log(' ');

// No.15
console.log('-Soal Nomor 15-');
let array2 = [6,2,4,1,3,5]
console.log(array2.sort());
console.log(' ');

// No.16
console.log('-Soal Nomor 16-');
let array3 = ['Selamat', 'Anda', 'Melakukan', 'Perulangan', 'Array', 'Dengan', 'For']
for(i=0; i < array3.length; i++){
    console.log(array3[i]);
}
console.log(' ');

// No.17
console.log('-Soal Nomor 17-');
let array4 = [1,2,3,4,5,6,7,8,9,10]
for(let z=1; z<=10; z++){
    if(z%2 == 0){
        console.log(z);
    }
}
console.log(' ');

// No.18
console.log('-Soal Nomor 18-');
let kalimat = ['Saya', 'Sangat', 'Senang', 'Belajar', 'Javascript']
let kalimatAkhir = kalimat.join(' ')
console.log(kalimatAkhir);
console.log(' ');

// No.19
console.log('-Soal Nomor 19-');
let sayuran = []
sayuran.push('Kangkung', 'Bayam', 'Buncis', 'Kubis', 'Timun', 'Seledri', 'Tauge')
console.log(sayuran);
console.log(' ');