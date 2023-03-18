import React from 'react';

const CountrySelect = ({countries, onCountrySelected}) => {

    const countryOptions = countries.map((country, index) => {
        return <option value="index" key="index">{country.name.common}</option>
    })

    const handleChange = function(evt) {
        console.log(evt.target.value);
    }


    return (
        <select onChange={handleChange}>
            <option value="">What country do you want?</option>
            {countryOptions}
        </select>
    )

// const handleChange = (event) => {
// const index = event.target.value;
// const country = countries[index];
// onCountrySelected(country);
// }

// const countryOptions = countries.map((country, index) => {
// return (
// <option key={index} value={index}>
// {country.name.common}
// </option>
// );
// });

// return (
// <div className="country-select">
// <select onChange={handleChange}>
// <option>Select a country</option>
// {countryOptions}
// </select>
// </div>
// );
}

export default CountrySelect;

