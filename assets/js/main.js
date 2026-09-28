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
