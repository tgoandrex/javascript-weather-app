import { DOM } from './src/app/dom';
import { removeAllChildNodes } from './src/app/utils/functions';
import { content } from './src/app/utils/domElement';

document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();
    removeAllChildNodes(content);

    const cityName = document.getElementById('city').value;

    DOM.displayCurrentWeather(cityName);
    DOM.displayFiveDayForecast(cityName);
});

export const run = () => {
}