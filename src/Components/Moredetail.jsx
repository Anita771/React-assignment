import React from 'react';
import { useState, useEffect } from 'react';


export default function Moredetail() {
    const [namedata, setNamedata] = useState(null);

    const apiGet = () => {
        fetch('https://restcountries.com/v3.1/name/{name}')
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setNamedata(json);

            });

    };
    useEffect(() => {
        apiGet()
    }, [])

    return (
    
        <div>    
            <h3>{namedata.name.common}</h3>
            <h2>{namedata.capital}</h2>
            <img
          src={namedata.flags.svg}
          alt={namedata.common}
          width="600"
          height="400"
        />
            <p> The country belongs to <span className="blue">{namedata.region}</span>{" "}
                region and <span className="blue">{namedata.subregion}</span> sub-region.
                Located at the <span className="blue">{namedata.latlng[0]}</span> &deg;N
                and <span className="blue">{namedata.latlng[1]}</span> &deg;W, this
                country has population of{" "}
                <span className="blue">{namedata.population}</span> and it has gained the
                independent, according to the CIA World Factbook.
            </p>
           

        </div>
        
      

    );
}