// 1.Fungsi bisa ditampung di variabel
// 2.Fungsi bisa ditampung berulang kali dengan memanggil fungsi tersebut

const PrintHasil = () => 
{
    console.log("Hehehehe")
}
PrintHasil()

const kaliLima = (angka) => 
{
    return angka*5
}
let hasilKaliLima = kaliLima(30)
console.log(hasilKaliLima)

const hitungLuasSegitiga = (alas, tinggi) =>
{
    let hasil = alas*tinggi/2
    console.log("Hasil luas segitiga", hasil)
}
let hasilSegitiga = hitungLuasSegitiga(5,10)
console.log(hasilSegitiga)

const print20Kali = () =>
{
    for(i=1; i>=20; i++)
    {
        console.log('Fikri')
    }
}
print20Kali()