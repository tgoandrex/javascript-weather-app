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

            const ul = document.createElement('ul');
            content.appendChild(ul);

            for(let value in weatherObj) {
                const li = document.createElement('li');
                li.textContent = `${value}: ${weatherObj[value]}`
                ul.appendChild(li);
            }
        })
        .catch(err => {console.log(`error current weather: ${err}`)})
    }

    static displayFiveDayForecast = (city) => {
        axios.get(`${BASE_URL_FIVE_DAY_FORECAST}?q=${city}&appid=${API_KEY}&units=imperial`)
        .then(res => {
            const weatherObj = Forecast.createForecasts(res.data);
            
            const OuterUL = document.createElement('ul');
            content.appendChild(OuterUL);

            for(let value in weatherObj) {
                const OuterLI = document.createElement('li');

                value === 'name' ? OuterLI.textContent = `${value}: ${weatherObj[value]}` : OuterLI.textContent = `${value}:`

                OuterUL.appendChild(OuterLI);
                if(value === 'forecasts') {
                    for(let x = 0; x < weatherObj.forecasts.length; x++) {
                        const innerUL = document.createElement('ul');
                        OuterLI.appendChild(innerUL);

                        const innerLI = document.createElement('li');
                        innerLI.textContent = `${weatherObj[value][x]}`
                        innerUL.appendChild(innerLI);
                    }
                }
            }
        })
        .catch(err => {console.log(`error 5 day: ${err}`)})
    }
}