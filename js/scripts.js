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
            const name = document.querySelector('#name').value;
            const email = document.querySelector('#email').value;
            const message = document.querySelector('#message').value;

            if (name === '' || email === '' || message === '') {
                alert('Veuillez remplir tous les champs.');
            } else {
                alert('Formulaire soumis avec succès !');
                contactForm.reset();
            }
        });
    }

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
            description.style.display = description.style.display === 'block' ? 'none' : 'block';
        });
    });

    // Animation sur la photo de profil
    const profilePic = document.querySelector('.profile-pic img');

    if (profilePic) {
        profilePic.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.3s ease';
        });

        profilePic.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }

    // Défilement des compétences
    const skills = document.querySelectorAll('.about-text ul li');
    let currentSkillIndex = 0;

    function showNextSkill() {
        skills.forEach((skill, index) => {
            skill.style.display = index === currentSkillIndex ? 'block' : 'none';
        });
        currentSkillIndex = (currentSkillIndex + 1) % skills.length;
    }

    if (skills.length > 0) {
        showNextSkill();
        setInterval(showNextSkill, 2000);
    }
});
