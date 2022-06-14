import './Background.css';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ShowGenres from './components/ShowGenres';
import ShowBandsByGenre from './components/ShowBandsByGenre';
import ShowSongsByBand from './components/ShowSongsByBand';
import ShowSongs from './components/ShowSongs';
import Song from './components/Song';
import Home from './components/Home';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <div class="bg"></div>
        <div class="bg bg2"></div>
        <div class="bg bg3"></div>

        

        <BrowserRouter>
          <NavBar/>
          <Routes> 
             <Route path="/" element={<Home/>} />
             <Route path="/genres" element={<ShowGenres/>} />
             <Route path="/bands/:genre" element={<ShowBandsByGenre/>} />
             <Route path="/songs/:band" element={<ShowSongsByBand/>} />
             <Route path="/songs/filter" element={<ShowSongs/>} />
             <Route path="/song/:name" element={<Song/>} />
          </Routes> 
        </BrowserRouter>

      </header>
      
    </div>
  );
}

export default App;
