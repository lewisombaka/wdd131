document.addEventListener('DOMContentLoaded', function() {
  // Get the current year and update footer
  const currentYear = new Date().getFullYear();
  document.getElementById('currentyear').textContent = currentYear;

  // Get the last modified date and update footer
  const lastModifiedDate = document.lastModified;
  document.getElementById('lastModified').textContent = `Last modified: ${lastModifiedDate}`;
});
//

const products = [
    {
      id: 'fc-1888',
      name: "flux capacitor",
      averageRating: 4.5
    },
    {
      id: 'fc-2050',
      name: "power laces",
      averageRating: 4.7
    },
    {
      id: 'fs-1987',
      name: "time circuits",
      averageRating: 3.5
    },
    {
      id: 'ac-2000',
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: 'jj-1969',
      name: "warp equalizer",
      averageRating: 5.0
    }
];

const selectElement = document.getElementById('product');

products.forEach(produce => {
    const option = document.createElement('option');
    option.value = produce.id;
    option.textContent = produce.name;
    selectElement.appendChild(option);
});