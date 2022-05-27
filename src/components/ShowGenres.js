import React, {useEffect, useState} from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'


const endpoint= 'https://indie-music.herokuapp.com/api'

const ShowGenres = () => {

    const [ genres, setGenres] = useState([])

    const [ search, setSearch] = useState("")

    useEffect(() => {
        getAllGenres()
    }, [])

    const searcher = (e) => {
        setSearch(e.target.value)
    }

    const results = !search ? genres : genres.filter((dato)=> dato.name.toLowerCase().includes(search.toLocaleLowerCase()))


    const getAllGenres = async () => {
        const response = await axios.get(`${endpoint}/genres`)
        setGenres(response.data)
    }

    return (
        <div className="container-md">
            <div>
                <h2 className="text-center">
                    Genres
                </h2>

                <input value={search} onChange={searcher} type="text" placeholder="Search" className="form-control mt-5 shadow-lg bg-dark text-white"/>
            </div>
           
           <div className="min-vh-100">
                <table className='table table-dark table-striped mt-5 shadow-lg'>
                    <thead>
                        <th class="bg-black">Name</th>
                    </thead>
                    <tbody>
                        {results.map((genre) => (
                            <tr key={genre.id}>
                                <td className="border border-0 rounded-end rounded-3">
                                    {genre.name}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
        
        
    )
}

export default ShowGenres
