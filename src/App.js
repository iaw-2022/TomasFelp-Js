
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ShowGenres from './components/ShowGenres';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
   

        <BrowserRouter>
          <Routes> 
             <Route path="/" element={<Home/>} />
             <Route path="/genres" element={<ShowGenres/>} />
          </Routes> 
        </BrowserRouter>

      </header>
    </div>
  );
}

export default App;
