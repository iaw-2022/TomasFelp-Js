import React, {useEffect, useState} from 'react'
import axios from 'axios'
import logo from '../logo.svg';
import SongCard from './SongCard';

const endpoint= 'https://indie-music.herokuapp.com/api'

function App() {
  const [ songs, setSongs] = useState([""])

  const getSongs = async () => {
    const response = await axios.get(`${endpoint}/songs`)
    setSongs(response.data.data)
  }

  useEffect(() => {
    getSongs()
}, [])


var songCards = [];
for (let i = 1; i < songs.length; i++) {
  songCards.push(songs[i])

}

  var carrusel = <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                  <div class="carousel-inner">
                  <div class="carousel-item active">     
                    <SongCard song={songs[0]}/>
                  </div>
        

                  {songCards.map((song) => (
                        <div class="carousel-item">
                        <SongCard song={song}/>
                    </div>
                  ))}
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Under Music App
        </p>

        <img src={logo} className="App-logo" alt="logo" />

        <p className="text-lightBlue">
          Latest additions
        </p>

        {carrusel}

      </header>
    </div>
  );
}

export default App;