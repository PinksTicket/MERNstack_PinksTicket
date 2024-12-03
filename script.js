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
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const suggestionsBox = document.getElementById('suggestionsBox');

    // Predefined list of movies for suggestions
    const movieSuggestions = [
        "Pushpa: The Rule - Part 2",
        "Gladiator 2",
        "Bhool Bhulaiyaa 3",
        "The Sabarmati Report",
        "Singham Again",
        "Venom",
        "Wild Robot",
        "Kanguva",
        "RRR",
        "Avatar: The Way of Water",
        "Inception",
        "The Dark Knight"
    ];

    // Show suggestions as user types
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        suggestionsBox.innerHTML = ''; // Clear previous suggestions
        if (query) {
            const filteredSuggestions = movieSuggestions.filter(movie => 
                movie.toLowerCase().includes(query)
            );

            // Populate the suggestions box
            filteredSuggestions.forEach(movie => {
                const suggestionDiv = document.createElement('div');
                suggestionDiv.textContent = movie;
                suggestionsBox.appendChild(suggestionDiv);

                // On click, populate the input and clear suggestions
                suggestionDiv.addEventListener('click', () => {
                    searchInput.value = movie;
                    suggestionsBox.innerHTML = '';
                    suggestionsBox.style.display = 'none';
                });
            });

            // Show the suggestions box
            suggestionsBox.style.display = 'block';
        } else {
            suggestionsBox.style.display = 'none'; // Hide if input is empty
        }
    });

    // Hide suggestions box when clicking outside
    document.addEventListener('click', (e) => {
        if (!suggestionsBox.contains(e.target) && e.target !== searchInput) {
            suggestionsBox.style.display = 'none';
        }
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
    const totalGridItems = 8;
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