document.addEventListener('DOMContentLoaded', () => {
    const footer = document.querySelector('footer');
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    document.getElementById('currentyear').textContent = currentYear;
    document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;

    // Store the selected elements that we are going to use. 
    const mainnav = document.querySelector('nav');
    const hambutton = document.querySelector('#menu');
    const heading = document.querySelector('h1');

    // Add a click event listener to the hamburger button and use a callback function that toggles the list element's list of classes.
    hambutton.addEventListener('click', () => {
        mainnav.classList.toggle('show');
        hambutton.classList.toggle('show');
        heading.classList.toggle('hide');
    });
});
