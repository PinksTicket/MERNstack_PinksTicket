document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");

    // Remove placeholder on focus
    searchInput.addEventListener("focus", () => {
        searchInput.setAttribute("placeholder", "");
    });

    // Restore placeholder on blur
    searchInput.addEventListener("blur", () => {
        searchInput.setAttribute("placeholder", "Search for Movies or Streaming...");
    });
});

const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;
let currentIndex = 0;

        // Function to change slide
        function changeSlide() {
            // Calculate the new transform value
            const translateValue = -currentIndex * 100;
            slides.style.transform = `translateX(${translateValue}%)`;

            // Update active navigation dot
            updateDots();
        }

        // Auto-slide every 5 seconds
        function autoSlide() {
            currentIndex = (currentIndex + 1) % totalSlides;
            changeSlide();
        }

        // Add dots for navigation
        function addNavigationDots() {
            const navDots = document.createElement('div');
            navDots.className = 'nav-dots';

            for (let i = 0; i < totalSlides; i++) {
                const dot = document.createElement('div');
                dot.className = 'nav-dot';
                if (i === 0) dot.classList.add('active'); // Set the first dot as active
                dot.addEventListener('click', () => {
                    currentIndex = i;
                    changeSlide();
                });
                navDots.appendChild(dot);
            }

            document.querySelector('.slider-container').appendChild(navDots);
        }

        // Update active navigation dot
        function updateDots() {
            const dots = document.querySelectorAll('.nav-dot');
            dots.forEach((dot, index) => {
                if (index === currentIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }

        // Previous slide
        function prevSlide() {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            changeSlide();
        }

        // Next slide
        function nextSlide() {
            currentIndex = (currentIndex + 1) % totalSlides;
            changeSlide();
        }
        // Initialize the slider
        addNavigationDots();
        setInterval(autoSlide, 5000); // 5000ms = 5 seconds


    let gridIndex = 0; // Starting position
    const gridItemsPerSlide = 4; // Number of cards visible at a time
    const totalGridItems = document.querySelectorAll(".slides-grid .card").length;
    const slidesGrid = document.querySelector(".slides-grid");
    
    // Function to update the grid slider
    function updateGridSlider() {
        const translateValue = -gridIndex * 100; // Shift by 100% for each slide
        slidesGrid.style.transform = `translateX(${translateValue}%)`;
    }
    
    // Go to the previous grid slide
    function prevGridSlide() {
        gridIndex = Math.max(gridIndex - 1, 0); // Prevent sliding past the first set
        updateGridSlider();
    }
    
    // Go to the next grid slide
    function nextGridSlide() {
        const maxIndex = Math.ceil(totalGridItems / gridItemsPerSlide) - 1;
        gridIndex = Math.min(gridIndex + 1, maxIndex); // Prevent sliding past the last set
        updateGridSlider();
    }
        