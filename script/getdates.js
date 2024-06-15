document.addEventListener('DOMContentLoaded', function() {
    // Get the current year and update footer
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;

    // Get the last modified date and update footer
    const lastModifiedDate = document.lastModified;
    document.getElementById('lastModified').textContent = `Last modified: ${lastModifiedDate}`;
});
