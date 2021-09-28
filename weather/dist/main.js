/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
// import "./sassystyle.scss";

let unit = 'F';
let high, low, unitText;

const img = document.querySelector('img');
const text = document.getElementById('h2Text');
const btn = document.getElementById('btn')
btn.addEventListener('click', loadJson)
const unitBtn = document.getElementById('units')
unitBtn.addEventListener('click', toggleUnits)

function toggleUnits() {
    if (unit == 'F') { unit = 'C' }
    else { unit = 'F' }
    loadJson()
}

async function loadJson() {
    const city = document.getElementById('city').value
    const state = document.getElementById('state').value
    const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + ',' + state + '&APPID=a9fec7b30dcd9fdba9ec7e45820f9cad';
    try {
        console.log('this works...')

        const weatherResponse = await fetch(url);
        const weatherData = await weatherResponse.json();

        if (unit == 'F') {
            high = Math.round(weatherData.main.temp_max * 9 / 5 - 459.67);
            low = Math.round(weatherData.main.temp_min * 9 / 5 - 459.67);
            unitText = ' &deg;F'
        } else {
            high = Math.round(weatherData.main.temp_max - 273.15);
            low = Math.round(weatherData.main.temp_min - 273.15);
            unitText = ' &deg;C'
        }
        text.innerHTML = weatherData.weather[0].description + ', high of ' + high + unitText + ', low of ' + low + unitText;

        const weatherText = weatherData.weather[0].main;
        const catResponse = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=ACl5wuZRck8a8B3i0G4xaYyo9nEUp2N8&s=' + weatherText, { mode: 'cors' });
        const catData = await catResponse.json();

        img.src = catData.data.images.original.url;

    } catch (err) {
        console.log('error error error')
        console.log(err);
    }



}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCO0FBQ3ZCLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QixVQUFVO0FBQ1Y7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBOztBQUVBO0FBQ0EsK0lBQStJLGNBQWM7QUFDN0o7O0FBRUE7O0FBRUEsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7OztBQUlBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgXCIuL3Nhc3N5c3R5bGUuc2Nzc1wiO1xuXG5sZXQgdW5pdCA9ICdGJztcbmxldCBoaWdoLCBsb3csIHVuaXRUZXh0O1xuXG5jb25zdCBpbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcbmNvbnN0IHRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaDJUZXh0Jyk7XG5jb25zdCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuJylcbmJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRKc29uKVxuY29uc3QgdW5pdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1bml0cycpXG51bml0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlVW5pdHMpXG5cbmZ1bmN0aW9uIHRvZ2dsZVVuaXRzKCkge1xuICAgIGlmICh1bml0ID09ICdGJykgeyB1bml0ID0gJ0MnIH1cbiAgICBlbHNlIHsgdW5pdCA9ICdGJyB9XG4gICAgbG9hZEpzb24oKVxufVxuXG5hc3luYyBmdW5jdGlvbiBsb2FkSnNvbigpIHtcbiAgICBjb25zdCBjaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NpdHknKS52YWx1ZVxuICAgIGNvbnN0IHN0YXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXRlJykudmFsdWVcbiAgICBjb25zdCB1cmwgPSAnaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPScgKyBjaXR5ICsgJywnICsgc3RhdGUgKyAnJkFQUElEPWE5ZmVjN2IzMGRjZDlmZGJhOWVjN2U0NTgyMGY5Y2FkJztcbiAgICB0cnkge1xuICAgICAgICBjb25zb2xlLmxvZygndGhpcyB3b3Jrcy4uLicpXG5cbiAgICAgICAgY29uc3Qgd2VhdGhlclJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICAgICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCB3ZWF0aGVyUmVzcG9uc2UuanNvbigpO1xuXG4gICAgICAgIGlmICh1bml0ID09ICdGJykge1xuICAgICAgICAgICAgaGlnaCA9IE1hdGgucm91bmQod2VhdGhlckRhdGEubWFpbi50ZW1wX21heCAqIDkgLyA1IC0gNDU5LjY3KTtcbiAgICAgICAgICAgIGxvdyA9IE1hdGgucm91bmQod2VhdGhlckRhdGEubWFpbi50ZW1wX21pbiAqIDkgLyA1IC0gNDU5LjY3KTtcbiAgICAgICAgICAgIHVuaXRUZXh0ID0gJyAmZGVnO0YnXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBoaWdoID0gTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5tYWluLnRlbXBfbWF4IC0gMjczLjE1KTtcbiAgICAgICAgICAgIGxvdyA9IE1hdGgucm91bmQod2VhdGhlckRhdGEubWFpbi50ZW1wX21pbiAtIDI3My4xNSk7XG4gICAgICAgICAgICB1bml0VGV4dCA9ICcgJmRlZztDJ1xuICAgICAgICB9XG4gICAgICAgIHRleHQuaW5uZXJIVE1MID0gd2VhdGhlckRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbiArICcsIGhpZ2ggb2YgJyArIGhpZ2ggKyB1bml0VGV4dCArICcsIGxvdyBvZiAnICsgbG93ICsgdW5pdFRleHQ7XG5cbiAgICAgICAgY29uc3Qgd2VhdGhlclRleHQgPSB3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLm1haW47XG4gICAgICAgIGNvbnN0IGNhdFJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmdpcGh5LmNvbS92MS9naWZzL3RyYW5zbGF0ZT9hcGlfa2V5PUFDbDV3dVpSY2s4YThCM2kwRzR4YVl5bzluRVVwMk44JnM9JyArIHdlYXRoZXJUZXh0LCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgICAgICAgY29uc3QgY2F0RGF0YSA9IGF3YWl0IGNhdFJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICBpbWcuc3JjID0gY2F0RGF0YS5kYXRhLmltYWdlcy5vcmlnaW5hbC51cmw7XG5cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIGVycm9yIGVycm9yJylcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9XG5cblxuXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=