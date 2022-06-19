import React from 'react'

const SpotifyPlayer = (props) => {
    return (
        <iframe className="opacity-100" width="70%" height="80"
            src={props.url} 
            title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
    )
}

export default SpotifyPlayer
