window.onload = function () {
    const searchBtn = document.querySelector('#searchBtn');
    const cityInput = document.querySelector('#city');
    const loadingText = document.querySelector('#load');
    const weatherBox = document.querySelector('#weather');
    const weatherCity = document.querySelector('#weatherCity');
    const weatherDesc = document.querySelector('#weatherDescription');
    const weatherTemp = document.querySelector('#weatherTemperature');


    searchBtn.addEventListener('click', searchWeather);

    function searchWeather() {
        console.log('Search weather')
    }
}