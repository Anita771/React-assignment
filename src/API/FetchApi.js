import React from 'react';
import { useState, useEffect } from 'react';
import  Table  from 'react-bootstrap/Table';
import "bootstrap/dist/css/bootstrap.min.css";




export default function FetchAPI() {

    const [data, setdata] = useState([]);
    const apiGet = () => {
        fetch('https://restcountries.com/v3.1/all')
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                //used slice method to have five countries
                setdata(json.slice(0, 5)



                );

            });

    };
    useEffect(() => {
        apiGet()
    }, [])



    return (
        <div className='container'>

            <Table>

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
                        <tr key={data.index}>
                            <td>{item.flag}</td>
                            <td>{item.name.common}</td>
                            <td>{item.region}</td>
                            <td>{item.population}</td>
                            <td> <ul>
                                {item.languages &&
                                    Object.values(item.languages).map((language) => (
                                        <li key={data.index}>{language}</li>
                                    ))}
                            </ul>
                            </td>
                            <td>&gt;</td>
                        </tr>
                    </tbody>
                ))}

            </Table>



        </div>


    );

}

