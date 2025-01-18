const carousel = document.getElementById('cardCarousel');
  const indicators = document.querySelectorAll('.indicator');
  const cardWidth = carousel.querySelector('.card').offsetWidth + 20; // Card width + margin
  const visibleCards = 3; // Number of cards visible at a time
  let currentIndex = 0;

  const scrollCarousel = (direction) => {
    const scrollAmount = direction === 'next' ? cardWidth : -cardWidth;
    carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });

    const maxIndex = Math.ceil(carousel.children.length / visibleCards) - 1;

    if (direction === 'next' && currentIndex < maxIndex) {
      currentIndex++;
    } else if (direction === 'prev' && currentIndex > 0) {
      currentIndex--;
    }

    updateIndicators();
  };

  const updateIndicators = () => {
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle('active', index === currentIndex);
    });
  };