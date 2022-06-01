import React from 'react'

function SongCard(props){
    
    let youtubePlayer

    if(props.song.youtube_link!=""){
        youtubePlayer=<iframe width="70%" height="315" 
                            src={props.song.youtube_link}
                            title="YouTube video player" frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                        </iframe>
    }else{
        youtubePlayer=<p class="card-text">playback on youtube is not available for this title</p>
    }

    let spotifyPlayer
    if(props.song.spotify_link!=""){
        spotifyPlayer=<iframe className="opacity-100" width="70%" height="80"
                            src={props.song.spotify_link} 
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

/**
 




 */