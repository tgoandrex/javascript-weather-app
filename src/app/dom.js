import { CurrentWeather } from './currentWeather';
import { Forecast } from './forecast';
import axios from 'axios';

export class DOM {
    static generateBackground = () => {
        const body = document.getElementById('body');
        if(new Date().getHours() < 8 || new Date().getHours() > 18) {
            body.className = 'background-night';
        } else {
            body.className = 'background-day';
        }
    }

    static displayCurrentWeather = (city) => {
        const BASE_URL_CURRENT_WEATHER = 'https://api.openweathermap.org/data/2.5/weather';

        axios.get(`${BASE_URL_CURRENT_WEATHER}?q=${city}&appid=${process.env.GATSBY_API_KEY}&units=imperial`)
        .then(function(res) {
            if (res.status === 200) {
                const weatherObj = CurrentWeather.createCurrentWeather(res.data);
                const content = document.getElementById('content');

                const currentWeatherDiv = document.createElement('div');
                currentWeatherDiv.id = 'current-weather';
                content.appendChild(currentWeatherDiv);

                const currentTime = document.createElement('div');
                currentTime.id = 'current-time';
                currentTime.textContent = String(new Date(Date.now())).slice(0,21);
                currentWeatherDiv.appendChild(currentTime);
                
                const city = document.createElement('div');
                city.id = 'city-name';
                city.textContent = weatherObj.name;
                currentWeatherDiv.appendChild(city);

                const icon = document.createElement('img');
                icon.id = 'icon';
                icon.src = `http://openweathermap.org/img/wn/${weatherObj.icon}.png`;
                icon.alt = 'weather icon';
                currentWeatherDiv.appendChild(icon);

                const main = document.createElement('div');
                main.id = 'main';
                main.textContent = weatherObj.main;
                currentWeatherDiv.appendChild(main);

                const temperatureWrapper = document.createElement('div');
                temperatureWrapper.className = 'temperature-wrapper';
                currentWeatherDiv.appendChild(temperatureWrapper);

                const temperature = document.createElement('span');
                temperature.id = 'temperature';
                temperature.textContent = `${weatherObj.temperature} F\u00B0`;
                temperatureWrapper.appendChild(temperature);

                const feelsLike = document.createElement('span');
                feelsLike.id = 'feels-like';
                feelsLike.textContent = `Feels like ${weatherObj.feelsLike} F\u00B0`;
                temperatureWrapper.appendChild(feelsLike);

                const miscWrapper = document.createElement('div');
                miscWrapper.className = 'misc-wrapper';
                currentWeatherDiv.appendChild(miscWrapper);

                const humidity = document.createElement('div');
                humidity.id = 'humidity';
                humidity.textContent = `Humidity ${weatherObj.humidity}%`;
                miscWrapper.appendChild(humidity);

                const windSpeed = document.createElement('div');
                windSpeed.id = 'wind-speed';
                windSpeed.textContent = `Wind ${weatherObj.windSpeed} MPH`;
                miscWrapper.appendChild(windSpeed);

                const cloudPercent = document.createElement('div');
                cloudPercent.id = 'cloud-percent';
                cloudPercent.textContent = `Clouds ${weatherObj.cloudPercent}%`;
                miscWrapper.appendChild(cloudPercent);
            }
        })
        .catch(err => {
            if(err.response) {
                const error = document.createElement('div');
                error.id = 'error';
                error.textContent = 'City not found!';
                content.appendChild(error);
            } else {
                console.log(`error current weather: ${err}`)
            }
        })
    }

    static displayFiveDayForecast = (city) => {
        const BASE_URL_FIVE_DAY_FORECAST = 'https://api.openweathermap.org/data/2.5/forecast';

        axios.get(`${BASE_URL_FIVE_DAY_FORECAST}?q=${city}&appid=${process.env.GATSBY_API_KEY}&units=imperial`)
        .then(res => {
            const weatherObj = Forecast.createForecasts(res.data);
            const content = document.getElementById('content');

            const forecastDiv = document.createElement('div');
            forecastDiv.id = 'forecast';
            content.appendChild(forecastDiv);

            for(let value in weatherObj.forecasts) {
                const forecastBox = document.createElement('div');
                forecastBox.className = 'forecast-item';
                forecastDiv.appendChild(forecastBox);

                const date = document.createElement('div');
                date.textContent = weatherObj.forecasts[value][0];
                forecastBox.appendChild(date);

                const icon = document.createElement('img');
                icon.src = weatherObj.forecasts[value][3];
                icon.alt = 'forecast icon';
                forecastBox.appendChild(icon);

                const main = document.createElement('div');
                main.textContent = `${weatherObj.forecasts[value][1]} F\u00B0`;
                forecastBox.appendChild(main);

                const feelsLike = document.createElement('div');
                feelsLike.textContent = `Feels like ${weatherObj.forecasts[value][2]} F\u00B0`;
                forecastBox.appendChild(feelsLike);
            }
        })
        .catch(err => {console.log(`error forecast: ${err}`)})
    }
}