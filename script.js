(function () {
  var doc = document;
  var header = doc.getElementById('header');
  var burger = doc.getElementById('burger');
  var nav = doc.getElementById('nav');
  var wa = doc.querySelector('.wa');
  var year = doc.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Menu mobile
  function setMenu(open) {
    nav.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  }
  burger.addEventListener('click', function () {
    setMenu(burger.getAttribute('aria-expanded') !== 'true');
  });
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') setMenu(false);
  });
  doc.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setMenu(false);
  });

  // Header, WhatsApp flutuante
  function onScroll() {
    var y = window.scrollY;
    header.classList.toggle('is-stuck', y > 8);
    if (wa) wa.classList.toggle('is-on', y > 500);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Revelação ao rolar
  var items = doc.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('is-in');
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('is-in'); });
  }

  // Link ativo na navegação
  var links = [].slice.call(nav.querySelectorAll('a[href^="#"]:not(.btn)'));
  var map = links.map(function (a) { return doc.querySelector(a.getAttribute('href')); });
  if ('IntersectionObserver' in window) {
    var so = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          var i = map.indexOf(en.target);
          links.forEach(function (a, k) { a.classList.toggle('is-active', k === i); });
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    map.forEach(function (s) { if (s) so.observe(s); });
  }
})();

// Falha de carregamento de imagens: esconde o ícone quebrado e mantém o layout
document.querySelectorAll('img').forEach(function (img) {
  img.addEventListener('error', function () {
    img.classList.add('is-broken');
    if (img.parentElement && img.parentElement.tagName === 'FIGURE') img.parentElement.classList.add('is-broken');
  });
});
