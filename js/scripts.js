// JavaScript pour les interactions sur le site

document.addEventListener('DOMContentLoaded', function() {
    // Ajoute une classe active au lien de navigation actuel
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
                // Exécuter une action d'envoi de formulaire ici
                alert('Formulaire soumis avec succès !');
                // Logique pour envoyer le formulaire (par exemple, via AJAX) peut être ajoutée ici
                contactForm.reset();
            }
        });
    }

    // interactions supplémentaires sur la page des projets
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.15)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        });
    });
});
    // JavaScript pour des interactions supplémentaires sur la page À propos
document.addEventListener('DOMContentLoaded', function() {
    const profilePic = document.querySelector('.profile-pic img');

    profilePic.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.transition = 'transform 0.3s ease';
    });

    profilePic.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});


});
