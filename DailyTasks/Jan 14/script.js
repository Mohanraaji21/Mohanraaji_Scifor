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


  // Navigation Highlights

  const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(link => link.classList.remove('active')); // Remove 'active' class from all links
        this.classList.add('active'); // Add 'active' class to the clicked link
    });
});


// Back to Top Button

const backToTopButton = document.getElementById('back-to-top');

// Show the button when scrolled to the second section
window.addEventListener('scroll', () => {
    const secondSection = document.getElementById('services');
    const secondSectionTop = secondSection.getBoundingClientRect().top + window.scrollY;

    if (window.scrollY >= secondSectionTop - window.innerHeight / 2) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Scroll back to the top when the button is clicked
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


// Responsive Navigation

function showSideBar(){
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex';

}
function hideSideBar(){
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none';

}