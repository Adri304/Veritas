// Toggle menú responsive
const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');

menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// === MODO VERITAS ===
const veritasBtn = document.getElementById('veritasToggle');
let modoActivo = false;

const frasesOcultas = [
  "[La verdad no se impone, se revela.]",
  "[No todo lo que se dice, se siente.]",
  "[El silencio también comunica.]",
  "[Ver no siempre es comprender.]",
  "[Las palabras mienten, las miradas no.]"
];

// Inserta frases ocultas aleatoriamente
window.addEventListener('DOMContentLoaded', () => {
  const parrafos = document.querySelectorAll('p');
  parrafos.forEach((p, i) => {
    if (i % 2 === 0) {
      const span = document.createElement('span');
      span.classList.add('oculto');
      span.textContent = " " + frasesOcultas[Math.floor(Math.random() * frasesOcultas.length)];
      p.appendChild(span);
    }
  });
});

veritasBtn.addEventListener('click', () => {
  modoActivo = !modoActivo;
  document.body.classList.toggle('modo-veritas', modoActivo);
  veritasBtn.innerText = modoActivo ? '🧿' : '👁️';
  veritasBtn.title = modoActivo ? 'Desactivar Modo Veritas' : 'Activar Modo Veritas';
});

// === BOTÓN VOLVER ARRIBA ===
const btnArriba = document.getElementById('btnArriba');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    btnArriba.style.display = 'block';
  } else {
    btnArriba.style.display = 'none';
  }
});

btnArriba.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
