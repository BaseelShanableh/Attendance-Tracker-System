let currentIndex = 0;
const slides = document.querySelectorAll('.img-list img');
const totalSlides = slides.length;
const buttons = document.querySelectorAll('.img-btn');
const textContents = [
    {
        title: 'New Breakthrough in Artificial Intelligence',
        description: 'Scientists announce a major advancement in AI technology, bringing us closer to creating machines with human-like intelligence.'
    },
    {
        title: 'Latest Cybersecurity Measures Unveiled',
        description: 'A comprehensive set of cybersecurity measures is introduced to combat the rising threats in the digital landscape.'
    },
    {
        title: 'Revolutionary Tech Startup Raises $50 Million in Funding',
        description: 'A promising tech startup secures a significant funding round to accelerate the development of its groundbreaking products.'
    }
];

function slideImg(index) {
    slides[currentIndex].style.display = 'none';
    buttons[currentIndex].classList.remove('active');
    currentIndex = index;
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }
    slides[currentIndex].style.display = 'block';
    buttons[currentIndex].classList.add('active');
    
    // Update text content based on currentIndex
    document.querySelector('.text-content h2').innerText = textContents[currentIndex].title;
    document.querySelector('.text-content p').innerText = textContents[currentIndex].description;
}

function autoplay() {
    setInterval(() => {
        slideImg(currentIndex + 1);
    }, 3000);
}

// Function to handle button clicks
buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        slideImg(index);
    });
});

// Start autoplay when the page loads
window.addEventListener('load', () => {
    autoplay();
    buttons[currentIndex].classList.add('active'); // Set the initial active button
    // Set initial text content
    document.querySelector('.text-content h2').innerText = textContents[currentIndex].title;
    document.querySelector('.text-content p').innerText = textContents[currentIndex].description;
});

function toggleNav() {
    var sideNav = document.querySelector(".side-nav");
    sideNav.classList.toggle("show-links");
}
