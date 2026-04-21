function DateNow() {
  const sekarang = new Date();

  const formatter = new Intl.DateTimeFormat('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return formatter.format(sekarang);
}

console.log(DateNow());