import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Nav />
      {/* Banner */}
      <Banner fetchUrl={requests.fetchNetflixOriginals} />
      {/* Rows */}
      <div style={{ padding: "10px", margin: "0px", backgroundColor: " #111" }}>
        <Row
          title="Netflix originals"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
        />
        <Row title="Trending now" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Action" fetchUrl={requests.fetchActionMovies} />
        <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      </div>
    </div>
  );
}

export default App;
