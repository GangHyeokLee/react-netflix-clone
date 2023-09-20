import './App.css';
import requests from "./api/request";
import Banner from "./components/banner";
import Footer from "./components/footer";
import Nav from "./components/nav";
import Row from "./components/row";

function App() {

  return (
    <div className="app">
      <Nav />
      <Banner />


      <Row
        title="NETFLIX ORIGINALS"
        id="NO"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />

      <Row title="Trending Now" id="TN" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" id="TR" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" id="AM" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" id="CM" fetchUrl={requests.fetchCommedyMovies} />

      <Footer />



    </div>
  );
}

export default App;
