function mensaje() {
  alert("Próximamente en IndieVision TV!");
}

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

function volverArriba() {
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

document.addEventListener('DOMContentLoaded', volverArriba);
window.addEventListener('load', volverArriba);
window.addEventListener('pageshow', volverArriba);
