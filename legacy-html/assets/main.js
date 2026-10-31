// WhatsApp click-to-chat: one number, a pre-filled message per button.
var WHATSAPP_NUMBER = '971566735968';
document.querySelectorAll('[data-wa]').forEach(function (el) {
  el.href = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(el.dataset.wa);
  el.target = '_blank';
  el.rel = 'noopener';
});

// Mobile menu
var toggle = document.querySelector('.nav__toggle');
var menu = document.getElementById('menu');
toggle.addEventListener('click', function () {
  var open = menu.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', open);
  toggle.textContent = open ? 'Close' : 'Menu';
});
menu.querySelectorAll('a[href^="#"]').forEach(function (a) {
  a.addEventListener('click', function () {
    menu.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.textContent = 'Menu';
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

// Nav turns solid after leaving the hero
var nav = document.querySelector('.nav');
function onScroll(){ nav.classList.toggle('is-solid', window.scrollY > 40); }
window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
