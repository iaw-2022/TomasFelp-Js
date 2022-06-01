import React from 'react'
import SongCard from './SongCard';
import { useLocation } from 'react-router-dom'

const Song = () => {
    const location = useLocation()
    const { from } = location.state

    let youtubePlayer

    return (
        <SongCard song={from}/>
    )
}

export default Song
