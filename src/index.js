import './css/styles.css';
import { fetchCountries } from './fetchCountries';
var debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;

const input = document.querySelector("#search-box");

input.addEventListener("input", debounce(() => {
    let name = input.value;
    fetchCountries(name);
}, DEBOUNCE_DELAY)
);