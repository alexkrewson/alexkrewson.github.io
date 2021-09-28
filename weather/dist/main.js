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

        const weatherResponse = await fetch(url, { mode: 'cors' });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCO0FBQ3ZCLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbURBQW1ELGNBQWM7QUFDakU7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCLFVBQVU7QUFDVjtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7O0FBRUE7QUFDQSwrSUFBK0ksY0FBYztBQUM3Sjs7QUFFQTs7QUFFQSxNQUFNO0FBQ047QUFDQTtBQUNBOzs7O0FBSUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBcIi4vc2Fzc3lzdHlsZS5zY3NzXCI7XG5cbmxldCB1bml0ID0gJ0YnO1xubGV0IGhpZ2gsIGxvdywgdW5pdFRleHQ7XG5cbmNvbnN0IGltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xuY29uc3QgdGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoMlRleHQnKTtcbmNvbnN0IGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4nKVxuYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9hZEpzb24pXG5jb25zdCB1bml0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VuaXRzJylcbnVuaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVVbml0cylcblxuZnVuY3Rpb24gdG9nZ2xlVW5pdHMoKSB7XG4gICAgaWYgKHVuaXQgPT0gJ0YnKSB7IHVuaXQgPSAnQycgfVxuICAgIGVsc2UgeyB1bml0ID0gJ0YnIH1cbiAgICBsb2FkSnNvbigpXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGxvYWRKc29uKCkge1xuICAgIGNvbnN0IGNpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l0eScpLnZhbHVlXG4gICAgY29uc3Qgc3RhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhdGUnKS52YWx1ZVxuICAgIGNvbnN0IHVybCA9ICdodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JyArIGNpdHkgKyAnLCcgKyBzdGF0ZSArICcmQVBQSUQ9YTlmZWM3YjMwZGNkOWZkYmE5ZWM3ZTQ1ODIwZjljYWQnO1xuICAgIHRyeSB7XG5cbiAgICAgICAgY29uc3Qgd2VhdGhlclJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgICAgICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCB3ZWF0aGVyUmVzcG9uc2UuanNvbigpO1xuXG4gICAgICAgIGlmICh1bml0ID09ICdGJykge1xuICAgICAgICAgICAgaGlnaCA9IE1hdGgucm91bmQod2VhdGhlckRhdGEubWFpbi50ZW1wX21heCAqIDkgLyA1IC0gNDU5LjY3KTtcbiAgICAgICAgICAgIGxvdyA9IE1hdGgucm91bmQod2VhdGhlckRhdGEubWFpbi50ZW1wX21pbiAqIDkgLyA1IC0gNDU5LjY3KTtcbiAgICAgICAgICAgIHVuaXRUZXh0ID0gJyAmZGVnO0YnXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBoaWdoID0gTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5tYWluLnRlbXBfbWF4IC0gMjczLjE1KTtcbiAgICAgICAgICAgIGxvdyA9IE1hdGgucm91bmQod2VhdGhlckRhdGEubWFpbi50ZW1wX21pbiAtIDI3My4xNSk7XG4gICAgICAgICAgICB1bml0VGV4dCA9ICcgJmRlZztDJ1xuICAgICAgICB9XG4gICAgICAgIHRleHQuaW5uZXJIVE1MID0gd2VhdGhlckRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbiArICcsIGhpZ2ggb2YgJyArIGhpZ2ggKyB1bml0VGV4dCArICcsIGxvdyBvZiAnICsgbG93ICsgdW5pdFRleHQ7XG5cbiAgICAgICAgY29uc3Qgd2VhdGhlclRleHQgPSB3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLm1haW47XG4gICAgICAgIGNvbnN0IGNhdFJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmdpcGh5LmNvbS92MS9naWZzL3RyYW5zbGF0ZT9hcGlfa2V5PUFDbDV3dVpSY2s4YThCM2kwRzR4YVl5bzluRVVwMk44JnM9JyArIHdlYXRoZXJUZXh0LCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgICAgICAgY29uc3QgY2F0RGF0YSA9IGF3YWl0IGNhdFJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICBpbWcuc3JjID0gY2F0RGF0YS5kYXRhLmltYWdlcy5vcmlnaW5hbC51cmw7XG5cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIGVycm9yIGVycm9yJylcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9XG5cblxuXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=