import { Notify } from "notiflix";

const fetchCountries = name => {
    return fetch(
        `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`,
    )
        .then(resolve => {
            if (!resolve.ok) throw new Error(resolve.status);
            return resolve.json();
        })
        .catch(error => {
            if (error == "Error: 404") {
                Notify.failure('Oops, there is no country with that name');
            } 
        });
}



export { fetchCountries };
