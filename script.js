const toggleButton = document.getElementById('theme-toggle');
const body = document.body;
const icon = toggleButton.querySelector('i');

// 1. Check Local Storage for saved preference
const savedTheme = localStorage.getItem('theme');

// 2. Apply saved theme on load
if (savedTheme === 'light') {
    body.classList.add('light-mode');
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon'); // Change icon to moon for light mode
}

// 3. Listen for clicks
toggleButton.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    
    // Toggle Icon
    if (body.classList.contains('light-mode')) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    }
});