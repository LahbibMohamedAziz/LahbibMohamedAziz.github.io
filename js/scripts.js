document.addEventListener('DOMContentLoaded', function() {
    // Activer le lien de navigation actuel
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
        });

        profilePic.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }

    // Défilement des compétences
    const skills = document.querySelectorAll('.about-text ul li');
    let currentSkillIndex = 0;
    if (skills.length > 0) {
        function showNextSkill() {
            skills[currentSkillIndex].style.display = 'none';
            currentSkillIndex = (currentSkillIndex + 1) % skills.length;
            skills[currentSkillIndex].style.display = 'block';
        }
        setInterval(showNextSkill, 2000);
    }

    // Affichage des informations de contact
    function showInfo(infoId) {
        const allInfos = document.querySelectorAll('#contact-info p');
        allInfos.forEach(info => info.classList.add('hidden'));
        const infoToShow = document.getElementById(infoId);
        if (infoToShow) {
            infoToShow.classList.remove('hidden');
        }
    }

    const showPhoneButton = document.getElementById('show-phone');
    if (showPhoneButton) {
        showPhoneButton.addEventListener('click', function(event) {
            event.preventDefault();
            showInfo('phone-info');
        });
    }

    const showEmailButton = document.getElementById('show-email');
    if (showEmailButton) {
        showEmailButton.addEventListener('click', function(event) {
            event.preventDefault();
            showInfo('email-info');
        });
    }

    const showLinkedInButton = document.getElementById('show-linkedin');
    if (showLinkedInButton) {
        showLinkedInButton.addEventListener('click', function(event) {
            event.preventDefault();
            showInfo('linkedin-info');
        });
    }

    // Menu burger pour petits écrans
    const menuBurger = document.querySelector('.menu-burger');
    const navMenu = document.querySelector('header nav ul');
    if (menuBurger && navMenu) {
        menuBurger.addEventListener('click', function() {
            navMenu.classList.toggle('show');
        });
    }
});
