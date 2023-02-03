import React from "react";
import { useState } from "react";
import { fetchCountryData } from "../fetch-data";


export default function Homepage() {
    const [countrydata, setCountryData]= useState(fetchCountryData);
    return (
        <div className='container'>
            <table>
                <thead>
                    <tr>
                        <th>Flag</th>
                        <th>Name</th>
                        <th>Region</th>
                        <th>Population</th>
                        <th>Language</th>
                        <th>         </th>

                    </tr>
                </thead>
                <tbody>
                    {countrydata.map((countrydata)=> (
                    <tr>
                        <td>{countrydata.flag}</td>
                        <td>{countrydata.name}</td>
                        <td>{countrydata.region}</td>
                        <td>{countrydata.population}</td>
                        <td>{countrydata.language}</td>
                        <td>{'>'}</td>

                    </tr>
                    ))}
                    
                </tbody>
            </table>


        </div>
    );
}