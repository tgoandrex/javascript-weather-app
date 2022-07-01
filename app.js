import { CurrentWeather } from "./src/app/currentWeather";
import { Forecast } from "./src/app/forecast";

export const run = () => {
    CurrentWeather.getCurrentWeather();
    Forecast.getForecast();
}