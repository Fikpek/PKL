// // 1.
// let buah = ['apel', 'mangga', 'jeruk', 'stroberi', 'nanas']
// buah.push('semangka')
// buah.pop()
// buah.shift()
// buah.unshift('Arya')
// console.log(buah);

// // 2.
// let angka = [8, 5, 7, 3, 1, 4, 15]
// angka.sort()
// console.log(angka);

// // let angkaTertinggi = Math.(...angka)
// // console.log(angkaTertinggi);

// // 3.
// let hewan = ['Arya', 'Fikri', 'Suep']
// console.log(hewan);
// hewanTerbalik = hewan.reverse()
// console.log(hewanTerbalik);

let ball = document.getElementById("ball");
let posX = 0, posY = 0;
let dx = 2, dy = 2;

function bounce() {
    let width = window.innerWidth - ball.offsetWidth;
    let height = window.innerHeight - ball.offsetHeight;

    posX += dx;
    posY += dy;

    if (posX <= 0 || posX >= width) dx = -dx; // Pantul horizontal
    if (posY <= 0 || posY >= height) dy = -dy; // Pantul vertikal

    ball.style.left = posX + "px";
    ball.style.top = posY + "px";

    requestAnimationFrame(bounce);
}

requestAnimationFrame(bounce);