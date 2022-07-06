export class Forecast {
    constructor(name, forecasts) {
        this.name = name;
        this.forecasts = forecasts;
    }

    static createForecasts = (data) => {
        let dates = [
            data.list[0].dt, data.list[4].dt, data.list[8].dt, data.list[12].dt,
            data.list[16].dt, data.list[20].dt, data.list[24].dt
        ];
        let datesFormatted = [];
        dates.forEach(function(date) {
            return datesFormatted.push(String(new Date(date * 1000.)).slice(0,21));
        });

        const name = data.city.name,
            forecasts = [
                [datesFormatted[0], Math.round(data.list[0].main.temp), 
                Math.round(data.list[0].main.feels_like), data.list[0].weather[0].icon],
                [datesFormatted[1], Math.round(data.list[4].main.temp), 
                Math.round(data.list[4].main.feels_like), data.list[4].weather[0].icon],
                [datesFormatted[2], Math.round(data.list[8].main.temp), 
                Math.round(data.list[8].main.feels_like), data.list[8].weather[0].icon],
                [datesFormatted[3], Math.round(data.list[12].main.temp), 
                Math.round(data.list[12].main.feels_like), data.list[12].weather[0].icon],
                [datesFormatted[4], Math.round(data.list[16].main.temp), 
                Math.round(data.list[16].main.feels_like), data.list[16].weather[0].icon],
                [datesFormatted[5], Math.round(data.list[20].main.temp), 
                Math.round(data.list[20].main.feels_like), data.list[20].weather[0].icon],
                [datesFormatted[6], Math.round(data.list[24].main.temp), 
                Math.round(data.list[24].main.feels_like), data.list[24].weather[0].icon],
            ]
        return new Forecast(name, forecasts);
    }
}