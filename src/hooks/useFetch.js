import { useEffect, useState } from "react";

export const useFetch = (url, condition = true) => {

    const [state, setState] = useState({data: null, loading: true})

    useEffect(() => {
        if(condition){
            setState(state => ({data: state.data, loading: true}))
    
            fetch(url)
            .then((response) => response.json())
            .then(data => setState({data: data.results, loading: false}))
        }

    }, [url, setState, condition])

    return state
}