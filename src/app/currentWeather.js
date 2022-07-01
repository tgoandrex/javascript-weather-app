import { BASE_URL_CURRENT_WEATHER, API_KEY } from './utils/keys';
import axios from 'axios';

export class CurrentWeather {
    constructor(main, description, icon, temperature, feelsLike, humidity, windSpeed, cloudPercent) {
        this.main = main;
        this.description = description;
        this.icon = icon;
        this.temperature = temperature;
        this.feelsLike = feelsLike;
        this.humidity = humidity;
        this.windSpeed = windSpeed;
        this.cloudPercent = cloudPercent;
    }

    static getCurrentWeather = () => {
        axios.get(`${BASE_URL_CURRENT_WEATHER}?q=london&appid=${API_KEY}&units=imperial`) // 'london' is temporarily hardcoded
        .then(res => console.log(this.createCurrentWeather(res.data)))
        .catch(err => {console.log(`error current weather: ${err}`)})
    }

    static createCurrentWeather = (data) => {
        const main = data.weather[0].main,
            description = data.weather[0].description,
            icon = data.weather[0].icon,
            temperature = data.main.temp,
            feelsLike = data.main.feels_like,
            humidity = data.main.humidity,
            windSpeed = data.wind.speed,
            cloudPercent = data.clouds.all;
        
        return new CurrentWeather(main, description, icon, temperature, feelsLike, humidity, windSpeed, cloudPercent);
    }
}