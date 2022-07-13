export class Forecast {
    constructor(forecasts) {
        this.forecasts = forecasts;
    }

    static createForecasts = (data) => {
        let dates = [
            data.list[0].dt, data.list[2].dt, data.list[4].dt, data.list[6].dt, data.list[8].dt, data.list[10].dt,
            data.list[12].dt, data.list[14].dt, data.list[16].dt, data.list[18].dt, data.list[20].dt, 
            data.list[22].dt, data.list[24].dt
        ];
        let datesFormatted = [];
        dates.forEach(function(date) {
            return datesFormatted.push(String(new Date(date * 1000.)).slice(0,21));
        });

        const forecasts = [
                [datesFormatted[0], Math.round(data.list[0].main.temp), 
                Math.round(data.list[0].main.feels_like), `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}.png`],
                [datesFormatted[1], Math.round(data.list[2].main.temp), 
                Math.round(data.list[2].main.feels_like), `http://openweathermap.org/img/wn/${data.list[2].weather[0].icon}.png`],
                [datesFormatted[2], Math.round(data.list[4].main.temp), 
                Math.round(data.list[4].main.feels_like), `http://openweathermap.org/img/wn/${data.list[4].weather[0].icon}.png`],
                [datesFormatted[3], Math.round(data.list[6].main.temp), 
                Math.round(data.list[6].main.feels_like), `http://openweathermap.org/img/wn/${data.list[6].weather[0].icon}.png`],
                [datesFormatted[4], Math.round(data.list[8].main.temp), 
                Math.round(data.list[8].main.feels_like), `http://openweathermap.org/img/wn/${data.list[8].weather[0].icon}.png`],
                [datesFormatted[5], Math.round(data.list[10].main.temp), 
                Math.round(data.list[10].main.feels_like), `http://openweathermap.org/img/wn/${data.list[10].weather[0].icon}.png`],
                [datesFormatted[6], Math.round(data.list[12].main.temp), 
                Math.round(data.list[12].main.feels_like), `http://openweathermap.org/img/wn/${data.list[12].weather[0].icon}.png`],
                [datesFormatted[7], Math.round(data.list[14].main.temp), 
                Math.round(data.list[14].main.feels_like), `http://openweathermap.org/img/wn/${data.list[14].weather[0].icon}.png`],
                [datesFormatted[8], Math.round(data.list[16].main.temp), 
                Math.round(data.list[16].main.feels_like), `http://openweathermap.org/img/wn/${data.list[16].weather[0].icon}.png`],
                [datesFormatted[9], Math.round(data.list[18].main.temp), 
                Math.round(data.list[18].main.feels_like), `http://openweathermap.org/img/wn/${data.list[18].weather[0].icon}.png`],
                [datesFormatted[10], Math.round(data.list[20].main.temp), 
                Math.round(data.list[20].main.feels_like), `http://openweathermap.org/img/wn/${data.list[20].weather[0].icon}.png`],
                [datesFormatted[11], Math.round(data.list[22].main.temp), 
                Math.round(data.list[22].main.feels_like), `http://openweathermap.org/img/wn/${data.list[22].weather[0].icon}.png`],
                [datesFormatted[12], Math.round(data.list[24].main.temp), 
                Math.round(data.list[24].main.feels_like), `http://openweathermap.org/img/wn/${data.list[24].weather[0].icon}.png`],
            ]
        return new Forecast(forecasts);
    }
}