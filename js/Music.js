document.addEventListener("DOMContentLoaded", function() {
    const greeting = document.getElementById('greeting');

    const updateGreeting = () => {
        const now = new Date();
        const hour = now.getHours();
        if (hour < 12) {
            greeting.textContent = 'Buenos Días ✨';
        } else if (hour < 18) {
            greeting.textContent = 'Buenas Tardes ✨';
        } else {
            greeting.textContent = 'Buenas Noches ✨';
        }
    };
    updateGreeting();
});
