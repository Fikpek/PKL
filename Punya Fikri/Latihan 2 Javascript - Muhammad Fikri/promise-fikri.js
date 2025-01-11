const myCountPromise = (angka) => {
    return new Promise((resolve, reject) => {
        if (angka !== undefined) {
            setTimeout(() => {
               resolve(angka * 2)
            }, 2000);
        }
    })
}
myCountPromise(12)
 .then((result) => {
    console.log(result)
 })
.catch((error) => {
    console.log(error)
})
