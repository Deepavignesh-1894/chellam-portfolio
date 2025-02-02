document.addEventListener('DOMContentLoaded', () => {
    // Get all elements with the 'animation' class
    const animations = document.querySelectorAll('.animation');

    // Check if animations exist
    if (animations.length === 0) {
        console.error('No animations found!');
        return;
    }

    // Function to check if the element is in the viewport
    function checkVisibility() {
        animations.forEach((animation) => {
            const rect = animation.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                animation.classList.add('visible');
            }
        });
    }

    // Initialize visibility check
    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('load', checkVisibility);

    // Call checkVisibility initially to handle the already visible elements
    checkVisibility();
});
