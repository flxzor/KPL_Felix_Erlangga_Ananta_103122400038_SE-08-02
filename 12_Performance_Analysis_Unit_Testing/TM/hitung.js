export function tambahPengitung(terkini, jumlah) {
    if (typeof terkini !== 'number' || typeof jumlah !== 'number') {
        throw new Error('Kedua parameter harus berupa angka');
    }

    return terkini + jumlah;
}