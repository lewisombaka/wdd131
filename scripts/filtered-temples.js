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

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },

    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },

    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },

    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },

    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },

    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },

    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: 'Salt Lake',
        location: 'Salt Lake City, Utah',
        dedicated: '1853, February, 14',
        area: 382207,
        imageUrl: 'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/400x250/slctemple7.jpg',
    },

    {
        templeName: 'Belem, Brazil',
        location: 'Belem, Brazil',
        dedicated: '2022, November, 20',
        area: 28675,
        imageUrl: 'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/belem-brazil/400x250/belem_brazil_temple_exterior2.jpg',
    },

    {
        templeName: 'Asunción Paraguay',
        location: 'Asunción Paraguay',
        dedicated: '2002, May, 19',
        area: 11906,
        imageUrl: 'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/asuncion-paraguay/400x250/4-e49cfde212b104b97a0463371127c11e47f9c084.jpeg',
    },
  ];



function renderTemples(filteredTemples) {
    const div = document.querySelector('#temples');
    div.innerHTML = templeDetails(filteredTemples);
}

// Filtering functions
function filterOld() {
    const oldTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
    renderTemples(oldTemples);
}

function filterNew() {
    const newTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
    renderTemples(newTemples);
}

function filterLarge() {
    const largeTemples = temples.filter(temple => temple.area > 90000);
    renderTemples(largeTemples);
}

function filterSmall() {
    const smallTemples = temples.filter(temple => temple.area < 10000);
    renderTemples(smallTemples);
}

function showAll() {
    renderTemples(temples);
}

// Event listeners for navigation
document.querySelector('nav a[href="#home"]').addEventListener('click', (e) => {
    e.preventDefault();
    showAll();
    document.getElementById('section-title').textContent = 'Home';
});

document.querySelector('nav a[href="#old"]').addEventListener('click', (e) => {
    e.preventDefault();
    filterOld();
    document.getElementById('section-title').textContent = 'Old Temples';
});

document.querySelector('nav a[href="#new"]').addEventListener('click', (e) => {
    e.preventDefault();
    filterNew();
    document.getElementById('section-title').textContent = 'New Temples';
});

document.querySelector('nav a[href="#large"]').addEventListener('click', (e) => {
    e.preventDefault();
    filterLarge();
    document.getElementById('section-title').textContent = 'Large Temples';
});

document.querySelector('nav a[href="#small"]').addEventListener('click', (e) => {
    e.preventDefault();
    filterSmall();
    document.getElementById('section-title').textContent = 'Small Temples';
});

// Initially display all temples
showAll();

function templeDetails(array) {
    return array.map(details => `
        <div>
            <figure>
              <img src="${details.imageUrl}" alt="${details.templeName}" loading='lazy' width='400'>
              <figcaption>${details.templeName}</figcaption>
              <p>Location: ${details.location}</p>
              <p>Dedicated: ${details.dedicated}</p>
              <p>Area: ${details.area}</p>
            </figure>
        </div>
    `).join('');
}

const div = document.querySelector('#temples');
div.innerHTML = templeDetails(temples);