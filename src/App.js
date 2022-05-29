import './Background.css';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ShowGenres from './components/ShowGenres';
import ShowBandsByGenre from './components/ShowBandsByGenre';
import ShowSongsByBand from './components/ShowSongsByBand';
import Song from './components/Song';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      <div class="bg"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>

      <nav className="navbar justify-content-center navbar-dark bg-dark container-fluid opacity-75 shadow">
        <div className="container-fluid">
          <form className="d-flex">
            <a class="nav-link" href="/">Home</a>
            <a class="nav-link" href="/genres">Genres</a>
            <a class="nav-link" href="/bands">Bands</a>
            <a class="nav-link" href="/song">Songs</a>
          </form>
        </div>
      </nav>
   
        <BrowserRouter>
          <Routes> 
             <Route path="/" element={<Home/>} />
             <Route path="/genres" element={<ShowGenres/>} />
             <Route path="/bands/:genre" element={<ShowBandsByGenre/>} />
             <Route path="/songs/:band" element={<ShowSongsByBand/>} />
             <Route path="/song/:band" element={<Song/>} />
          </Routes> 
        </BrowserRouter>

      </header>
    </div>
  );
}

export default App;
