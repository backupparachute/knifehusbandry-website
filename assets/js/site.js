// Minimal mobile nav toggle. No Bootstrap JS needed for this site.
(function () {
  var toggler = document.querySelector('[data-nav-toggler]');
  var menu = document.querySelector('[data-nav-menu]');
  if (!toggler || !menu) return;

  toggler.addEventListener('click', function () {
    var open = menu.classList.toggle('is-open');
    toggler.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
})();
