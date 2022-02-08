import './App.css';
import MovieRow from './components/MovieRow';
import Banner from './components/Banner';
import NavigationBar from './components/NavigationBar';
import { useFetch } from './hooks/useFetch';
import React, { useState } from 'react';

const API_KEY = 'api_key=f8428edb1d76821312efe3c8e4ed1995'
const BASE_URL = 'https://api.themoviedb.org/3/'

const API_URLS = {
  queryMovies: BASE_URL + 'search/movie?' + API_KEY + '&query=',
  popularMovies: BASE_URL + 'movie/popular?' + API_KEY,
  topRatedMovies: BASE_URL + 'movie/top_rated?' + API_KEY,
  trendingMovies: BASE_URL + 'trending/movie/day?' + API_KEY,
  upcomingMovies: BASE_URL + 'movie/upcoming?' + API_KEY
}

function App() {
  const {queryMovies, popularMovies, topRatedMovies, trendingMovies, upcomingMovies} = API_URLS

  const [query, setQuery] = useState('')
 
  const queryMoviesData = useFetch(queryMovies+query, query !== '')
  const popularMoviesData = useFetch(popularMovies)
  const topRatedMoviesData = useFetch(topRatedMovies)
  const trendingMoviesData = useFetch(trendingMovies)
  const upcomingMoviesData = useFetch(upcomingMovies)

  return (
    <div className="App">

      {/* <NavigationBar query={query} setQuery={setQuery}/> */}
      <Banner />

      {/* {queryMoviesData.data && query !== '' && <MovieRow title={`Results for "${query}"`} movies={queryMoviesData.data} large={true}/>} */}
      {!popularMoviesData.loading && <MovieRow title="Popular Movies" movies={popularMoviesData.data} large={true}/>}
      {/* {!topRatedMoviesData.loading && <MovieRow title="Top Rated Movies" movies={topRatedMoviesData.data} large={true}/>} */}
      {/* {!trendingMoviesData.loading && <MovieRow title="Trending Movies" movies={trendingMoviesData.data} large={true}/>} */}
      {/* {!upcomingMoviesData.loading && <MovieRow title="Upcoming Movies" movies={upcomingMoviesData.data} large={true}/>} */}

    </div>
  );
}

export default App;
