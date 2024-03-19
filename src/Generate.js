import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AppContext } from './App';
import Axios from 'axios';


const Generate = () => {

    const { data, isLoading, isError, refetch } = useQuery({
        queryKey: ["joke"],
        queryFn: () => Axios.get("https://official-joke-api.appspot.com/random_joke").then((res) => res.data )
    })

    return (
        <div>
            <p>
                Setup: &nbsp;
                {isLoading ? " Fetching data..." : data?.setup}
                {isError ? " Error fetching data..." : ''}
            </p>
            <p>
                Punchline: &nbsp;
                {isLoading ? " Fetching data..." : ""} 
                {isError ? " Error fetching data..." : data?.punchline}
            </p>
            <button onClick={refetch}>Generate</button>
        </div>
    )
}

export default Generate