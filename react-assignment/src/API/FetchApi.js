import React from 'react';
import { useState, useEffect } from 'react';


export default function FetchAPI(props) {
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

                {data.map((item => 
                    <tbody>



                        <tr>
                            <td>{item.flag}</td>
                            <td>{item.name.common}</td>
                            <td>{item.region}</td>
                            <td>{item.population}</td>
                           <td> <ul>
                    {item.languages &&
                      Object.values(item.languages).map((language) => (
                        <li>{language}</li>
                      ))}
                  </ul>
                  </td>
                            <td>&gt;</td>
                        </tr>
                    </tbody>
                ))}

            </table>
        </div>
        


    );

}

