document.addEventListener('DOMContentLoaded', () => {
    // Update footer year
    const yearElement = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;

    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close nav menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Header color change on click
    const header = document.querySelector('.intro');
    header.addEventListener('click', () => {
        header.style.backgroundColor = header.style.backgroundColor === 'lightblue' ? 'transparent' : 'lightblue';
    });

    // Define project data
    const projects = [
        {
            title: "Temples Album",
            link: "https://lewisombaka.github.io/wdd131/filtered-temples.html",
            image: {
                webp: "images/temple.webp",
                jpg: "images/temple.jpg",
                alt: "Temples Album"
            },
            description: "A responsive and dynamic website that implements lazy loading for images and a JavaScript-based filtering system."
        },
        {
            title: "Kenya Statistics",
            link: "https://lewisombaka.github.io/wdd131/place.html",
            image: {
                webp: "images/place.webp",
                jpg: "images/Place.jpg",
                alt: "Kenya Statistics"
            },
            description: "A responsive website that uses JavaScript to dynamically display weather data, including the calculation of wind chill based on wind speed and temperature."
        },
        {
            title: "First Webpage",
            link: "https://lewisombaka.github.io/wdd131/index.html",
            image: {
                webp: "images/whoIam.webp",
                jpg: "images/whoIam.jpg",
                alt: "Lewis"
            },
            description: "A personal website to share information about myself and the things I love. The website uses HTML for structure, CSS for styling, and JavaScript for interactive elements."
        },
        {
            title: "Favorite Scripture",
            link: "https://lewisombaka.github.io/wdd131/week02/bom.html",
            image: {
                webp: "images/scripture.webp",
                jpg: "images/scripture.jpg",
                alt: "Favorite Scripture"
            },
            description: "Scripture Management Webpage that allows users to input, manage, and delete scriptures. The page is built using HTML, CSS, and JavaScript, providing an intuitive and user-friendly interface for scripture management."
        },
        {
            title: 'Form',
            link: 'https://lewisombaka.github.io/wdd131/form.html',
            image: {
                webp: "images/form.webp",
                jpg: "images/scripture.jpg",
                alt: "Favorite Scripture"
            },
            description: "A contact form that allows users to provide their feedback or inquiries by filling out several fields. It’s designed by HTML, CSS and JS to capture essential information in a structured manner, ensuring that all required data is collected and validated before submission"
        },
        {
            title: 'Siteplan',
            link: 'https://lewisombaka.github.io/wdd131/project/siteplan.html',
            image: {
                webp: "images/siteplan.webp",
                jpg: "images/siteplan.jpg",
                alt: "Favorite Scripture"
            },
            description: 'The site plan outlines the structure and layout of this portfolio website. It serves as a visual guide for how different elements and pages of the site are organized and styled.'
        }
    ];

    // Function to get visibility state from localStorage
    const getVisibilityState = (title) => {
        return localStorage.getItem(`descriptionVisibility-${title}`) === 'true';
    };

    // Function to set visibility state in localStorage
    const setVisibilityState = (title, isVisible) => {
        localStorage.setItem(`descriptionVisibility-${title}`, isVisible);
    };

    // Create project cards dynamically
    const projectGrid = document.querySelector('.project-grid');
    projects.forEach(project => {
        const card = document.createElement('article');
        card.classList.add('project-card');

        const isVisible = getVisibilityState(project.title);

        card.innerHTML = `
            <h3><a href="${project.link}" target="_blank">${project.title}</a></h3>
            <picture>
                <source srcset="${project.image.webp}" type="image/webp">
                <source srcset="${project.image.jpg}" type="image/jpeg">
                <img src="${project.image.jpg}" alt="${project.image.alt}" loading="lazy" width="300" height="200">
            </picture>
            <p style="display: ${isVisible ? 'block' : 'none'};">${project.description}</p>
            <button>${isVisible ? 'Hide Description' : 'Show Description'}</button>
        `;

        const button = card.querySelector('button');
        const description = card.querySelector('p');

        button.addEventListener('click', () => {
            const isDescriptionVisible = description.style.display === 'block';
            description.style.display = isDescriptionVisible ? 'none' : 'block';
            button.textContent = isDescriptionVisible ? 'Show Description' : 'Hide Description';
            setVisibilityState(project.title, !isDescriptionVisible);
        });

        projectGrid.appendChild(card);
    });

    // Form validation and state persistence
    const form = document.getElementById('contact-form');

    form.addEventListener('input', function(event) {
        const target = event.target;
        if (target.tagName.toLowerCase() === 'input' || target.tagName.toLowerCase() === 'textarea') {
            if (target.checkValidity()) {
                target.style.borderBottom = '3px solid green';
            } else {
                target.style.borderBottom = '3px solid red';
            }
            saveFormState();
        }
    });

    form.addEventListener('submit', function(event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            alert('Please fill out the form correctly.');
        } else {
            localStorage.removeItem('formState');
        }
    });

    function saveFormState() {
        const formData = new FormData(form);
        const formState = {};

        formData.forEach((value, key) => {
            formState[key] = value;
        });

        localStorage.setItem('formState', JSON.stringify(formState));
    }

    function loadFormState() {
        const formState = JSON.parse(localStorage.getItem('formState'));

        if (formState) {
            Object.keys(formState).forEach(key => {
                const input = form.elements[key];
                if (input) {
                    input.value = formState[key];
                    if (input.checkValidity()) {
                        input.style.borderBottom = '3px solid green';
                    } else {
                        input.style.borderBottom = '3px solid red';
                    }
                }
            });
        }
    }

    loadFormState();
});
