import React from 'react';
import './App.css';
import Row from './Row'
import request from './requests';

function App() {
  return (
    <div className="App">
      <h1>Hello Anthony</h1>
      <Row title="Netflix Originals" fetchUrl={request.fetchNetflixOriginals}/>
      <Row title="Trending Now" etchUrl={request.fetchTrending}/>
    </div>
  );
}

export default App;
