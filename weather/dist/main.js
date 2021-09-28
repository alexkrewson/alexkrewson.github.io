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
// btn.addEventListener('click', loadJson)
const unitBtn = document.getElementById('units')
unitBtn.addEventListener('click', toggleUnits)

function toggleUnits() {
    if (unit == 'F') { unit = 'C' }
    else { unit = 'F' }
    console.log('this works...')
    // loadJson()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCO0FBQ3ZCLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QixVQUFVO0FBQ1Y7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBOztBQUVBO0FBQ0EsK0lBQStJLGNBQWM7QUFDN0o7O0FBRUE7O0FBRUEsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7OztBQUlBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgXCIuL3Nhc3N5c3R5bGUuc2Nzc1wiO1xuXG5sZXQgdW5pdCA9ICdGJztcbmxldCBoaWdoLCBsb3csIHVuaXRUZXh0O1xuXG5jb25zdCBpbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcbmNvbnN0IHRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaDJUZXh0Jyk7XG5jb25zdCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuJylcbi8vIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRKc29uKVxuY29uc3QgdW5pdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1bml0cycpXG51bml0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlVW5pdHMpXG5cbmZ1bmN0aW9uIHRvZ2dsZVVuaXRzKCkge1xuICAgIGlmICh1bml0ID09ICdGJykgeyB1bml0ID0gJ0MnIH1cbiAgICBlbHNlIHsgdW5pdCA9ICdGJyB9XG4gICAgY29uc29sZS5sb2coJ3RoaXMgd29ya3MuLi4nKVxuICAgIC8vIGxvYWRKc29uKClcbn1cblxuYXN5bmMgZnVuY3Rpb24gbG9hZEpzb24oKSB7XG4gICAgY29uc3QgY2l0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaXR5JykudmFsdWVcbiAgICBjb25zdCBzdGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGF0ZScpLnZhbHVlXG4gICAgY29uc3QgdXJsID0gJ2h0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0nICsgY2l0eSArICcsJyArIHN0YXRlICsgJyZBUFBJRD1hOWZlYzdiMzBkY2Q5ZmRiYTllYzdlNDU4MjBmOWNhZCc7XG4gICAgdHJ5IHtcblxuICAgICAgICBjb25zdCB3ZWF0aGVyUmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgICAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHdlYXRoZXJSZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgaWYgKHVuaXQgPT0gJ0YnKSB7XG4gICAgICAgICAgICBoaWdoID0gTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5tYWluLnRlbXBfbWF4ICogOSAvIDUgLSA0NTkuNjcpO1xuICAgICAgICAgICAgbG93ID0gTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5tYWluLnRlbXBfbWluICogOSAvIDUgLSA0NTkuNjcpO1xuICAgICAgICAgICAgdW5pdFRleHQgPSAnICZkZWc7RidcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGhpZ2ggPSBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLm1haW4udGVtcF9tYXggLSAyNzMuMTUpO1xuICAgICAgICAgICAgbG93ID0gTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YS5tYWluLnRlbXBfbWluIC0gMjczLjE1KTtcbiAgICAgICAgICAgIHVuaXRUZXh0ID0gJyAmZGVnO0MnXG4gICAgICAgIH1cbiAgICAgICAgdGV4dC5pbm5lckhUTUwgPSB3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uICsgJywgaGlnaCBvZiAnICsgaGlnaCArIHVuaXRUZXh0ICsgJywgbG93IG9mICcgKyBsb3cgKyB1bml0VGV4dDtcblxuICAgICAgICBjb25zdCB3ZWF0aGVyVGV4dCA9IHdlYXRoZXJEYXRhLndlYXRoZXJbMF0ubWFpbjtcbiAgICAgICAgY29uc3QgY2F0UmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuZ2lwaHkuY29tL3YxL2dpZnMvdHJhbnNsYXRlP2FwaV9rZXk9QUNsNXd1WlJjazhhOEIzaTBHNHhhWXlvOW5FVXAyTjgmcz0nICsgd2VhdGhlclRleHQsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICAgICAgICBjb25zdCBjYXREYXRhID0gYXdhaXQgY2F0UmVzcG9uc2UuanNvbigpO1xuXG4gICAgICAgIGltZy5zcmMgPSBjYXREYXRhLmRhdGEuaW1hZ2VzLm9yaWdpbmFsLnVybDtcblxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZygnZXJyb3IgZXJyb3IgZXJyb3InKVxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH1cblxuXG5cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==