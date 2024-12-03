const container = document.querySelector('.movies-container');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

let currentIndex = 0;
const totalMovies = document.querySelectorAll('.movie').length;
const moviesToShow = 4;

nextBtn.addEventListener('click', () => {
  if (currentIndex < totalMovies - moviesToShow) {
    currentIndex += moviesToShow;
    container.style.transform = `translateX(-${currentIndex * 25}%)`;
  }
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex -= moviesToShow;
    container.style.transform = `translateX(-${currentIndex * 25}%)`;
  }
});