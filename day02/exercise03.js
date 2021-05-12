// 1. cek nilai ganjil genap antara 1-100
// 2. bikin tangga
//     #
//     ##
//     ###
//     ####
//     #####
//     ######
// 3. 
//     1
//     2 3
//     3 4 5
//     5 6 7 8

// soal nomor 1

// let angka = 73;

// if (1 <= angka <= 100) {
//     if (angka%2 === 0) {
//         console.log(`angka ${angka} adalah bilangan genap`)
//     } else {
//         console.log(`angka ${angka} adalah bilangan ganjil`)
//     }
// } else {
//     console.log('angka berada di luar rentang 1-100')
// }

// soal nomor 2
// let angka = 5;

// for (let index = 1; index <= angka; index++) {
//     console.log('#'.repeat(index));
// }

// soal nomor 3

let baris = 4;
let angka = 1;
let temp = "";

for (let index = 1; index <= baris; index++) {
    temp = "";
    for (let index2 = 1; index2 <= index; index2++) {
        temp = temp+" "+angka;
        angka++;        
    }
    console.log(temp);    
}