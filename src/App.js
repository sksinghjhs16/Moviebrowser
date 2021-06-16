import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import SearchView from './components/SearchView';
import DeatiledView from './components/DetailedView';
import NoMatchPage from './components/NoMatchPage';
import { Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';


function App() {
  const [searchResults, setSearchResults] = useState ([]);
  const [searchText, setSearchText] = useState ('');

  useEffect ( () => {
    if(searchText){
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=14c46932b9b87948ea22f6bb7b24eaef&language=en-US&query=${searchText}&page=1&include_adult=false`)
      .then(response => response.json())
      .then(data => {
        setSearchResults(data.results);
      })
    }
  }, [searchText])
  
  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} searchResults={searchResults}/>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/about" component={About} />
        <Route path="/search">
          <SearchView keyWord={searchText} searchResults={searchResults}/>
        </Route>
        <Route path="/movies/:id">
          <DeatiledView/>
        </Route>
        <Route component={NoMatchPage} />
      </Switch> 
    </div>
  );
}

export default App;
