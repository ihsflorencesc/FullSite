// assets/js/main.js
(function(){
  // banner close
  const close = document.querySelector('.announce .close');
  const bar = document.querySelector('.announce');
  if (close && bar) {
    const key = 'ihs_banner_closed';
    if (localStorage.getItem(key) === '1') {
      bar.style.display = 'none';
      document.querySelector('header.nav').style.top = '0px';
    }
    close.addEventListener('click', ()=>{
      bar.style.display = 'none';
      localStorage.setItem(key, '1');
      document.querySelector('header.nav').style.top = '0px';
    });
  }
  // mobile menu
  const hdr = document.querySelector('header.nav');
  const btn = document.querySelector('.mobile-toggle');
  if (btn) btn.addEventListener('click', ()=> hdr.classList.toggle('open'));

  // smooth scroll for same-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      const id = a.getAttribute('href');
      if(id.length>1){
        const el = document.querySelector(id);
        if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth', block:'start'}); }
      }
    });
  });

  // current year
  const yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();

  // Optional: forward query params to JotForm if iframe has data-forward-search attr
  document.querySelectorAll('iframe[data-forward-search="1"]').forEach(iframe => {
    const src = new URL(iframe.getAttribute('src'), location.href);
    const qs = location.search.replace(/^\?/, '');
    if (qs) {
      src.search = (src.search ? src.search + '&' : '?') + qs;
      iframe.setAttribute('src', src.toString());
    }
  });
})();
