import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import SimpleTextFilter from './SimpleTextFilter'
import SongCardSimple from './SongCardSimple'

import { useLocation } from 'react-router-dom'
const endpoint= 'https://indie-music.herokuapp.com/api'

const ShowSongsByBand = () => {
    const [ songs, setSongs] = useState([])
    const [ search, setSearch] = useState("")
    const [ results, setResults] = useState([])
    
    let { band } = useParams();
    const location = useLocation()
    const { from } = location.state

    useEffect(() => {
        getSongs()
    }, [])

    const searcher = (e) => {
        setSearch(e.target.value)
    }

    const getSongs = async () => {
        const response = await axios.get(`${endpoint}/band/songs/${band}`)
        setSongs(response.data)
        setResults(response.data)
    }

    const onFormSubmit = e => {
        e.preventDefault();
        update()
    }

    const update = () => {
        setResults( songs.filter((dato)=> dato.name.toLowerCase().includes(search.toLocaleLowerCase())))
    }

    let officialWebsite
    if(from.web_link!=""){
        officialWebsite=<a href={from.web_link} class="link-warning">official Web site</a>
    }else{
        officialWebsite=<text class="opacity-50">official Web site</text>
    }

    return (
        <div className="container-fluid opacity-75">

            <div className="navbar justify-content-center navbar-dark bg-dark container-fluid">
                <div className="container-md">
                <SimpleTextFilter
                        text={"songs of "+from.name}
                        onFormSubmit={onFormSubmit}
                        search={search}
                        searcher={searcher}
                        update={update}
                    />
                </div>
            </div>

            <div className="container-md">
                    {officialWebsite}
            </div>
           
           <div className="min-vh-100 container-md">

                <div class="row row-cols-1 row-cols-md-2 gx-2 pb-5">
                    {results.map((song) => (
                        <div className="col">
                            <SongCardSimple song={song}/>
                        </div>    
                    ))}
                </div>

            </div>
        </div>
    )
}

export default ShowSongsByBand
