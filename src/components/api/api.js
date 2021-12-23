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
              'x-rapidapi-host': `${process.env.REACT_APP_API_HOST}`,
              'x-rapidapi-key': `${process.env.REACT_APP_API_KEY}`
            }
          };
          
          axios.request(options).then((response) => {setQuote(response.data)})
    }
        return (
             <div>{quote.content}</div>
         
        )
}


export default API