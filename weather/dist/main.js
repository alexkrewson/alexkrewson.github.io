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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCO0FBQ3ZCLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUIsVUFBVTtBQUNWO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTs7QUFFQTtBQUNBLCtJQUErSSxjQUFjO0FBQzdKOztBQUVBOztBQUVBLE1BQU07QUFDTjtBQUNBO0FBQ0E7Ozs7QUFJQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFwiLi9zYXNzeXN0eWxlLnNjc3NcIjtcblxubGV0IHVuaXQgPSAnRic7XG5sZXQgaGlnaCwgbG93LCB1bml0VGV4dDtcblxuY29uc3QgaW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW1nJyk7XG5jb25zdCB0ZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2gyVGV4dCcpO1xuY29uc3QgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bicpXG5idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkSnNvbilcbmNvbnN0IHVuaXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW5pdHMnKVxudW5pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZVVuaXRzKVxuXG5mdW5jdGlvbiB0b2dnbGVVbml0cygpIHtcbiAgICBpZiAodW5pdCA9PSAnRicpIHsgdW5pdCA9ICdDJyB9XG4gICAgZWxzZSB7IHVuaXQgPSAnRicgfVxuICAgIGxvYWRKc29uKClcbn1cblxuYXN5bmMgZnVuY3Rpb24gbG9hZEpzb24oKSB7XG4gICAgY29uc3QgY2l0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaXR5JykudmFsdWVcbiAgICBjb25zdCBzdGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGF0ZScpLnZhbHVlXG4gICAgY29uc3QgdXJsID0gJ2h0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0nICsgY2l0eSArICcsJyArIHN0YXRlICsgJyZBUFBJRD1hOWZlYzdiMzBkY2Q5ZmRiYTllYzdlNDU4MjBmOWNhZCc7XG4gICAgdHJ5IHtcblxuICAgICAgICBjb25zdCB3ZWF0aGVyUmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgICAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHdlYXRoZXJSZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgaWYgKHVuaXQgPT0gJ0YnKSB7XG4gICAgICAgICAgICBoaWdoID0gTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5tYWluLnRlbXBfbWF4ICogOSAvIDUgLSA0NTkuNjcpO1xuICAgICAgICAgICAgbG93ID0gTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5tYWluLnRlbXBfbWluICogOSAvIDUgLSA0NTkuNjcpO1xuICAgICAgICAgICAgdW5pdFRleHQgPSAnICZkZWc7RidcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGhpZ2ggPSBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLm1haW4udGVtcF9tYXggLSAyNzMuMTUpO1xuICAgICAgICAgICAgbG93ID0gTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5tYWluLnRlbXBfbWluIC0gMjczLjE1KTtcbiAgICAgICAgICAgIHVuaXRUZXh0ID0gJyAmZGVnO0MnXG4gICAgICAgIH1cbiAgICAgICAgdGV4dC5pbm5lckhUTUwgPSB3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uICsgJywgaGlnaCBvZiAnICsgaGlnaCArIHVuaXRUZXh0ICsgJywgbG93IG9mICcgKyBsb3cgKyB1bml0VGV4dDtcblxuICAgICAgICBjb25zdCB3ZWF0aGVyVGV4dCA9IHdlYXRoZXJEYXRhLndlYXRoZXJbMF0ubWFpbjtcbiAgICAgICAgY29uc3QgY2F0UmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuZ2lwaHkuY29tL3YxL2dpZnMvdHJhbnNsYXRlP2FwaV9rZXk9QUNsNXd1WlJjazhhOEIzaTBHNHhhWXlvOW5FVXAyTjgmcz0nICsgd2VhdGhlclRleHQsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICAgICAgICBjb25zdCBjYXREYXRhID0gYXdhaXQgY2F0UmVzcG9uc2UuanNvbigpO1xuXG4gICAgICAgIGltZy5zcmMgPSBjYXREYXRhLmRhdGEuaW1hZ2VzLm9yaWdpbmFsLnVybDtcblxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZygnZXJyb3IgZXJyb3IgZXJyb3InKVxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH1cblxuXG5cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==