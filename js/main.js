onload = () => {
  const audio = new Audio('../las-mañanitas.mp3');
  audio.volume = 0.5;
  
  // Intentar reproducir automáticamente
  audio.play().catch(() => {
    // Si falla, mostrar botón
    const btn = document.createElement('button');
    btn.textContent = '🎵 Reproducir música';
    btn.style.cssText = 'position: fixed; top: 20px; right: 20px; padding: 10px 20px; cursor: pointer; z-index: 1000;';
    btn.onclick = () => {
      audio.play();
      btn.remove();
    };
    document.body.appendChild(btn);
  });

  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    const titles = ('Feliz cumpleaños!!').split('')
    const titleElement = document.getElementById('title');
    let index = 0;
    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300);
      }
    }
    appendTitle();
    clearTimeout(c);
  }, 1000);
};