import axios from 'axios'
import { useState, useEffect } from 'react'

const API = () => {
     //useState 
    const [ quote, setQuote ] = useState({});

    useEffect(() => {
        getApi()
    },[])
    const getApi = () => {
        const options = {
            method: 'GET',
            url: 'https://quotes15.p.rapidapi.com/quotes/random/',
            headers: {
              'x-rapidapi-host': 'quotes15.p.rapidapi.com',
              'x-rapidapi-key': 'b8f04be492msh8ec26fac246bb32p135015jsnbc4f2bc407f2'
            }
          };
          
          axios.request(options).then((response) => {setQuote(response.data)})
    }
        return (
             <div>{quote.content}</div>
         
        )
}


export default API