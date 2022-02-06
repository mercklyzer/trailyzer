import logo from './logo.svg';
import './App.css';
import MovieRow from './components/MovieRow';
import Banner from './components/Banner';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <div className="App">

      <NavigationBar />
      <Banner />

      <MovieRow title="Netflix Originals" large={true}/>
      <MovieRow title="Top Rated" />
      <MovieRow title="Trending Now" />
      <MovieRow title="Action Movies" />
      <MovieRow title="Comedy Movies" />
      <MovieRow title="Horror Movies" />
      <MovieRow title="Romance Movies" />
      <MovieRow title="Documentaries" />


    </div>
  );
}

export default App;
