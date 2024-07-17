// JavaScript can be used for additional interactivity if needed
document.addEventListener("DOMContentLoaded", function() {
    // Example: Highlight the active navigation link
    const currentLocation = location.href;
    const menuItem = document.querySelectorAll('nav ul li a');
    const menuLength = menuItem.length;
    for (let i = 0; i < menuLength; i++) {
        if (menuItem[i].href === currentLocation) {
            menuItem[i].className += " active";
        }
    }

    // Redirect mobile users
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        window.location.href = "https://treesoftprojects.github.io/m/";
    }
});
