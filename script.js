const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.site-header nav');
menuButton?.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  menuButton.setAttribute('aria-label', expanded ? 'Buka menu' : 'Tutup menu');
  nav.classList.toggle('open', !expanded);
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open'); menuButton?.setAttribute('aria-expanded', 'false');
}));
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelectorAll('a[href="https://instagram.com/alfatih.umroh"]').forEach(link => {
  link.href = 'https://www.instagram.com/alfatih.umroh/';
});
document.querySelector('.hero h1').innerHTML = 'Umroh Nyaman dan Terarah<br /><em>Bersama Alfatih.</em>';
document.querySelector('.features').innerHTML = `
  <article><span class="num">01</span><h3>Izin PPIU</h3><p>Nomor PPIU tercantum untuk dikonfirmasi kembali sebelum transaksi.</p></article>
  <article><span class="num">02</span><h3>Pendampingan muthawwif</h3><p>Informasi pendampingan perjalanan disampaikan sesuai pilihan paket.</p></article>
  <article><span class="num">03</span><h3>Hotel nyaman & strategis</h3><p>Tanyakan pilihan dan detail hotel terbaru kepada admin.</p></article>
  <article><span class="num">04</span><h3>Transportasi</h3><p>Rincian transportasi diinformasikan berdasarkan paket perjalanan.</p></article>
  <article><span class="num">05</span><h3>Konsumsi</h3><p>Ketentuan konsumsi dapat dikonfirmasi bersama admin sebelum mendaftar.</p></article>
  <article><span class="num">06</span><h3>Layanan jamaah</h3><p>Tim admin siap membantu kebutuhan informasi jamaah.</p></article>`;
