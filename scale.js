/* Desktop responsiveness for a fixed-1440 design.
   The site was authored at a 1440px canvas. Below 1440 the CSS breakpoints in
   responsive.css handle reflow. At/above 1440 we proportionally scale the whole
   canvas to fill the viewport (preserving the exact approved proportions),
   capped so it never gets oversized on ultra-wide monitors.

   We use CSS `zoom` (widely supported in 2026 browsers) driven by
   window.innerWidth, which is stable under zoom so there is no resize feedback
   loop. Mobile/tablet widths (<=1440) are left untouched (zoom = 1). */
(function () {
  var BASE = 1440;   // design canvas width
  var MAX  = 1.5;    // cap: fills up to ~2160px, then centers on wider screens

  function apply() {
    var w = window.innerWidth || document.documentElement.clientWidth;
    var z = w > BASE ? Math.min(w / BASE, MAX) : 1;
    document.documentElement.style.zoom = z;
  }

  apply();
  window.addEventListener('resize', apply);
  window.addEventListener('orientationchange', apply);
})();
