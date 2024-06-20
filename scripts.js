document.addEventListener('DOMContentLoaded', function() {
    const title = document.getElementById('animated-title');
    const titleText = title.textContent;
    const letters = titleText.split('');// Function to animate letters
    function animateLetters() {
        let newTitle = '';
        letters.forEach((letter, index) => {
            // Wrap each letter in a span with animation
            newTitle += `<span style="display: inline-block; animation: scaleIn 1s ease ${index * 0.1}s forwards;">${letter}</span>`;
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