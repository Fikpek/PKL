// let Barudak = [
//     {
//         name: "arya",
//         age: 17,
//         stack: "Laravel"
//     },
//     {
//         name: "Fikri",
//         age: 20,
//         stack: "Laravel"
//     },
//     {
//         name: "Suep",
//         age: 18,
//         stack: "Java Script"
//     },
// ]










// lulus =Barudak
// .sort((a,b) => b.age - a.age)
// .filter((x) => x.age >= 18 ).map((values)=> {

//     let pesan = values.age === 20 ?
//     'selamat anda dewasa':
//     'anda cukup matang';

//     console.log(values.name,values.age,pesan)
// } )


// let Barudak = [
//     {
//         name: "arya",
//         kelas: "12 rpl a",
//         stack: "Laravel",
//         age: "18",
    
//     },
//     {
//         name: "suep",
//         kelas: "12 rpl a",
//         stack: "js",
//         age: "19"
//     },
    
//     {
//         name: "fikri",
//         kelas: "12 rpl a",
//         stack: "php",
//         age: "20"
//     },
// ];


// let table = document.getElementById("data")


// Barudak.sort((a,b) => b.age - a.age ).forEach((values) => {

//     let row = document.createElement("tr")


//     let name = document.createElement("td")
//     name.innerHTML = values.name
//     row.appendChild(name)

//     let kelas = document.createElement("td")
//     kelas.innerHTML = values.kelas
//     row.appendChild(kelas)

//     let stack = document.createElement("td")
//     stack.innerHTML = values.stack
//     row.appendChild(stack)

//     let age = document.createElement("td")
//     age.innerHTML = values.age
//     row.appendChild(age)



    

//     table.appendChild(row)

    
// })





// 1. TUGAS KE SATU 

// let Lsegitiga = (a,t) => (console.log(0.5 * a * t))
// let Llingkaran = (r) => (console.log(3.14 * r * r))
// let Lpersegi = (p,l) => (console.log(p * l))
// let Ljajar = (p,l) => (console.log(p * l))


// Lsegitiga(10,3)
// Llingkaran(10)
// Lpersegi(50,2)
// Ljajar(9,2)



// 2. TUGAS KE DUA

let gaji = (nama,gaji,hari) => {
    console.log(`Karyawan dengan nama: ${nama} Gaji Perhari : ${gaji} jumlah masuk: ${hari}`)

    let rajin = hari >= 100 ? 'Karyawan yang rajin dan teladan' : 'sering bolos'

    console.log(rajin)

    setTimeout( () =>{
        console.log(`jadi total gaji yang di dapatkan adalah: ${gaji * hari}`)
        
    },5000)

}

gaji('fikri',10000,99)






