import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const AboutCountry = () => {
    const {countryName} = useParams();
    // console.log(countryName);
    const [country, setCountry] = useState({});
    useEffect(() => {
        // const url =`https://restcountries.eu/rest/v2/name/${countryName}`;
        fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
        .then(res => res.json())
        .then(data => setCountry(data));
    },[])
    return (
        <div>
            <p>This is country Details component: {countryName}</p>
    <h4>Country Name: {country.topLevelDomain}</h4>
        </div>
    );
};

export default AboutCountry;