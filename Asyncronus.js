// Callback
const notify = () => {
    console.log("download sudah selesai ....");
}

const url ="https://github.com/ramdani21";
const download = (url,callback) =>{
    setTimeout(function() {
        callback();
    },5000);

    console.log("downloading dari url"+ url);
    setTimeout(function() {
        console.log("Prosess download");
    },1000);
}
download(url,notify);

// Promise
function ambilData() {
    console.log("Mengambil data...")
    return new Promise()
}