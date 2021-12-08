import './css/styles.css';
import { fetchCountries } from './fetchCountries';
var debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;

const input = document.querySelector('#search-box');
const list = document.querySelector('.country-list');
const info = document.querySelector('.country-info');

const placeResponse = elements => {
  if (elements.length === 1)
  {
    const markup = elements
      .map(element => {
        return `<li>
                <p class="text"><img class="svg__img" src="${element.flags.svg}" alt="Flaga panstwa"> ${ element.name.common} </p>
                <p> <b>Capital: </b> ${element.capital} </p>
                <p> <b>Population: </b>${element.population} </p>
                <p> <b>Languages: </b>${Object.values(element.languages)} </p>
            </li>`;
        })
      .join('');
    info.innerHTML = markup;
    list.innerHTML = '';
  }
  else if (elements.length >= 2 && elements.length <= 10) {
    const markup = elements
      .map(element => {
        return `<li class="library">
                <p class="textSmall"> <img class="svg__img-small" src="${element.flags.svg}" alt="Flaga panstwa"> ${element.name.common} </p>
            </li>`;
      })
      .join(' ');
    list.innerHTML = markup;
    info.innerHTML = '';
  }
};

const checkInput = () => {
  if (input.value === '') {
    info.innerHTML = '';
    list.innerHTML = '';
    return true;
  }
  return false;
}

input.addEventListener(
  'input',
  debounce(() => {
    let names = input.value;
    if(checkInput()) return;
    fetchCountries(names).then(elements => placeResponse(elements));
  }, DEBOUNCE_DELAY),
);
