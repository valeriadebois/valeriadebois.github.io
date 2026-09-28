// Phone menu: open and close the full-screen overlay.
(function () {
  var btn = document.querySelector('.menu-btn');
  var overlay = document.getElementById('menu-overlay');
  if (!btn || !overlay) return;
  function setOpen(open) {
    overlay.hidden = !open;
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open) overlay.querySelector('a').focus(); else btn.focus();
  }
  btn.addEventListener('click', function () { setOpen(true); });
  overlay.querySelector('.overlay-close').addEventListener('click', function () { setOpen(false); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !overlay.hidden) setOpen(false);
  });
})();

// Home: show the service cards when their section scrolls into view.
(function () {
  var section = document.querySelector('[data-reveal]');
  if (!section) return;
  function show() { section.classList.add('is-revealed'); }
  if (!('IntersectionObserver' in window)) { show(); return; }
  var obs = new IntersectionObserver(function (entries) {
    if (entries.some(function (e) { return e.isIntersecting; })) { show(); obs.disconnect(); }
  }, { threshold: 0.18 });
  obs.observe(section);
})();
