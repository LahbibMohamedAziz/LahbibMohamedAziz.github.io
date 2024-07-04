document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav ul li a');

    for (const link of links) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) {
            event.preventDefault();
            alert('Veuillez remplir tous les champs du formulaire.');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    for (const img of images) {
        img.addEventListener('click', function() {
            if (img.classList.contains('enlarged')) {
                img.classList.remove('enlarged');
            } else {
                img.classList.add('enlarged');
            }
        });
    }
});

// Ajoute ce CSS à ton fichier styles.css
/*
img.enlarged {
    width: 100%;
    height: auto;
    transition: width 0.3s ease;
}
*/

document.addEventListener('DOMContentLoaded', function() {
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

// Ajoute ce CSS à ton fichier styles.css
/*
section {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

section.show {
    opacity: 1;
    transform: translateY(0);
}
*/
