import React, { useState, useEffect } from 'react';
import CountryDetail from '../components/CountryDetail';
import CountrySelect from '../components/CountrySelect';
import './CountriesContainer.css';

const CountryContainer = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);

    useEffect(() => {
      getCountries();
    }, [])

    // const getCountries = function(){
    //     fetch('https://restcountries.com/v3.1/all')
    //     .then(response => response.json())
    //     .then(jsonData => setCountries(jsonData))
    // }


    const getCountries = async function(){
        const response = await fetch('https://restcountries.com/v3.1/all');
        const countries = await response.json();
        setCountries(countries);
    }

    const onCountryClicked = function(country){
        setSelectedCountry(country);
    }

    const onCountrySelected = function(country){
        setSelectedCountry(country)
    }

    return (
        <div className="main-container">
            {/* <CountryList countries={countries} onCountryClicked={onCountryClicked} /> */}
            <CountrySelect countries={countries} onCountrySelected={null}/>
            { selectedCountry ? <CountryDetail country={selectedCountry} /> : null }
        </div>
    )
}

export default CountryContainer;
