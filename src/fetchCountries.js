const fetchCountries = name => {
    return fetch(
        `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags.svg,languages`,
    )
        .then(resolve => {
            if (!resolve.ok) throw new Error(resolve.status);
            return resolve.json();
        })
        
}

export { fetchCountries };
