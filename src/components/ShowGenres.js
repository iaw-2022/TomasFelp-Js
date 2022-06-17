import React, {useEffect, useState} from 'react'
import axios from 'axios'
import SimpleTextFilter from './SimpleTextFilter'

import { Link } from 'react-router-dom'


const endpoint= 'https://indie-music.herokuapp.com/api'

const ShowGenres = () => {

    const [ genres, setGenres] = useState([])
    const [ results, setResults] = useState([])
    const [ search, setSearch] = useState("")

    useEffect(() => {
        getAllGenres()
    }, [])

    const searcher = (e) => {
        setSearch(e.target.value)
    }

    const getAllGenres = async () => {
        const response = await axios.get(`${endpoint}/genres`)
        setGenres(response.data)
        setResults(response.data)
    }

    const onFormSubmit = e => {
        e.preventDefault();
        update()
    }

    const update = () => {
        setResults( genres.filter((dato)=> dato.name.toLowerCase().includes(search.toLocaleLowerCase())))
    }

    return (
        <div className="container-fluid opacity-75">

            <div className="navbar justify-content-center navbar-dark bg-dark container-fluid">
                <div className="container-md">
                    <SimpleTextFilter
                        text="Genres"
                        onFormSubmit={onFormSubmit}
                        search={search}
                        searcher={searcher}
                        update={update}
                    />
                </div>

            </div>
           
           <div className="min-vh-100 container-md">
                <table className='table table-dark table-striped mt-5 shadow-lg'>
                    <thead>
                        <th class="bg-black">Name</th>
                    </thead>
                    <tbody>
                        {results.map((genre) => (
                            <tr key={genre.id}>
                                <td className="border border-0 rounded-end rounded-3">
                                    <Link to={`/bands/${genre.name.toLowerCase()}`} className="link-warning">{genre.name}</Link>
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
