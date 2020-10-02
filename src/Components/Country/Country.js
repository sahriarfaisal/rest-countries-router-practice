import React from 'react';
import { Link } from 'react-router-dom';

const Country = (props) => {
    const {name, capital,population} = props.country;
    const countryStyle = {
        border: '2px dotted pink',
        borderRadius: '20px',
        margin: '20px',
        padding: '20px',
        color: 'gray'

    }
    return (
        <div style = {countryStyle}>
            <h1>Country Name: {name}</h1>
            <h3>Capital : {capital}</h3>
            <h5>Population : {population}</h5>
            {/* <button>

            </button> */}
            <h3><Link to={`/about/${name}`}>About Country</Link></h3>
            

        </div>
    );
};

export default Country;