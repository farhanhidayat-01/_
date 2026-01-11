// --- MATRIX RAIN EFFECT (TETAP SAMA) ---
// (Biarkan kode Matrix Rain yang lama di sini, jangan dihapus)
// ... kode matrix ...

// --- WELCOME SCREEN LOGIC (BARU) ---
document.addEventListener('DOMContentLoaded', () => {
    const welcomeScreen = document.getElementById('welcome-screen');
    const enterBtn = document.getElementById('enter-btn');

    // Saat tombol MASUK diklik
    enterBtn.addEventListener('click', () => {
        welcomeScreen.style.opacity = '0';
        setTimeout(() => {
            welcomeScreen.style.display = 'none';
        }, 800);
    });
});

// --- TYPEWRITER EFFECT (UPDATE BAHASA INDONESIA) ---
const texts = ["MEMUAT SISTEM...", "MAHASISWA PGSD", "PENGEMBANG ED-TECH", "INOVATOR PENDIDIKAN"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
const typewriterElement = document.querySelector(".typewriter-text");

(function type() {
    if (count === texts.length) { count = 0; }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    if(typewriterElement) {
        typewriterElement.textContent = letter;
    }

    let typeSpeed = 100;

    if (letter.length === currentText.length) {
        typeSpeed = 2000;
        count++;
        index = 0;
    }
    
    setTimeout(type, typeSpeed);
})();

// --- NAVIGATION & INTERFACE (TETAP SAMA) ---
// (Copy paste kode navigasi yang lama di sini)
// ... kode navigasi ...
