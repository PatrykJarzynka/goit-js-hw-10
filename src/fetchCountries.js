const fetchCountries = name => {
    return fetch(
        `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`,
    )
        .then(resolve => {
            if (!resolve.ok) throw new Error(resolve.status);
            return resolve.json();
        })
        .catch(error => console.log(error));
}

export { fetchCountries };
