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

// JavaScript pour l'interaction avec les projets et le formulaire de contact
document.addEventListener('DOMContentLoaded', function() {
    // Exemple : Ajoute une classe active au lien de navigation actuel
    const currentLocation = location.pathname;
    const navLinks = document.querySelectorAll('header nav ul li a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentLocation) {
            link.classList.add('active');
        }
    });

    // Interaction pour le formulaire de contact
    const contactForm = document.querySelector('#contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Validation basique du formulaire
            const name = document.querySelector('#name').value;
            const email = document.querySelector('#email').value;
            const message = document.querySelector('#message').value;

            if (name === '' || email === '' || message === '') {
                alert('Veuillez remplir tous les champs.');
            } else {
                alert('Formulaire soumis avec succès !');
                // Logique pour envoyer le formulaire (par exemple, via AJAX) peut être ajoutée ici
                contactForm.reset();
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const currentLocation = location.pathname;
    const navLinks = document.querySelectorAll('header nav ul li a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentLocation) {
            link.classList.add('active');
        }
    });

    // JavaScript pour des interactions supplémentaires sur la page des projets peut être ajouté ici
});
