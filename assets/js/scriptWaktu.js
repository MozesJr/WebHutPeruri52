document.addEventListener('DOMContentLoaded', function () {
    var countdownDate = new Date('2023-09-30T07:00:00');
    var registerButton = document.getElementById('registerButton');
    var registerButton1 = document.getElementById('registerButton1');

    function showButton() {
        registerButton.style.display = 'inline-block';
        registerButton1.style.display = 'block';
    }

    function updateCountdown() {
        var now = new Date();
        var timeRemaining = countdownDate - now;

        if (timeRemaining <= 0) {
            showButton();
        }
    }

    setInterval(updateCountdown, 1000); // Periksa setiap detik
});