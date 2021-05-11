let ttl = `Bandung/21/2/2015`;
let tempat = ttl.split('/')[0];
let tanggal = ttl.split('/')[1];
let bulan = parseInt(ttl.split('/')[2]);
let tahun = ttl.split('/')[3];

console.log(`cek bulan ${bulan}`)
if (1 <= tanggal <= 31 && 1 <= bulan <= 12 && 1900 <= tahun <= 2021) {
    switch (bulan) {
        case 1:
            bulan = "Januari";
            break;
        case 2:
            bulan = `Februari`;
            break;
        case 3:
            bulan = `Maret`;
            break;
        case 4:
            bulan = `April`;
            break;
        case 5:
            bulan = `Mei`;
            break;
        default:
            break;
    }
    console.log(`${tempat}, ${tanggal}/${bulan}/${tahun}`)   
} else {
    console.log("tanggal lahir tidak valid")    
}