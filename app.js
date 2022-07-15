import { DOM } from './src/app/dom';
import { removeAllChildNodes } from './src/app/utils/functions';

document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();

    const content = document.getElementById('content');
    removeAllChildNodes(content);

    const cityName = document.getElementById('city').value;

    DOM.displayCurrentWeather(cityName);
    DOM.displayFiveDayForecast(cityName);
});

export const run = () => {
    DOM.generateBackground();
}