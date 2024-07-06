// JavaScript pour les interactions sur le site

document.addEventListener('DOMContentLoaded', function() {
    // Exemple : Ajoute une classe active au lien de navigation actuel
    const currentLocation = location.pathname;
    const navLinks = document.querySelectorAll('header nav ul li a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentLocation) {
            link.classList.add('active');
        }
    });

    // Exemple : Interaction pour un formulaire de contact
    const contactForm = document.querySelector('#contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Exécuter une action d'envoi de formulaire ici
            alert('Formulaire soumis !');
        });
    }
});
