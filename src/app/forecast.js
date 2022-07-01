import { BASE_URL_FIVE_DAY_FORECAST, API_KEY } from './utils/keys';
import axios from 'axios';

export class Forecast {
    constructor(forecasts) {
        this.forecasts = forecasts
    }
    
    static getForecast = () => {
        axios.get(`${BASE_URL_FIVE_DAY_FORECAST}?q=london&appid=${API_KEY}&units=imperial`) // 'london' is temporarily hardcoded
        .then(res => console.log(this.createForecasts(res.data)))
        .catch(err => {console.log(`error 5 day: ${err}`)})
    }

    static createForecasts = (data) => {
        const forecasts = [
            data.list[0], data.list[2], data.list[4],
            data.list[6], data.list[8], data.list[10],
            data.list[12], data.list[14], data.list[16],
            data.list[18], data.list[20], data.list[22],
            data.list[24], data.list[26], data.list[28],
            data.list[30], data.list[32], data.list[34],
            data.list[36]
        ];
        
        return new Forecast(forecasts);
    }
}