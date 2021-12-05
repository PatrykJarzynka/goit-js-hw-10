const fetchCountries = name => {
  fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then(resolve => resolve.json())
    .then(resolve => console.log(resolve));
};

export { fetchCountries };
