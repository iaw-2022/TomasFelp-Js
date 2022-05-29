import React from 'react'
import { useParams } from 'react-router'
import { useLocation } from 'react-router-dom'

const Song = () => {
    let { song } = useParams();
    const location = useLocation()
    const { from } = location.state

    let youtubePlayer

    if(from.youtube_link!=""){
        youtubePlayer=<iframe width="70%" height="315" 
                            src={from.youtube_link}
                            title="YouTube video player" frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                        </iframe>
    }else{
        youtubePlayer=<p class="card-text">playback on youtube is not available for this title</p>
    }

    let spotifyPlayer
    if(from.spotify_link!=""){
        spotifyPlayer=<iframe className="opacity-100" width="70%" height="80"
                            src={from.spotify_link} 
                            title="YouTube video player" frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                        </iframe>
    }else{
        spotifyPlayer=<p class="card-text">spotify preview is not available for this title</p>
    }

    return (
        <div  className="container-md opacity-75 min-vh-100">

           <div class="card text-center bg-dark mt-5">
                <div class="card-header">
                    <h1>{from.name}</h1>
                </div>
                <div class="card-body container-sm">
                    <h5 class="card-title">Album: {from.album}</h5>
                    <p class="card-text">Release date: {from.release_date}</p>

                    {youtubePlayer}
                    
                    {spotifyPlayer}
                    
                </div>
                <div class="card-footer text-muted">

                </div>
                </div> 
        </div>
    )
}

export default Song
