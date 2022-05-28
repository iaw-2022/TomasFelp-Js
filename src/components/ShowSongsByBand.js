import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router'


import { Link } from 'react-router-dom'

const endpoint= 'https://indie-music.herokuapp.com/api'

const ShowSongsByBand = () => {
    const [ songs, setSongs] = useState([])
    const [ search, setSearch] = useState("")
    
    let { band } = useParams();

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

    return (
        <div className="container-md">
            <div>
                <h2 className="text-center">
                    Songs
                </h2>

                <input value={search} onChange={searcher} type="text" placeholder="Search" className="form-control mt-5 shadow-lg bg-dark text-white"/>
            </div>
           
           <div>
                <table className='table table-dark table-striped mt-5 shadow-lg'>
                    <thead>
                        <th class="bg-black">name</th>
                        <th class="bg-black">album</th>
                        <th class="bg-black">release date</th>
                    </thead>
                    <tbody>
                        {results.map((song) => (
                            <tr key={song.id}>
                                <td className="border border-0 rounded-end rounded-3">
                                <Link to="/song/1" state={{ from: song }} className="link-warning">{song.name}</Link>
                                </td>
                                <td className="border border-0 rounded-end rounded-3">
                                    {song.album}
                                </td>
                                <td className="border border-0 rounded-end rounded-3">
                                    {song.release_date}
                                </td>
                                <td className="border border-0 rounded-end rounded-3">
                                    {song.year}
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
