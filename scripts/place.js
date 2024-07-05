document.addEventListener('DOMContentLoaded', function() {
    // Get the current year and update footer
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;

    // Get the last modified date and update footer
    const lastModifiedDate = document.lastModified;
    document.getElementById('lastModified').textContent = `Last modified: ${lastModifiedDate}`;
});
document.addEventListener('DOMContentLoaded',(event)=>{
    const tempreature = document.querySelector('#tempreature').textContent;
    const windspeed = document.querySelector('#windspeed').textContent;

    function calculateWindChill(temp,wind){
        if (temp<= 10 && wind > 4.8){
            const windchill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(wind, 0.16)) + (0.4275 * temp * Math.pow(wind, 0.16));
            const ans = windchill.toFixed(2);
            return `${ans}\u00B0` 
        }
        else{
            return ('N/A');
        }
    }

    const windChillFactor = calculateWindChill(tempreature,windspeed);

    const windChillElement = document.querySelector('#windChillElement');

    windChillElement.append(windChillFactor);
});