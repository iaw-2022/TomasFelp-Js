import React from 'react'
import SongCard from './SongCard'

const CarruselSongs = (props) => {
    return (
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">     
                    <SongCard song={props.firstSong}/>
                </div>


                {props.songCards.map((song) => (
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
    )
}

export default CarruselSongs
