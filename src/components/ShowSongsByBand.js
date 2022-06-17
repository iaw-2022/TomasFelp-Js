import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import SimpleTextFilter from './SimpleTextFilter'

import { Link } from 'react-router-dom'
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
                <table className='table table-dark table-striped mt-5 shadow-lg'>
                    <thead>
                        <th class="bg-black">name</th>
                        <th class="bg-black">album</th>
                        <th class="bg-black">release date</th>
                    </thead>
                    <tbody>
                        {results.map((song) => (
                            <tr key={song.id}>
                                <td className="border-0">
                                <Link to={`/song/${song.name}`} state={{ from: song }} className="link-warning">{song.name}</Link>
                                </td>
                                <td className="border-0">
                                    {song.album}
                                </td>
                                <td className="border-0">
                                    {song.release_date}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ShowSongsByBand
