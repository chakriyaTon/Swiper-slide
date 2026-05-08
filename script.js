/* ================================================
   HERO SLIDER — script.js
   ================================================ */

window.addEventListener('load', function () {

  var root   = document.getElementById('hs4');
  if (!root) return;

  var slides = root.querySelectorAll('.s');
  var dotsEl = root.querySelector('.dots');
  var rfg    = document.getElementById('hs4rfg');
  var rtx    = document.getElementById('hs4rtx');
  var N      = slides.length;
  var DELAY  = 4500;       // ms between slides
  var cur    = 0;
  var raf, t0, paused = false;

  /* ── Build dots ── */
  for (var i = 0; i < N; i++) {
    (function (idx) {
      var d = document.createElement('button');
      d.className = 'dot' + (idx === 0 ? ' on' : '');
      d.setAttribute('aria-label', 'Go to slide ' + (idx + 1));
      d.addEventListener('click', function () { go(idx); });
      dotsEl.appendChild(d);
    })(i);
  }
  var dots = dotsEl.querySelectorAll('.dot');

  /* ── Switch to slide n ── */
  function show(n) {
    slides[cur].classList.remove('on');
    dots[cur].classList.remove('on');
    cur = (n + N) % N;
    slides[cur].classList.add('on');
    dots[cur].classList.add('on');
  }

  /* ── Go to slide + restart countdown ── */
  function go(n) {
    cancelAnimationFrame(raf);
    show(n);
    if (!paused) tick();
  }

  /* ── rAF countdown with progress ring ── */
  function tick(ts) {
    if (!ts) { raf = requestAnimationFrame(tick); return; }
    if (!t0) t0 = ts;

    var elapsed  = ts - t0;
    var progress = Math.min(elapsed / DELAY, 1);
    var offset   = (125.6 * (1 - progress)).toFixed(2);

    if (rfg) rfg.style.strokeDashoffset = offset;
    if (rtx) rtx.textContent = Math.ceil((DELAY - elapsed) / 1000) + 's';

    if (progress < 1) {
      raf = requestAnimationFrame(tick);
    } else {
      t0 = null;
      go(cur + 1);
    }
  }

  /* ── Arrow buttons ── */
  root.querySelector('.prv').addEventListener('click', function () { go(cur - 1); });
  root.querySelector('.nxt').addEventListener('click', function () { go(cur + 1); });

  /* ── Keyboard navigation ── */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft')  go(cur - 1);
    if (e.key === 'ArrowRight') go(cur + 1);
  });

  /* ── Touch / mouse drag ── */
  var sx = null;

  root.addEventListener('mousedown',  function (e) { sx = e.clientX; });
  root.addEventListener('touchstart', function (e) { sx = e.touches[0].clientX; }, { passive: true });

  root.addEventListener('mouseup', function (e) {
    if (sx !== null && Math.abs(e.clientX - sx) > 48) {
      go(e.clientX < sx ? cur + 1 : cur - 1);
    }
    sx = null;
  });

  root.addEventListener('touchend', function (e) {
    var dx = e.changedTouches[0].clientX - sx;
    if (Math.abs(dx) > 48) go(dx < 0 ? cur + 1 : cur - 1);
    sx = null;
  });

  /* ── Pause on hover ── */
  root.addEventListener('mouseenter', function () {
    paused = true;
    cancelAnimationFrame(raf);
    if (rtx) rtx.textContent = '';
  });

  root.addEventListener('mouseleave', function () {
    paused = false;
    t0 = null;
    tick();
  });

  /* ── Start ── */
  tick();

});
