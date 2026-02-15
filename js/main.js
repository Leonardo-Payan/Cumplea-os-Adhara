onload = () => {
  const audio = new Audio('../las-mañanitas.mp3');
  audio.volume = 0.5;
  audio.play();

  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    const titles = ('Feliz cumpleaños!!').split('')
    const titleElement = document.getElementById('title');
    let index = 0;
    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300); // 300ms delay
      }
    }
    appendTitle();
    clearTimeout(c);
  }, 1000);
};