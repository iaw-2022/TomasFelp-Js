
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ShowGenres from './components/ShowGenres';
import ShowBandsByGenre from './components/ShowBandsByGenre';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
   

        <BrowserRouter>
          <Routes> 
             <Route path="/" element={<Home/>} />
             <Route path="/genres" element={<ShowGenres/>} />
             <Route path="/bands/:genre" element={<ShowBandsByGenre/>} />
          </Routes> 
        </BrowserRouter>

      </header>
    </div>
  );
}

export default App;
