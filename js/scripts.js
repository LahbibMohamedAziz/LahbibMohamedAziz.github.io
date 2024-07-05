document.addEventListener('DOMContentLoaded', function() {
    // Smooth Scroll Navigation
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            } else {
                console.error(`Element with id ${targetId} not found.`);
            }
        });
    });

    // Formulaire de Contact avec Validation
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(event) {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (!name || !email || !message) {
                event.preventDefault();
                alert('Veuillez remplir tous les champs du formulaire.');
            }
        });
    } else {
        console.error('Form element not found.');
    }

    // Galerie d'Images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('click', function() {
            img.classList.toggle('enlarged');
        });
    });

    // Révélation des Éléments au Défilement
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', function() {
        const triggerBottom = window.innerHeight / 5 * 4;
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < triggerBottom) {
                section.classList.add('show');
            } else {
                section.classList.remove('show');
            }
        });
    });
});
