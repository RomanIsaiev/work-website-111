document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.formats .list .list-item');

  cards.forEach(card => {
    const toggleBtn = card.querySelector('.format-more');
    const hiddenInfo = card.querySelector('.hidden-info');

    toggleBtn.addEventListener('click', () => {
      const isVisible = hiddenInfo.classList.toggle('visible');

      toggleBtn.textContent = isVisible ? 'скрыть детали' : 'узнать детали';
    });
  });
});
