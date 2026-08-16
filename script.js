// ==========================================
// MOBILE MENU
// ==========================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


// ==========================================
// CLOSE MOBILE MENU AFTER CLICK
// ==========================================

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


// ==========================================
// ORDER BUTTON
// ==========================================

const orderBtn = document.getElementById("orderBtn");

orderBtn.addEventListener("click", () => {

    alert(
        "☕ Your Coffee + Cake Combo has been added!\n\nThank you for choosing Brew & Bite!"
    );

});


// ==========================================
// SIMPLE SCROLL ANIMATION
// ==========================================

const cards = document.querySelectorAll(
    ".menu-card, .contact-card, .about-image, .hero-card"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform =
                    "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(card);

});