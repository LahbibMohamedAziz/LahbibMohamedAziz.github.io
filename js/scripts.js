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

document.addEventListener('DOMContentLoaded', function() {
    const currentLocation = location.pathname;
    const navLinks = document.querySelectorAll('header nav ul li a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentLocation) {
            link.classList.add('active');
        }
    });

    // JavaScript pour des interactions supplémentaires sur la page À propos peut être ajouté ici
});

document.addEventListener('DOMContentLoaded', function() {
    // Animation sur les cartes de projet
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });

        card.addEventListener('click', function() {
            const description = this.querySelector('.project-info p');
            if (description.style.display === 'block') {
                description.style.display = 'none';
            } else {
                description.style.display = 'block';
            }
        });
    });

    // Animation sur la photo de profil
    const profilePic = document.querySelector('.profile-pic img');

    profilePic.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.transition = 'transform 0.3s ease';
    });

    profilePic.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });

    // Défilement des compétences
    const skills = document.querySelectorAll('.about-text ul li');
    let currentSkillIndex = 0;

    function showNextSkill() {
        skills[currentSkillIndex].style.display = 'none';
        currentSkillIndex = (currentSkillIndex + 1) % skills.length;
        skills[currentSkillIndex].style.display = 'block';
    }

    setInterval(showNextSkill, 2000);
});
