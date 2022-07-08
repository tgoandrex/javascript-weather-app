import { content } from './utils/domElement';
import { BASE_URL_CURRENT_WEATHER, BASE_URL_FIVE_DAY_FORECAST, API_KEY } from './utils/key';
import { CurrentWeather } from './currentWeather';
import { Forecast } from './forecast';
import axios from 'axios';

export class DOM {
    static displayCurrentWeather = (city) => {
        axios.get(`${BASE_URL_CURRENT_WEATHER}?q=${city}&appid=${API_KEY}&units=imperial`)
        .then(function(res) {
            const weatherObj = CurrentWeather.createCurrentWeather(res.data);

            const city = document.createElement('div');
            city.textContent = weatherObj.name;
            content.appendChild(city);

            const icon = document.createElement('img');
            icon.src = `http://openweathermap.org/img/wn/${weatherObj.icon}.png`;
            icon.alt = 'weather icon';
            content.appendChild(icon);

            const main = document.createElement('div');
            main.textContent = weatherObj.main;
            content.appendChild(main);

            const temperature = document.createElement('div');
            temperature.textContent = `${weatherObj.temperature} F\u00B0`;
            content.appendChild(temperature);

            const feelsLike = document.createElement('div');
            feelsLike.textContent = `Feels like ${weatherObj.feelsLike} F\u00B0`;
            content.appendChild(feelsLike);

            const humidity = document.createElement('div');
            humidity.textContent = `Humidity ${weatherObj.humidity}%`;
            content.appendChild(humidity);

            const windSpeed = document.createElement('div');
            windSpeed.textContent = `Wind ${weatherObj.windSpeed} MPH`;
            content.appendChild(windSpeed);

            const cloudPercent = document.createElement('div');
            cloudPercent.textContent = `Clouds ${weatherObj.cloudPercent}%`;
            content.appendChild(cloudPercent);
        })
        .catch(err => {console.log(`error current weather: ${err}`)})
    }

    static displayFiveDayForecast = (city) => {
        axios.get(`${BASE_URL_FIVE_DAY_FORECAST}?q=${city}&appid=${API_KEY}&units=imperial`)
        .then(res => {
            const weatherObj = Forecast.createForecasts(res.data);

            for(let value in weatherObj.forecasts) {
                for(let subvalue in weatherObj.forecasts[value]) {
                    if(weatherObj.forecasts[value][subvalue] === weatherObj.forecasts[value][3]) {
                        const img = document.createElement('img');
                        img.src = weatherObj.forecasts[value][subvalue];
                        img.alt = 'weather icon';
                        content.appendChild(img);
                    } else {
                        const div = document.createElement('div');
                        div.textContent = `${weatherObj.forecasts[value][subvalue]}`
                        content.appendChild(div);
                    }
                }
            }
        })
        .catch(err => {console.log(`error 5 day: ${err}`)})
    }
}