let ligaIndonesia = ['Persib', 'Persija', 'Arema']

// 1.Push : Menambahkan data di belakang Array
ligaIndonesia.push("Bali United")
console.log(ligaIndonesia)

// 2.Pop : Menghapus data data di belakang Array
ligaIndonesia.pop()
console.log(ligaIndonesia)

// 3.Unshift : Menambah nilai pada index ke-0
ligaIndonesia.unshift('SKC')
console.log(ligaIndonesia)

// 4.Shift : Menghapus nilai pada elemen paling awal
ligaIndonesia.shift()
console.log(ligaIndonesia)

// 5.Sort : Untuk mengurutkan nilai secara scanding pada isi Array
ligaIndonesia.sort()
console.log(ligaIndonesia)

let Angka = [2, 7, 1, 6, 8]
Angka.sort()
console.log(Angka)

ligaIndonesiaString = ligaIndonesia.join(" ")
console.log(ligaIndonesiaString)

ligaIndonesiaArray = ligaIndonesiaString.split(" ")
console.log(ligaIndonesiaArray)

let Scores = [98, 90, 70, 84]
let [first, second, ...restOfScores] = Scores
console.log(first)
console.log(second)

