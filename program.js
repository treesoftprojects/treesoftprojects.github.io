// JavaScript functionality for the TreeSoft Projects website
document.addEventListener('DOMContentLoaded', function() {
    console.log('TreeSoft Projects website loaded successfully!');
    
    // Toggle dark/light mode
    const toggleButton = document.getElementById('modeToggle');
    toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('light-mode');
        toggleButton.textContent = document.body.classList.contains('light-mode') ? '☀️' : '🌙';
    });
});
