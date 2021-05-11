let ipMhs = 1;

switch (true) {
    case ipMhs <= 2.5:{
        console.log(`ulang 4 tahun lagi ya`);
        // break;
        return 1;
    }
    case ipMhs <= 3:{
        console.log(`cukup lah`)
        break;
    }
    case ipMhs <= 3.5:{
        console.log(`Oke nih`)
        break;
    }
    case ipMhs <= 4: {
        console.log(`selamat jadi mapres`);
        break;
    }
    default:
        console.log(`selamat wisuda`)
        break;
}

console.log(`tes`)