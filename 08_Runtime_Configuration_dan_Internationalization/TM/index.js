import 'dotenv/config';

const BASE_API = process.env.BASE_API;

async function getRates() {
    const res = await fetch(BASE_API);
    const data = await res.json();
    return data.idr;
}

function formatCurrency(value, currency) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency,
        minimumFractionDigits: currency === 'IDR' ? 0 : 2,
    }).format(value);
}

function formatDate(date) {
    return new Intl.DateTimeFormat('id-ID', {
        weekday: 'long',
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    }).format(date);
}

async function convert(amountIDR) {
    const rates = await getRates();

    const cnh = amountIDR * rates.cnh;
    const eur = amountIDR * rates.eur;

    const now = new Date();

    console.log(
        `Kurs ${formatCurrency(amountIDR, 'IDR')} pada ${formatDate(now)} adalah ${formatCurrency(cnh, 'CNY')} dan ${formatCurrency(eur, 'EUR')}`
    );
}

(async () => {
    await convert(25000);
    await convert(50000);
    await convert(100000);
})();