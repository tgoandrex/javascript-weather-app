export class CurrentWeather {
    constructor(name, main, icon, temperature, feelsLike, humidity, windSpeed, cloudPercent) {
        this.name = name;
        this.main = main;
        this.icon = icon;
        this.temperature = temperature;
        this.feelsLike = feelsLike;
        this.humidity = humidity;
        this.windSpeed = windSpeed;
        this.cloudPercent = cloudPercent;
    }

    static createCurrentWeather = (data) => {
        const name = data.name + ', ' + data.sys.country,
            main = data.weather[0].main,
            icon = data.weather[0].icon,
            temperature = Math.round(data.main.temp),
            feelsLike = Math.round(data.main.feels_like),
            humidity = data.main.humidity,
            windSpeed = data.wind.speed,
            cloudPercent = data.clouds.all;
        
        return new CurrentWeather(name, main, icon, temperature, feelsLike, humidity, windSpeed, cloudPercent);
    }
}