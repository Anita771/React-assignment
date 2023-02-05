import React from 'react';
import { useState, useEffect } from 'react';


export default function FetchAPI() {
    const [data, setdata] = useState([]);

    const apiGet = () => {
        fetch('https://restcountries.com/v3.1/all')
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setdata(json);

            });

    };
    useEffect(() => {
        apiGet()
    }, [])
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
                        <th>        </th>

                    </tr>
                </thead>

                {data.map((Object =>
                <tbody>
                    


                        <tr>
                            <td>{Object.flag}</td>
                            <td>{Object.name.common}</td>
                            <td>{Object.region}</td>
                            <td>{Object.population}</td>
                            <td>languages</td>
                            <td>{'>'}</td>
                        </tr>
                </tbody>
                ))}
                
            </table>
        </div>
       

    );

}  

