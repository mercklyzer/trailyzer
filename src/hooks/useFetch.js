import { useEffect, useState } from "react";

export const useFetch = url => {
    const [state, setState] = useState({data: null, loading: true})

    useEffect(() => {
        setState(state => ({data: state.data, loading: true}))

        fetch(url)
        .then((response) => response.json())
        .then(data => setState({data: data.results, loading: false}))

    }, [url, setState])

    return state
}