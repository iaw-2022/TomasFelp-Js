import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router'

import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
const endpoint= 'https://indie-music.herokuapp.com/api'

const ShowSongsByBand = () => {
    const [ songs, setSongs] = useState([])
    const [ search, setSearch] = useState("")
    
    let { band } = useParams();
    const location = useLocation()
    const { from } = location.state

    useEffect(() => {
        getBands()
    }, [])

    const searcher = (e) => {
        setSearch(e.target.value)
    }

    const results = !search ? songs : songs.filter((dato)=> dato.name.toLowerCase().includes(search.toLocaleLowerCase()))

    const getBands = async () => {
        const response = await axios.get(`${endpoint}/band/songs/${band}`)
        setSongs(response.data)
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
                    <text className="pe-1">"{from.name}" songs</text>
                    <input value={search} onChange={searcher} className="col form-control me-2 border-warning shadow-lg bg-dark text-white" type="text" name="origin" placeholder="Filter" aria-label="Search"/>
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
                                <Link to="/song/1" state={{ from: song }} className="link-warning">{song.name}</Link>
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
