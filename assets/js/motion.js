(function(){
  if (window.CSS && CSS.supports && CSS.supports('animation-timeline: view()')) return;
  if (!('IntersectionObserver' in window)) return;
  document.documentElement.classList.add('io');
  var io = new IntersectionObserver(function(es){
    es.forEach(function(e){ if (e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  }, {rootMargin: '0px 0px -10% 0px', threshold: 0.12});
  document.querySelectorAll('.rv,.rv2,.rv3,.stat,.giant').forEach(function(el){ io.observe(el); });
})();
