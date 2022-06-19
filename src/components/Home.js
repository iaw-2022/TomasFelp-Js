import React, {useEffect, useState} from 'react'
import axios from 'axios'
import logo from '../logo.svg';
import CarruselSongs from './CarruselSongs';

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

        <CarruselSongs firstSong={songs[0]} songCards={songCards}/>

      </header>
    </div>
  );
}

export default App;