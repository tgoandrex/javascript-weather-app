export class CurrentWeather {
    constructor(name, main, description, icon, temperature, feelsLike, humidity, windSpeed, cloudPercent) {
        this.name = name;
        this.main = main;
        this.description = description;
        this.icon = icon;
        this.temperature = temperature;
        this.feelsLike = feelsLike;
        this.humidity = humidity;
        this.windSpeed = windSpeed;
        this.cloudPercent = cloudPercent;
    }

    static createCurrentWeather = (data) => {
        const name = data.name,
            main = data.weather[0].main,
            description = data.weather[0].description,
            icon = data.weather[0].icon,
            temperature = data.main.temp,
            feelsLike = data.main.feels_like,
            humidity = data.main.humidity,
            windSpeed = data.wind.speed,
            cloudPercent = data.clouds.all;
        
        return new CurrentWeather(name, main, description, icon, temperature, feelsLike, humidity, windSpeed, cloudPercent);
    }
}