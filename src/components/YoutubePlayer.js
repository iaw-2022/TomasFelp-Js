import React from 'react'

const YoutubePlayer = (props) => {
    return (
        <iframe width="70%" height="315" 
            src={props.url}
            title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
    )
}

export default YoutubePlayer
