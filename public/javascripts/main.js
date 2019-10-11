window.onload = function () {
    const appId = '';
    const searchBtn = document.querySelector('#searchBtn');
    const cityInput = document.querySelector('#city');
    const loadingText = document.querySelector('#load');
    const weatherBox = document.querySelector('#weather');
    const weatherCity = document.querySelector('#weatherCity');
    const weatherDesc = document.querySelector('#weatherDescription');
    const weatherTemp = document.querySelector('#weatherTemperature');

    class Http {
        static fetchData(url) {
            return new Promise((resolve, reject) => {
                const HTTP = new XMLHttpRequest();
                HTTP.open('GET', url);
                HTTP.onreadystatechange = function () {
                    if (HTTP.readyState == XMLHttpRequest.DONE && HTTP.status == 200) {
                        const respData = JSON.parse(HTTP.responseText);
                        resolve(respData);
                    } else if (HTTP.readyState == XMLHttpRequest.DONE) {
                        reject('Something went wrong....');
                    }
                };
                HTTP.send();
            })
        }
    };

    class WeatherData {
        constructor(cityName, description) {
            this.cityName = cityName;
            this.description = description;
            this.temperature = '';
        }
    }

    const weatherProxyHandler = {
        get: function(target, property) {
            return Reflect.get(target, property);
        },
        set: function(target, property, value) {
            const newValue = (value * 1.8 + 32).toFixed(2) + 'F.';
            return Reflect.set(target, property, newValue);
        }
    }

    searchBtn.addEventListener('click', searchWeather);

    function searchWeather() {
        const cityName = cityInput.value.trim();
        if (cityName.length == 0) {
            return alert('Please enter a city name.');
        }
        loadingText.style.display = 'block';
        weatherBox.style.display = 'none';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${appId}`;
        Http.fetchData(url)
            .then(resp => {
                console.log(resp);
                const weatherData = new WeatherData(cityName, resp.weather[0].description.toUpperCase());
                const weatherProxy = new Proxy(weatherData, weatherProxyHandler);
                weatherProxy.temperature = resp.main.temp;
                updateWeather(weatherProxy);
            })
            .catch(error => {
                alert(error);
            });
    };

    function updateWeather(weatherData) {
        weatherCity.textContent = weatherData.cityName;
        weatherDesc.textContent = weatherData.description;
        weatherTemp.textContent = weatherData.temperature;

        weatherBox.style.display = 'block';
        loadingText.style.display = 'none';
    }
}