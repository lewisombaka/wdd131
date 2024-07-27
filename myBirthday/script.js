// Smoothly scroll to the specified section
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// Start the celebration animation
function startAnimation() {
    const balloons = document.getElementById('balloons');
    const confetti = document.getElementById('confetti');

    balloons.style.display = 'flex';
    confetti.innerHTML = ''; // Clear existing confetti

    // Create and add confetti elements
    for (let i = 0; i < 100; i++) {
        const confetto = document.createElement('div');
        confetto.style.background = getRandomColor();
        confetto.style.left = Math.random() * 100 + 'vw';
        confetto.style.animationDuration = Math.random() * 5 + 5 + 's';
        confetto.style.transform = `rotate(${Math.random() * 360}deg)`;
        confetti.appendChild(confetto);
    }

    // Remove balloons and confetti after animation ends
    setTimeout(() => {
        balloons.style.display = 'none';
        confetti.innerHTML = '';
    }, 10000); // Duration of animation (10 seconds)
}

// Get a random color for confetti
function getRandomColor() {
    const colors = ['#FF5252', '#FFEB3B', '#1976D2', '#4CAF50', '#FF9800'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Toggle the responsive menu on small screens
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
