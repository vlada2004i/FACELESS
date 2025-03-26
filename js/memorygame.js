const cards = document.querySelectorAll('.card');
let flippedCards = [];
let lock = false;

cards.forEach(card => {
  card.addEventListener('click', () => {
    if (lock || card.classList.contains('flipped')) return;

    card.classList.add('flipped');
    flippedCards.push(card);

    if (flippedCards.length === 2) {
      lock = true;
      const [first, second] = flippedCards;

      if (first.dataset.image === second.dataset.image) {
        flippedCards = [];
        lock = false;
      } else {
        setTimeout(() => {
          first.classList.remove('flipped');
          second.classList.remove('flipped');
          flippedCards = [];
          lock = false;
        }, 1000);
      }
    }
  });
});