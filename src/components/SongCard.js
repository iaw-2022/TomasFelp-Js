import React from 'react'
import YoutubePlayer from './YoutubePlayer'
import SpotifyPlayer from './SpotifyPlayer'

function SongCard(props){
    
    let youtubePlayer

    if(props.song.youtube_link!=""){
        youtubePlayer=<YoutubePlayer url={props.song.youtube_link}/>
    }else{
        youtubePlayer=<p class="card-text">playback on youtube is not available for this title</p>
    }

    let spotifyPlayer
    if(props.song.spotify_link!=""){
        spotifyPlayer=<SpotifyPlayer url={props.song.spotify_link} />
    }else{
        spotifyPlayer=<p class="card-text">spotify preview is not available for this title</p>
    }

    return (
        <div  className="container-md opacity-75 min-vh-100">

           <div class="card text-center bg-dark mt-5">
                <div class="card-header">
                    <h1>{props.song.name}</h1>
                </div>
                <div class="card-body container-sm">
                    <h5 class="card-title">Album: {props.song.album}</h5>
                    <p class="card-text">Release date: {props.song.release_date}</p>

                    {youtubePlayer}
                    
                    {spotifyPlayer}
                    
                </div>
                <div class="card-footer text-muted">

                </div>
                </div> 
        </div>
    )
}

export default SongCard
