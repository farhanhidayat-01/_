// DOM Elements
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');
const contentSections = document.querySelectorAll('.content-section');

// Toggle Mobile Menu
menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Ubah ikon dari bars ke times (X)
    const icon = menuBtn.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-links') && !e.target.closest('.menu-btn')) {
        navLinks.classList.remove('active');
        menuBtn.querySelector('i').classList.remove('fa-times');
        menuBtn.querySelector('i').classList.add('fa-bars');
    }
});

// Handle Navigation
navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Remove active class from all links
        navItems.forEach(nav => nav.classList.remove('active'));
        // Add active class to clicked link
        item.classList.add('active');

        // Hide all sections
        contentSections.forEach(section => {
            section.classList.remove('active');
            section.style.opacity = 0; // Reset opacity for fade in
        });

        // Show target section
        const sectionId = item.getAttribute('data-section');
        const targetSection = document.getElementById(sectionId);
        
        if (targetSection) {
            targetSection.classList.add('active');
            // Small delay to allow CSS transition if needed
            setTimeout(() => {
                targetSection.style.opacity = 1;
            }, 50);
            
            // Scroll to top of main content on mobile
            if(window.innerWidth < 768) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }

        // Close mobile menu
        navLinks.classList.remove('active');
        menuBtn.querySelector('i').classList.remove('fa-times');
        menuBtn.querySelector('i').classList.add('fa-bars');
    });
});

// Typewriter Effect
const texts = ["FUTURE TEACHER", "WEB DEVELOPER", "ED-TECH ENTHUSIAST"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".typewriter-text").textContent = letter;

    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2000); // Tunggu 2 detik setelah selesai ngetik
    } else {
        setTimeout(type, 100);
    }
})();
