import React from 'react';
import './App.css';
import Row from './Row'
import request from './requests';

function App() {
  return (
    <div className="App">
      <h1>Hello Anthony</h1>
      <Row title="Netflix Originals" fetchUrl={request.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchUrl={request.fetchTrending}/>
      <Row title="Action" fetchUrl={request.fetchActionMovies}/>
      <Row title="Comedy" fetchUrl={request.fetchComedyMovies}/>
      <Row title="Horror" fetchUrl={request.fetchHorrorMovies}/>
      <Row title="Romance" fetchUrl={request.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries}/>
    </div>
  );
}

export default App;
