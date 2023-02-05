import React from 'react';
import { useState, useEffect } from 'react';


export default function FetchAPI() {
    const [data,setdata]=useState ([]);

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
},[])
    return (
        <div>
        <button on onClick={apiGet}>Fetch APi</button>
        {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}
        
        <div>
            <ul>
{data.map((Object => 
<li >{Object.flag},{Object.name.official},{Object.region},{Object.population},{Object.language.official}</li>

)
    
    )}
            </ul>
            </div>

        </div>
    );

}
                        