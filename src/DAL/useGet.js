import { useState, useEffect } from 'react';
import axios from 'axios';



export default function useGet  (number) {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);

    const fetchData = () => {
        axios
            .get(`https://www.metaweather.com/api/location/${number}`)
            .then((res) => {
              //  console.log(res.data)
                setResponse(res.data);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setloading(false);
            });
    };

    useEffect(() => {
        fetchData();
    }, [number]);
    //console.log(response)
    // custom hook returns value
    return { response, error, loading };
    
};




