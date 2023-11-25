import { useEffect, useState } from 'react';

const useMovieDetail = (id) => {
    const api = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_API_KEY}`;
    
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${process.env.NEXT_ACCESS_TOKEN}`
        }
      };

    useEffect(() => {
        setLoading(true);
        fetch(api, options)
            .then(response => response.json())
            .then(response => {
                setLoading(false);
                setData(response);
            })
            .catch(err => {
                setLoading(false);
                setError(true);
                console.log(err)
            });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


      return { data, loading ,error };
}
 
export default useMovieDetail;