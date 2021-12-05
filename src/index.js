import './css/styles.css';
import { fetchCountries } from './fetchCountries';
var debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;

const input = document.querySelector('#search-box');
const list = document.querySelector('.country-list');
const info = document.querySelector('.country-info');

const placeResponse = elements => {
  const markup = elements
    .map(element => {
      return `<li>
                <p> ${element.name.official} </p>
            </li>`;
    })
    .join(' ');
  list.innerHTML = markup;
};

input.addEventListener(
  'input',
  debounce(() => {
      let names = input.value;
      
      fetchCountries(names)
          .then(elements => placeResponse(elements));
      
  }, DEBOUNCE_DELAY),
);
