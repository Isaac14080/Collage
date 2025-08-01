// Crear corazones flotantes
setInterval(() => {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.innerHTML = '❤️';
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}, 800);
