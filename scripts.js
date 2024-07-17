document.addEventListener("DOMContentLoaded", function() {
    // Redirect mobile users
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        window.location.href = "https://treesoftprojects.github.io/m/";
    }

    // Create a circle that follows the cursor
    const circle = document.querySelector('.background-circle');
    document.addEventListener('mousemove', function(e) {
        const x = e.clientX;
        const y = e.clientY;
        circle.style.left = x + 'px';
        circle.style.top = y + 'px';
    });
});
