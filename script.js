// --- MATRIX RAIN EFFECT ---
const canvas = document.getElementById('matrix-bg');
const ctx = canvas.getContext('2d');

// Set canvas size to full screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Karakter untuk matrix (Katakana + Angka)
const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリグズブヅプウゥクスツヌフムユュルグズブヅプエェケセテネヘメレゲゼデベペオォコソトノホモヨョロゴゾドボポヴッン';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const nums = '0123456789';
const alphabet = katakana + latin + nums;

const fontSize = 14;
// Menghitung jumlah kolom berdasarkan lebar layar
const columns = canvas.width / fontSize;

// Array untuk menyimpan posisi Y setiap kolom
const rainDrops = Array.from({ length: columns }).fill(1);

function drawMatrix() {
    // Membuat efek trail (jejak) dengan menimpa layar dengan warna hitam transparan
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Warna teks hijau neon
    ctx.fillStyle = '#0f0'; 
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < rainDrops.length; i++) {
        // Mengambil karakter acak
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        // Menggambar karakter
        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        // Mengatur ulang posisi Y ke atas secara acak jika sudah melewati batas bawah layar
        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            rainDrops[i] = 0;
        }
        // Menambah posisi Y untuk frame berikutnya
        rainDrops[i]++;
    }
}

// Jalankan animasi matrix setiap 30ms
setInterval(drawMatrix, 30);

// Resize canvas jika ukuran window berubah
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});


// --- NAVIGATION & INTERFACE ---
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');
const contentSections = document.querySelectorAll('.content-section');

// Toggle Mobile Menu
menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-links') && !e.target.closest('.menu-btn')) {
        navLinks.classList.remove('active');
    }
});

// Handle Navigation Click
navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Update Active Link State
        navItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');

        // Hide all sections
        contentSections.forEach(section => {
            section.classList.remove('active');
        });

        // Show target section with flicker animation
        const sectionId = item.getAttribute('data-section');
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
            if(window.innerWidth < 768) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
        navLinks.classList.remove('active'); // Close mobile menu
    });
});

// --- TYPEWRITER EFFECT (Hacker Style) ---
const texts = ["INITIALIZING...", "PGSD STUDENT", "WEB ENTHUSIAST", "ED-TECH INNOVATOR"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
const typewriterElement = document.querySelector(".typewriter-text");

(function type() {
    if (count === texts.length) { count = 0; }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    typewriterElement.textContent = letter;

    let typeSpeed = 100; // Kecepatan ngetik standar

    if (letter.length === currentText.length) {
        typeSpeed = 2000; // Jeda setelah selesai ngetik satu kata
        count++;
        index = 0;
    }
    
    setTimeout(type, typeSpeed);
})();
