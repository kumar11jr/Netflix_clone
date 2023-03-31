import './App.css';
import Row from './Row';
import requests from './requests';
import Corosal from './Corosal';
import Nav from './Nav';


function App() {
  return (
  
    <div className="App">
    <Nav/>
    <Corosal/>
    <Row title="NETFLIX ORIGINAL" fetchUrl={requests.fetchNetflixOriginal} original/>
    <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
    
    <Row title="Comedy" fetchUrl={requests.fetchComedyMovies}/>
    <Row title="Action Drama" fetchUrl={requests.fetchActionMovies}/>
    <Row title="Horror Collections" fetchUrl={requests.fetchHorrorMovies}/>
    <Row title="Romanance" fetchUrl={requests.fetchRomanceMovies}/>
    </div>
  );
}

export default App;
