import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Axios = () => {
    const [country, setCountry] = useState([])
   
    // useEffect(()=>{
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(response => response.json())
    //     .then(data => setUser(data[0].body))
    // },[])
    useEffect( ()=>{
        const url = 'https://restcountries.eu/rest/v2/all'
        axios(url)
        .then(data => {
            setCountry(data.data)
            console.log(data);
         const name = data.data.map(country => country.name)
         console.log(name);

        })
        
    },[])
    

    return (
        <div>
            <p>Axios - Home work Practice From Nahid vai </p>
            <p>{country.length}</p>
           <ul>
               {
                   country.map(contry => <li>{contry.name}</li>)
               }
           </ul>
        </div>
    );
};

export default Axios;