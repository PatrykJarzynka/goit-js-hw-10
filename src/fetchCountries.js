const fetchCountries = name => {
    fetch(
      `https://restcountries.com/v3.1/name/${name}?fields=name.official,capital,population,flags.svg,languages`
    )
      .then(resolve => {
        if (!resolve.ok) throw new Error(resolve.status);
        return resolve.json();
      })

      .then(resolve => console.log(resolve));
};

export { fetchCountries };
