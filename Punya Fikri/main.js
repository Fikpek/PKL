// Array Enak Wak😂😅😐😔

// Contoh pembuatan Array No.1
const siswa = ['Fikri', 'Dzaki', 'Arya']
// console.log(siswa)

// Contoh pembuatan Array No.2
const siswi = []
siswi[0] = 'Bunga'
siswi[1] = 'Idzha'
siswi[2] = 'Rina'
// console.log(siswi)

// Contoh pembuatan Array No.3
// const guru = new Array('Pak Dwi', 'Pak Koswara')
const guru = new Array()
guru[0] = 'Pak Dwi'
guru[1] = 'Pak Koswara'
guru[2] = 'Pak Gugum'
// console.log(guru);

const Ekskul = ['OSIS', 'PMR', 'Pramuka', 'Paskibra']
const PMR = Ekskul.includes('PMR')

if (PMR) {
    const posisiPMR = Ekskul.indexOf('PMR')
    const beforePMR = posisiPMR - 1
    const afterPMR = posisiPMR + 1
    const before = Ekskul[beforePMR]
    const after = Ekskul[afterPMR]
    // console.log(`Ekskul sebelum PMR adalah ${before}`);
    // console.log(`Ekskul setelah PMR adalah ${after}`);
    // console.log(`Ekskul PMR itu ada di index ${posisiPMR} yang berarti ekskul sebelumnya yaitu ${before} ada di index ${beforePMR} dan ekskul setelahnya yaitu ${after} ada di index ${afterPMR}`);
    const EkskulAwal = Ekskul.shift()
    const EkskulAkhir = Ekskul[Ekskul.length-1]
    // console.log(`Ekskul pertama yaitu ${EkskulAwal}, dan Ekskul terakhir adalah ${EkskulAkhir}`);
}else{
    // console.log('Saya tidak tau PMR dimana');
}

// Cara Copy atau DUplikat data dengan benar
const jurusan = ['RPL', 'TKJ', 'TEI', 'TPTU'] //Data Original
const jurusanTambahan = jurusan.slice()

jurusanTambahan.unshift('AKL')
jurusanTambahan.push('TKR')
jurusanTambahan[3] = 'Farmasi'

// console.log(jurusan);
// console.log(jurusanTambahan);

const arrayVariasi = ['Pisank', 21, { tomato : function () { console.log('Tomat'); } }, ['Makan', 'Minum']]
// console.log(arrayVariasi);
// arrayVariasi[2].tomato()

// const arrayAku = ['Biru', 'RPL', 'Laki-Laki']
// const arrayKamu = ['Merah', 'RPL', 'Perempuan']

// const mergeArray = arrayAku.concat(arrayKamu)

// mergeArray.map((value, index) => console.log(index, value))

const datas = 
[
    {
        name : 'Fikri',
        usia : 19,
        alamat : "Cimahi"
    },
    {
        name : 'Arya',
        usia : 18,
        alamat : "Padalarang"
    },
    {
        name : 'Zaki',
        usia : 18,
        alamat : "Cibogo"
    },
]
datas.map((values, index) => {
    console.log(values.name, values.alamat)
})