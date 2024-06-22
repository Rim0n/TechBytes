document.addEventListener('DOMContentLoaded', function() {
    const title = document.getElementById('animated-title');
    const titleText = title.textContent;
    const words = titleText.split(' '); // Split the text into words

    // Function to animate letters
    function animateLetters() {
        let newTitle = '';
        words.forEach((word, wordIndex) => {
            word.split('').forEach((letter, letterIndex) => {
                // Wrap each letter in a span with animation
                newTitle += `<span style="display: inline-block; animation: rotateIn 1s ease ${(wordIndex * 0.1 + letterIndex * 0.1)}s forwards;">${letter}</span>`;
            });
            newTitle += ' '; // Add space after each word
        });
        title.innerHTML = newTitle;
    }
    
    // Initial animation trigger
    animateLetters();
    
    // Interval for continuous animation every 5 seconds
    setInterval(animateLetters, 5000); // 5000ms = 5 seconds
    
    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    themeToggle.addEventListener('click', function() {
        // Toggle between 'theme-light' and 'theme-dark' classes on body
        if (body.classList.contains('theme-light')) {
            body.classList.remove('theme-light');
            body.classList.add('theme-dark');
        } else {
            body.classList.remove('theme-dark');
            body.classList.add('theme-light');
        }
    });
});

// Add this CSS to your stylesheet for the rotateIn animation
const style = document.createElement('style');
style.innerHTML = `
@keyframes rotateIn {
    0% {
        opacity: 0;
        transform: rotate(-200deg);
    }
    100% {
        opacity: 1;
        transform: rotate(0);
    }
}
`;
document.head.appendChild(style);
